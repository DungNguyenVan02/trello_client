import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '~/apis/mock-data'
import { fetchBoarDetailsAPI, updateBoarDetailsAPI } from '~/apis'
import { createColumnAPI } from '~/apis/columnAPI'
import { createCardAPI } from '~/apis/cardAPI'

import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'

const Board = () => {
  const [board, setBoard] = useState(null)

  const fetchData = async (boardId) => {
    const response = await fetchBoarDetailsAPI(boardId)
    response.columns.forEach((column) => {
      if (isEmpty(column.cards)) {
        column.cards = [generatePlaceholderCard(column)]
        column.cardOrderIds = [generatePlaceholderCard(column)._id]
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
        columnToUpdate?.cards?.push(response)
        columnToUpdate?.cardOrderIds?.push(response._id)
      }
      setBoard(newBoard)
    }
  }

  const moveColumn = async (dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    await updateBoarDetailsAPI(board._id, { columnOrderIds: dndOrderedColumnsIds })
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
      />
    </Container>
  )
}

export default Board
