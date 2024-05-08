import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'

import { DndContext, MouseSensor, TouchSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderColumns] = useState([])

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

  const handleDragEnd = (e) => {
    const { active, over } = e

    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds =dndOrderedColumns.map(c => c._id)
      setOrderColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: (theme) => theme.trello.boardContentHeight,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
