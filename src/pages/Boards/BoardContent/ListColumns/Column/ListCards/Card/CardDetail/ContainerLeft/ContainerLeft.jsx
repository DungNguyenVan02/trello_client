import { Avatar, AvatarGroup, Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Activity from './Activity/Activity'
import Description from './Description/Description'

const ContainerLeft = () => {
  return (
    <Stack gap={1}>
      <Box>
        <Typography variant="span" sx={{ color: 'info.dark' }}>
          Members
        </Typography>
        <Box sx={{ p: '6px 0 24px', display: 'flex', gap: '4px', alignItems: 'center' }}>
          <AvatarGroup
            max={7}
            sx={{
              justifyContent: 'flex-end',
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
          <Tooltip title="Add members">
            <IconButton size="small" sx={{ border: '1px solid #ccc' }}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Description />
      <Activity />
    </Stack>
  )
}

export default ContainerLeft
