import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

import {
  DndContext,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
  pointerWithin,
  getFirstCollision
} from '@dnd-kit/core'
import { MouseSensor, TouchSensor } from '~/customLibraries/DndKitSensors'
import { arrayMove } from '@dnd-kit/sortable'

import { cloneDeep, isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatter'

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnDraggingCard, setOldColumnDraggingCard] = useState(null)

  const lastOverId = useRef(null)

  const ACTIVE_DRAG_ITEM = useMemo(
    () => ({
      COlUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
      CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
    }),
    []
  )

  // bug when click~~
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 }
  // })

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { delay: 10, tolerance: 500 }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { distance: 10 }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) => column?.cards?.map((card) => card._id)?.includes(cardId))
  }

  const moveCardBetweenDifferentColumns = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardData
  ) => {
    setOrderColumns((prevColumn) => {
      // Tìm vị trí của overCard trong column acitveCard sắp thả vào
      const overCardIndex = overColumn?.cards?.findIndex((c) => c._id === overCardId)

      // Logic tính toán cardIndex mới khi thả vào
      let newCardIndex
      const isBelowOverItem =
        over && active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      const nextColumns = cloneDeep(prevColumn)
      const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id)
      const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id)

      if (nextActiveColumn) {
        //Xóa card từ column cũ
        nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeDragItemId)

        // Thêm placeholder card giữ chỗ
        if (isEmpty(nextActiveColumn.cards)) {
          nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)]
        }

        // Cập nhật lại cardOrderIds
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((c) => c._id)
      }
      if (nextOverColumn) {
        //Kiểm tra xem card kéo vào có tồn tại ở column chưa
        nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeDragItemId)
        // Thêm card đã kéo vào over column theo vị trí index mới

        // Cập nhật chuẩn dữ liệu columnId
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id
        }

        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)

        // Xóa placeholder card giữ chỗ
        nextOverColumn.cards = nextOverColumn.cards.filter((card) => !card.FE_PlaceholderCard)

        // Cập nhật lại cardOrderIds
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map((c) => c._id)
      }

      return nextColumns
    })
  }

  const handleDragStart = (e) => {
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM.CARD : ACTIVE_DRAG_ITEM.COlUMN)
    setActiveDragItemData(e?.active?.data?.current)

    if (e?.active?.data?.current?.columnId) {
      setOldColumnDraggingCard(findColumnByCardId(e?.active?.id))
    }
  }

  const handleDragOver = (e) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM.COlUMN) return

    const { active, over } = e
    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active
    const { id: overCardId } = over

    // Tìm 2 columns theo cardId
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    // Chỉ xử lý khi kéo card qua lại giữa 2 column khác nhau
    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(overColumn, overCardId, active, over, activeColumn, activeDraggingCardData)
    }
  }

  const handleDragEnd = (e) => {
    const { active, over } = e
    if (!active || !over) return

    if (activeDragItemType === ACTIVE_DRAG_ITEM.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active
      const { id: overCardId } = over

      // Tìm 2 columns theo cardId
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      if (oldColumnDraggingCard._id !== overColumn._id) {
        // Xử lý kéo thả card giữa 2 column khác nhau
        moveCardBetweenDifferentColumns(overColumn, overCardId, active, over, activeColumn, activeDraggingCardData)
      } else {
        // Xử lý kéo thả card trong cùng 1 column
        const oldCardIndex = oldColumnDraggingCard?.cards?.findIndex((c) => c._id === activeDragItemId)
        const newCardIndex = overColumn?.cards?.findIndex((c) => c._id === overCardId)
        const dndOrderedCards = arrayMove(oldColumnDraggingCard?.cards, oldCardIndex, newCardIndex)

        setOrderColumns((prevColumn) => {
          //  Clone mảng card cũ
          const nextColumns = cloneDeep(prevColumn)

          const targetColumn = nextColumns.find((c) => c._id === overColumn._id)

          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map((c) => c._id)

          return nextColumns
        })
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM.COlUMN) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumns.findIndex((c) => c._id === active.id)
        const newColumnIndex = orderedColumns.findIndex((c) => c._id === over.id)
        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
        // const dndOrderedColumnsIds =dndOrderedColumns.map(c => c._id)
        setOrderColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnDraggingCard(null)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: 0.5 } } })
  }

  const collisionDetectionStrategy = useCallback(
    (args) => {
      if (activeDragItemType === ACTIVE_DRAG_ITEM.COlUMN) {
        return closestCorners({ ...args })
      }

      // Tìm các điểm va chạm với các điểm
      const pointerIntersections = pointerWithin(args)

      // Thuật toán phát hiện va chạm, nếu không phát hiện va chạm thì không làm gì cả
      if (!pointerIntersections?.length) return

      // Tìm overId đầu tiên trong pointerIntersections trên
      let overId = getFirstCollision(pointerIntersections, 'id')

      if (overId) {
        const checkColumn = orderedColumns.find((column) => column._id === overId)

        if (checkColumn) {
          overId = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (container) => container.id !== overId && checkColumn?.cardOrderIds?.includes(container.id)
            )
          })[0]?.id
        }

        lastOverId.current = overId
        return [{ id: overId }]
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeDragItemType, orderedColumns]
  )

  return (
    <DndContext
      collisionDetection={collisionDetectionStrategy}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: (theme) => theme.trello.boardContentHeight,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM.COlUMN && <Column column={activeDragItemData} />}
          {activeDragItemType === ACTIVE_DRAG_ITEM.CARD && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
