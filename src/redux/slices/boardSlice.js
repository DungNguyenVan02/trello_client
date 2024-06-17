import { createSlice, current } from '@reduxjs/toolkit'
import {
  fetchBoardDetail,
  fetchMoveCardToDifferentColumn,
  fetchSoftDeleteColumnDetails,
  fetchUpdateBoarDetails
} from '../asyncActions/boardActions/boardActions'
import { isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatter'

const initialState = {
  boardData: null
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createColumn: (state, action) => {
      if (isEmpty(action.payload.cards)) {
        action.payload.cards = [generatePlaceholderCard(action.payload)]
        action.payload.cardOrderIds = [generatePlaceholderCard(action.payload)._id]
      }
      state.boardData.columns.push(action.payload)
      state.boardData.columnOrderIds.push(action.payload._id)
    },
    createCard: (state, action) => {
      const columnToUpdate = state.boardData.columns.find((column) => column._id === action.payload.columnId)
      if (columnToUpdate) {
        if (columnToUpdate.cards.some((card) => card.FE_PlaceholderCard)) {
          columnToUpdate.cards = [action.payload]
          columnToUpdate.cardOrderIds = [action.payload._id]
        } else {
          columnToUpdate.cards.push(action.payload)
          columnToUpdate.cardOrderIds.push(action.payload._id)
        }
        state.boardData.cards = columnToUpdate.cards
        state.boardData.cardOrderIds = columnToUpdate.cardOrderIds
      }
    },
    deleteCard: (state, action) => {
      const columnDeleteCard = current(state.boardData).columns.find((column) => column._id === action.payload.columnId)

      state.boardData.columns.find((column) => column._id === action.payload.columnId).cardOrderIds =
        columnDeleteCard.cardOrderIds.filter((cardId) => cardId !== action.payload.cardId)

      state.boardData.columns.find((column) => column._id === action.payload.columnId).cards =
        columnDeleteCard.cards.filter((card) => card._id !== action.payload.cardId)
    },
    moveCardInTheSameColumn: (state, action) => {
      const columnToUpdate = state.boardData.columns.find((column) => column._id === action.payload.columnId)
      if (columnToUpdate) {
        columnToUpdate.cards = action.payload.dndOrderedCards
        columnToUpdate.cardOrderIds = action.payload.dndOrderedCardIds
      }

      state.boardData.cards = columnToUpdate.cards
      state.boardData.cardOrderIds = columnToUpdate.cardOrderIds
    }
  },
  extraReducers: (builder) => {
    builder
      //fetch detail board
      .addCase(fetchBoardDetail.pending, () => {})
      .addCase(fetchBoardDetail.fulfilled, (state, action) => {
        state.boardData = action.payload
      })
      .addCase(fetchBoardDetail.rejected, (state, action) => {
        state.status = false
        state.errorMessage = action.payload?.message
      })

      //fetch update board
      .addCase(fetchUpdateBoarDetails.pending, () => {})
      .addCase(fetchUpdateBoarDetails.fulfilled, (state, action) => {
        state.boardData.columns = action.payload.columns
        state.boardData.columnOrderIds = action.payload.columnOrderIds
      })
      .addCase(fetchUpdateBoarDetails.rejected, (state, action) => {
        state.status = false
        state.errorMessage = action.payload?.message
      })

      //fetch move card to different column board
      .addCase(fetchMoveCardToDifferentColumn.pending, () => {})
      .addCase(fetchMoveCardToDifferentColumn.fulfilled, (state, action) => {
        state.boardData.columns = action.payload.boardUpdate.columns
        state.boardData.columnOrderIds = action.payload.boardUpdate.columnOrderIds
      })
      .addCase(fetchMoveCardToDifferentColumn.rejected, (state, action) => {
        state.status = false
        state.errorMessage = action.payload?.message
      })

      //fetch delete column
      .addCase(fetchSoftDeleteColumnDetails.pending, () => {})
      .addCase(fetchSoftDeleteColumnDetails.fulfilled, (state, action) => {
        state.boardData.columns = action.payload.boardUpdate.columns
        state.boardData.columnOrderIds = action.payload.boardUpdate.columnOrderIds
      })
      .addCase(fetchSoftDeleteColumnDetails.rejected, (state, action) => {
        state.status = false
        state.errorMessage = action.payload?.message
      })
  }
})

export const { createColumn, createCard, deleteCard, moveCardInTheSameColumn } = boardSlice.actions
export const selectTask = (state) => state.task
export default boardSlice.reducer
