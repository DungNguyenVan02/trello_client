// import { useEffect, useState } from 'react's
import { Container } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
// import { fetchBoarDetailsAPI } from '~/apis'

const Board = () => {
  // const [board, setBoard] = useState(null)

  // const fetchData = async (boardId) => {
  //   const response = await fetchBoarDetailsAPI(boardId)
  //   setBoard(response)
  // }

  // useEffect(() => {
  //   const boardId = '6641a4fb094b3ddfccd1a76f'
  //   fetchData(boardId)
  // }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  )
}

export default Board
