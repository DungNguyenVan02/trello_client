import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PublicIcon from '@mui/icons-material/Public'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
  color: '#fff',
  bgcolor: 'rgba(255, 255, 255, 0.2)',
  border: 'none',
  borderRadius: '5px',
  px: '5px',
  '.MuiSvgIcon-root': { color: '#fff' },
  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
}

const BoardBar = ({ board }) => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        px: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          justifyContent: 'space-between',
          height: '100%',
          bgcolor: 'inherit',
          overflowX: 'auto'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip clickable icon={<DashboardIcon />} label={board?.title} sx={MENU_STYLES} />
          <Chip
            clickable
            icon={board?.type === 'public' ? <PublicIcon /> : <VpnLockIcon />}
            label={capitalizeFirstLetter(board?.type)}
            sx={MENU_STYLES}
          />
          <Chip clickable icon={<AddToDriveIcon />} label="Add To Google Driver" sx={MENU_STYLES} />
          <Chip clickable icon={<BoltIcon />} label="Automation" sx={MENU_STYLES} />
          <Chip clickable icon={<FilterListIcon />} label="Filter" sx={MENU_STYLES} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            startIcon={<PersonAddIcon />}
            variant="outlined"
            sx={{ color: '#fff', '&.MuiButton-outlined': { borderColor: '#fff' } }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={7}
            sx={{
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: '16px',
                border: 'none',
                color: '#fff',
                '&:first-of-type': { bgcolor: '#a4b0bes' }
              }
            }}
          >
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar alt="User" src="https://dungnguyenvan02.github.io/CV/assets/image/avatar.jpg" />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AahN4CAdTzQQ7kNvgEr3-uU&_nc_ht=scontent.fhan14-4.fna&oh=00_AYC2KLCBYyqS__uSmUr-keQ28sZDmYVkEcOkDEnkKNBnMQ&oe=665277B4"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/428407946_1531563727623382_7188920264786965131_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MzVZNOSYhKQQ7kNvgHhRfFD&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDLza34aDMTgxIx-D14acvTVB_ZJwr6kfrlvZRGRT0qTA&oe=6652A4BE"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/428407946_1531563727623382_7188920264786965131_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MzVZNOSYhKQQ7kNvgHhRfFD&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDLza34aDMTgxIx-D14acvTVB_ZJwr6kfrlvZRGRT0qTA&oe=6652A4BE"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar alt="User" src="https://dungnguyenvan02.github.io/CV/assets/image/avatar.jpg" />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AahN4CAdTzQQ7kNvgEr3-uU&_nc_ht=scontent.fhan14-4.fna&oh=00_AYC2KLCBYyqS__uSmUr-keQ28sZDmYVkEcOkDEnkKNBnMQ&oe=665277B4"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/428407946_1531563727623382_7188920264786965131_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MzVZNOSYhKQQ7kNvgHhRfFD&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDLza34aDMTgxIx-D14acvTVB_ZJwr6kfrlvZRGRT0qTA&oe=6652A4BE"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/428407946_1531563727623382_7188920264786965131_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MzVZNOSYhKQQ7kNvgHhRfFD&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDLza34aDMTgxIx-D14acvTVB_ZJwr6kfrlvZRGRT0qTA&oe=6652A4BE"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar
