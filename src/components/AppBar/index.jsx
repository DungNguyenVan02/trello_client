import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'

const AppBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>Trello</Box>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
