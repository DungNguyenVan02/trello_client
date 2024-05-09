import { useEffect, useMemo, useState } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import { cloneDeep } from 'lodash'

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

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
    setOrderColumns(mapOrder(board?.columns, board.columnOrderIds, '_id'))
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) => column?.cards?.map((card) => card._id)?.includes(cardId))
  }

  const handleDragStart = (e) => {
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM.CARD : ACTIVE_DRAG_ITEM.COlUMN)
    setActiveDragItemData(e?.active?.data?.current)
  }

  const handleDragOver = (e) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM.COlUMN) return
    // console.log('Over event: ', e)

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
      setOrderColumns((prevColumn) => {
        // Tìm vị trí của overCard trong column acitveCard sắp thả vào
        const overCardIndex = overColumn?.cards?.findIndex((c) => c._id === overCardId)

        // Logic tính toán cardIndex mới khi thả vào
        let newCardIndex
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumn)
        const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id)

        if (nextActiveColumn) {
          //Xóa card từ column cũ
          nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeDragItemId)
          // Cập nhật lại cardOrderIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((c) => c._id)
        }
        if (nextOverColumn) {
          //Kiểm tra xem card kéo vào có tồn tại ở column chưa
          nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeDragItemId)
          // Thêm card đã kéo vào over column
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          // Cập nhật lại cardOrderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map((c) => c._id)
        }

        return nextColumns
      })
    }
  }

  const handleDragEnd = (e) => {
    const { active, over } = e

    if (activeDragItemType === ACTIVE_DRAG_ITEM.CARD) {
      return
    }

    if (!active || !over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds =dndOrderedColumns.map(c => c._id)
      setOrderColumns(dndOrderedColumns)
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: 0.5 } } })
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
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
