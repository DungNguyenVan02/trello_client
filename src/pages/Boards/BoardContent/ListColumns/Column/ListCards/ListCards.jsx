import { Box } from '@mui/material'
import Card from './Card/Card'

const ListCards = ({ cards }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - 
                  ${theme.spacing(5)} - 
                  ${theme.trello.columnHeaderHeight} - 
                  ${theme.trello.columnFooterHeight})
                `,
        '&::-webkit-scrollbar': { width: '8px', height: '8px' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da', borderRadius: '8px' }
      }}
    >
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  )
}

export default ListCards