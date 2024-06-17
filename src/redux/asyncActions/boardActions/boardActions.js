import { createAsyncThunk } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'
import { fetchBoarDetailsAPI, moveCardToDifferentColumnAPI, updateBoarDetailsAPI } from '~/apis'
import { deleteColumnAPI } from '~/apis/columnAPI'
import { generatePlaceholderCard } from '~/utils/formatter'
import { mapOrder } from '~/utils/sort'

const fetchBoardDetail = createAsyncThunk('app/detailBoard', async (boardId, { rejectWithValue }) => {
  const response = await fetchBoarDetailsAPI(boardId)
  if (!response) {
    return rejectWithValue(response)
  }
  response.columns = mapOrder(response.columns, response.columnOrderIds, '_id')
  response.columns.forEach((column) => {
    if (isEmpty(column.cards)) {
      column.cards = [generatePlaceholderCard(column)]
      column.cardOrderIds = [generatePlaceholderCard(column)._id]
    } else {
      column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
    }
  })

  return response
})

const fetchUpdateBoarDetails = createAsyncThunk(
  'app/updateDetailBoard',
  async ({ dndOrderedColumns, boardData }, { rejectWithValue }) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)

    const response = await updateBoarDetailsAPI(boardData._id, { columnOrderIds: dndOrderedColumnsIds })
    if (!response) {
      return rejectWithValue(response)
    }
    response.columns = dndOrderedColumns
    return response
  }
)

const fetchMoveCardToDifferentColumn = createAsyncThunk(
  'app/moveCardToDifferentColumn',
  async ({ data, boardUpdate }, { rejectWithValue }) => {
    const response = await moveCardToDifferentColumnAPI({
      currentCardId: data.currentCardId,
      prevColumnId: data.prevColumnId,
      prevCardOrderIds: data.prevCardOrderIds,
      nextColumnId: data.nextColumnId,
      nextCardOrderIds: data.nextCardOrderIds
    })
    if (!response) {
      return rejectWithValue(response)
    }
    response.boardUpdate = boardUpdate
    return response
  }
)

const fetchSoftDeleteColumnDetails = createAsyncThunk(
  'app/deleteColumn',
  async ({ columnId, boardUpdate }, { rejectWithValue }) => {
    const response = await deleteColumnAPI(columnId)
    if (!response) {
      return rejectWithValue(response)
    }
    const newBoard = { ...boardUpdate }
    newBoard.columns = newBoard.columns.filter((column) => column._id !== columnId)
    newBoard.columnOrderIds = newBoard.columnOrderIds.filter((_id) => _id !== columnId)

    response.boardUpdate = newBoard
    return response
  }
)

// softDeleteColumnDetails

export { fetchBoardDetail, fetchUpdateBoarDetails, fetchMoveCardToDifferentColumn, fetchSoftDeleteColumnDetails }
