import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import CircularProgress from '@mui/material/CircularProgress'
// import { mockData } from '~/apis/mock-data'
import { fetchBoarDetailsAPI, moveCardToDifferentColumnAPI, updateBoarDetailsAPI } from '~/apis'
import { createColumnAPI, updateColumnAPI } from '~/apis/columnAPI'
import { createCardAPI } from '~/apis/cardAPI'

import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'
import { mapOrder } from '~/utils/sort'

const Board = () => {
  const [board, setBoard] = useState(null)

  const fetchData = async (boardId) => {
    const response = await fetchBoarDetailsAPI(boardId)
    // sắp xếp thứ tự cuối cùng trước khi đưa dữ liệu cho các component con
    response.columns = mapOrder(response.columns, response.columnOrderIds, '_id')
    response.columns.forEach((column) => {
      if (isEmpty(column.cards)) {
        column.cards = [generatePlaceholderCard(column)]
        column.cardOrderIds = [generatePlaceholderCard(column)._id]
      } else {
        column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
      }
    })
    setBoard(response)
  }

  useEffect(() => {
    const boardId = '6641a4fb094b3ddfccd1a76f'
    fetchData(boardId)
  }, [])

  const createNewColumn = async (newColumnData) => {
    const response = await createColumnAPI({ ...newColumnData, boardId: board._id })
    if (response) {
      if (isEmpty(response.cards)) {
        response.cards = [generatePlaceholderCard(response)]
        response.cardOrderIds = [generatePlaceholderCard(response)._id]
      }
      const newBoard = { ...board }
      newBoard.columns.push(response)
      newBoard.columnOrderIds.push(response._id)
      setBoard(newBoard)
    }
  }

  const createNewCard = async (newCardData) => {
    const response = await createCardAPI({ ...newCardData, boardId: board._id })
    if (response) {
      const newBoard = { ...board }
      const columnToUpdate = newBoard.columns.find((column) => column._id === newCardData.columnId)
      if (columnToUpdate) {
        if (columnToUpdate.cards.some((card) => card.FE_PlaceholderCard)) {
          columnToUpdate.cards = [response]
          columnToUpdate.cardOrderIds = [response._id]
        } else {
          columnToUpdate.cards.push(response)
          columnToUpdate.cardOrderIds.push(response._id)
        }
      }

      setBoard(newBoard)
    }
  }

  const moveColumn = (dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    updateBoarDetailsAPI(board._id, { columnOrderIds: dndOrderedColumnsIds })
  }

  const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find((column) => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }

    updateColumnAPI(columnId, { cardOrderIds: dndOrderedCardIds })
  }

  const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    let prevCardOrderIds = dndOrderedColumns.find((c) => c._id === prevColumnId)?.cardOrderIds || []

    if (prevCardOrderIds[0].includes('placeholder')) {
      prevCardOrderIds = []
    }

    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find((c) => c._id === nextColumnId)?.cardOrderIds
    })
  }

  if (!board) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '100vw',
          height: '100vh'
        }}
      >
        <CircularProgress />
        <Typography>Loading board...</Typography>
      </Box>
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumn={moveColumn}
        moveCardInTheSameColumn={moveCardInTheSameColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
      />
    </Container>
  )
}

export default Board
