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
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeAFbgrYobHNGjE3EiOaxPxJgi1J6enC3EmCLUnp6cLVx4rhWPaEheyUNETuhnD7oM33T6T18QoD8MQ64Vi_7K&_nc_ohc=k5x5MQgjnnUQ7kNvgGwBHUg&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDGfO9zaO0ACqg1vRpE1UbauZazW_vVaXMthZLYozXdqw&oe=66663E34"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeAFbgrYobHNGjE3EiOaxPxJgi1J6enC3EmCLUnp6cLVx4rhWPaEheyUNETuhnD7oM33T6T18QoD8MQ64Vi_7K&_nc_ohc=k5x5MQgjnnUQ7kNvgGwBHUg&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDGfO9zaO0ACqg1vRpE1UbauZazW_vVaXMthZLYozXdqw&oe=66663E34"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeAFbgrYobHNGjE3EiOaxPxJgi1J6enC3EmCLUnp6cLVx4rhWPaEheyUNETuhnD7oM33T6T18QoD8MQ64Vi_7K&_nc_ohc=k5x5MQgjnnUQ7kNvgGwBHUg&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDGfO9zaO0ACqg1vRpE1UbauZazW_vVaXMthZLYozXdqw&oe=66663E34"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar alt="User" src="https://dungnguyenvan02.github.io/CV/assets/image/avatar.jpg" />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeAFbgrYobHNGjE3EiOaxPxJgi1J6enC3EmCLUnp6cLVx4rhWPaEheyUNETuhnD7oM33T6T18QoD8MQ64Vi_7K&_nc_ohc=k5x5MQgjnnUQ7kNvgGwBHUg&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDGfO9zaO0ACqg1vRpE1UbauZazW_vVaXMthZLYozXdqw&oe=66663E34"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/428119189_1531563780956710_4714055625246685310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeAFbgrYobHNGjE3EiOaxPxJgi1J6enC3EmCLUnp6cLVx4rhWPaEheyUNETuhnD7oM33T6T18QoD8MQ64Vi_7K&_nc_ohc=k5x5MQgjnnUQ7kNvgGwBHUg&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDGfO9zaO0ACqg1vRpE1UbauZazW_vVaXMthZLYozXdqw&oe=66663E34"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar alt="User" src="" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar
