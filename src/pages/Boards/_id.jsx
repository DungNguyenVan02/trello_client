import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import CircularProgress from '@mui/material/CircularProgress'
// import { mockData } from '~/apis/mock-data'

import { useDispatch, useSelector } from 'react-redux'
import { fetchBoardDetail } from '~/redux/asyncActions/boardActions/boardActions'
import { boardSelector } from '~/redux/selector/selector'

const Board = () => {
  const { boardData } = useSelector(boardSelector)
  const [board, setBoard] = useState(boardData)
  const dispatch = useDispatch()

  useEffect(() => {
    setBoard(boardData)
  }, [boardData])

  useEffect(() => {
    const boardId = '6641a4fb094b3ddfccd1a76f'
    dispatch(fetchBoardDetail(boardId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <BoardContent />
    </Container>
  )
}

export default Board
