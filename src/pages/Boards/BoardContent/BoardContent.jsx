import { Box } from '@mui/material'

import ListColumns from './ListColumns/ListColumns'

const BoardContent = ({ board }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        p: '10px 0'
      }}
    >
      <ListColumns columns={board?.columns} />
    </Box>
  )
}

export default BoardContent