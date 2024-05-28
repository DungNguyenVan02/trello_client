import { useState } from 'react'

import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined'
import DvrIcon from '@mui/icons-material/Dvr'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

import Markdown from '~/components/Markdown/Markdown'
const Activity = () => {
  const [isComment, setIsComment] = useState(false)
  const [value, setValue] = useState('')

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DvrIcon />
        <Typography>Activity</Typography>
      </Box>
      <ListItem
        alignItems={isComment ? 'flex-start' : 'center'}
        sx={{
          py: '4px',
          pr: 0,
          '& .MuiListItemAvatar-root': { minWidth: 50, m: 0 },
          '& .MuiListItemText-root': { my: '2px' }
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt=""
            src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/383076785_1453584898754599_2157207559832495536_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sVJIMWCiE6oQ7kNvgFo2U_H&_nc_ht=scontent.fhan5-9.fna&oh=00_AYCLy8KXdrYCXHj5rmCqDt0eWpSE4MLATImGEVZ2p44GsA&oe=665A683F"
          />
        </ListItemAvatar>
        {!isComment ? (
          <TextField
            onClick={() => setIsComment(true)}
            size="small"
            sx={{ width: '100%' }}
            id="outlined-multiline-flexible"
            label="Write a comment..."
          />
        ) : (
          <Markdown value={value} setValue={setValue} setHideMarkdown={setIsComment} />
        )}
      </ListItem>
      <List sx={{ width: '100%' }}>
        <ListItem
          alignItems="flex-start"
          sx={{
            py: '4px',
            pr: 0,
            '& .MuiListItemAvatar-root': { minWidth: 50 },
            '& .MuiListItemText-root': { my: '2px' }
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt=""
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/383076785_1453584898754599_2157207559832495536_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sVJIMWCiE6oQ7kNvgFo2U_H&_nc_ht=scontent.fhan5-9.fna&oh=00_AYCLy8KXdrYCXHj5rmCqDt0eWpSE4MLATImGEVZ2p44GsA&oe=665A683F"
            />
          </ListItemAvatar>
          <Stack width="100%">
            <ListItemText
              sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                '& p': { fontSize: '12px' },
                '& span': { fontWeight: 500 }
              }}
              primary="Nguyen Van Dung"
              secondary="4 minutes ago"
            />
            <ListItemText
              secondary={
                <Typography
                  sx={{ display: 'block', p: 1, border: '0.5px solid #ccc', borderRadius: '6px' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
              }
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: '4px' }}>
              <Box>
                <AddReactionOutlinedIcon
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'basic-menu-profiles' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ fontSize: '14px', cursor: 'pointer' }}
                />
                <Menu data-no-dnd="true" id="basic-menu-profiles" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <Stack direction="row" gap={1} py="1px" px="6px">
                    <Box
                      sx={{
                        width: '30px',
                        height: '30px',
                        bgcolor: '#ccc',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all ease-in-out 0.2s',
                        '&:hover': { bgcolor: '#ddd', cursor: 'pointer', transform: 'translateY(-5px)' }
                      }}
                    >
                      <ThumbUpAltIcon fontSize="small" sx={{ color: 'info.light' }} />
                    </Box>
                    <Box
                      sx={{
                        width: '30px',
                        height: '30px',
                        bgcolor: '#ccc',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all ease-in-out 0.2s',
                        '&:hover': { bgcolor: '#ddd', cursor: 'pointer', transform: 'translateY(-5px)' }
                      }}
                    >
                      <FavoriteIcon fontSize="small" sx={{ color: 'error.light' }} />
                    </Box>
                    <Box
                      sx={{
                        width: '30px',
                        height: '30px',
                        bgcolor: '#ccc',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all ease-in-out 0.2s',
                        '&:hover': { bgcolor: '#ddd', cursor: 'pointer', transform: 'translateY(-5px)' }
                      }}
                    >
                      <EmojiEmotionsIcon fontSize="small" sx={{ color: 'orange' }} />
                    </Box>
                  </Stack>
                </Menu>
              </Box>
              <Typography sx={{ fontSize: '12px !important', textDecoration: 'underline', cursor: 'pointer' }}>
                Edit
              </Typography>
              <Typography sx={{ fontSize: '12px !important', textDecoration: 'underline', cursor: 'pointer' }}>
                Delete
              </Typography>
            </Box>
          </Stack>
        </ListItem>
      </List>
    </Box>
  )
}

export default Activity
