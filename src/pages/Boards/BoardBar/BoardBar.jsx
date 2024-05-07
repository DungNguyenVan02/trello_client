import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: '#fff',
  bgcolor: 'rgba(255, 255, 255, 0.2)',
  border: 'none',
  borderRadius: '5px',
  px: '5px',
  '.MuiSvgIcon-root': { color: '#fff' },
  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
}

const BoardBar = () => {
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
          <Chip clickable icon={<DashboardIcon />} label="Trello dash board" sx={MENU_STYLES} />
          <Chip clickable icon={<VpnLockIcon />} label="Public/Private Workspace" sx={MENU_STYLES} />
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
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439311839_1568260517287036_3389230836487835442_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3Njqyh5IUIQ7kNvgF8XNiF&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAr2MGNU7H9uJSAg1Psi2VLc5WHRE4OHDUujCw614qnUQ&oe=663EB696"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/428438255_1531563720956716_2440216351938270340_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qFQMR-GrXTEQ7kNvgFN6fnp&_nc_oc=AdifGdyV5sF-Oilp1G8AuYyP9iwiKTso3iqzD6FV4pC3euxJu0JyFmfXyaJZTwaUMH4&_nc_ht=scontent.fhan14-4.fna&oh=00_AfB31jYWE-9ywUsDW_POrSsflFOHx9APPgC4PQMLmClgRg&oe=663EC665"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/383076785_1453584898754599_2157207559832495536_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jnytxlbYYZQQ7kNvgFMNzV7&_nc_ht=scontent.fhan14-5.fna&oh=00_AfDLVuhFiubb7hYpx0ZBpsLNPfzVV_zEHgqJ6pUiqGonew&oe=663EB8BF"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar alt="User" src="https://dungnguyenvan02.github.io/CV/assets/image/avatar.jpg" />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439311839_1568260517287036_3389230836487835442_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3Njqyh5IUIQ7kNvgF8XNiF&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAr2MGNU7H9uJSAg1Psi2VLc5WHRE4OHDUujCw614qnUQ&oe=663EB696"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/428438255_1531563720956716_2440216351938270340_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qFQMR-GrXTEQ7kNvgFN6fnp&_nc_oc=AdifGdyV5sF-Oilp1G8AuYyP9iwiKTso3iqzD6FV4pC3euxJu0JyFmfXyaJZTwaUMH4&_nc_ht=scontent.fhan14-4.fna&oh=00_AfB31jYWE-9ywUsDW_POrSsflFOHx9APPgC4PQMLmClgRg&oe=663EC665"
              />
            </Tooltip>
            <Tooltip title="User" sx={{ cursor: 'pointer' }}>
              <Avatar
                alt="User"
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/383076785_1453584898754599_2157207559832495536_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jnytxlbYYZQQ7kNvgFMNzV7&_nc_ht=scontent.fhan14-5.fna&oh=00_AfDLVuhFiubb7hYpx0ZBpsLNPfzVV_zEHgqJ6pUiqGonew&oe=663EB8BF"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar
