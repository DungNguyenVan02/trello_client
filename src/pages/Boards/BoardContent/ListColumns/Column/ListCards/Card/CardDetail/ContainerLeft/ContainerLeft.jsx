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
