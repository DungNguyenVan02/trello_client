import { Box, SvgIcon, Typography, Button, TextField, Badge, Tooltip, InputAdornment } from '@mui/material'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import { ReactComponent as TrelloIcon } from '~/assets/trello_icon.svg'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Profiles from './Menus/Profiles'
import { useState } from 'react'
const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          bgcolor: 'inherit',
          overflowX: 'auto'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: '#fff' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: '#fff' }} />
            <Typography variant="span" sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>
              Trello
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button startIcon={<LibraryAddIcon />} sx={{ color: '#fff' }}>
              Create
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {searchValue && (
                    <CloseIcon
                      onClick={() => setSearchValue('')}
                      sx={{ color: '#fff', fontSize: 'medium', cursor: 'pointer', '&:hover': { opacity: 0.7 } }}
                    />
                  )}
                </InputAdornment>
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '180px',
              '& label': { color: '#fff' },
              '& input': { color: '#fff' },
              '& label.Mui-focused': { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fff'
                },
                '&:hover fieldset': {
                  borderColor: '#fff'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff'
                }
              }
            }}
          />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: '#fff' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: 'pointer', color: '#fff' }} />
          </Tooltip>
          <Tooltip title="Profiles">
            <>
              <Profiles />
            </>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
