import { useState } from 'react'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sort'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Column = ({ column }) => {
  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const [validTitle, setValidTitle] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState('')

  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const addNewColumnTitle = () => {
    if (!newCardTitle) {
      setValidTitle(true)
      return
    }
  }

  // Open & close menu
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // Sort and drag
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column }
  })

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : 1
  }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box
          sx={{
            height: (theme) => theme.trello.columnHeaderHeight,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {column.title}
          </Typography>
          <Box>
            <Tooltip title="More option">
              <ExpandMoreIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'text.primary', cursor: 'pointer' }}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LibraryAddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <ListCards cards={orderedCards} />

        <Box
          sx={{
            height: (theme) => theme.trello.columnFooterHeight,
            p: 2
          }}
        >
          {openNewCardForm ? (
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                data-no-dnd="true"
                id="outlined-search"
                label="Enter card title"
                type="text"
                size="small"
                autoFocus
                value={newCardTitle}
                onChange={(e) => {
                  if (validTitle) {
                    setValidTitle(false)
                  }
                  setNewCardTitle(e.target.value)
                }}
                error={validTitle && true}
                sx={{
                  '& label': { color: (theme) => theme.palette.primary.main },
                  '& input': {
                    color: (theme) => theme.palette.primary.main,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white')
                  },
                  '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    '&:hover fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    }
                  },
                  '& p': {
                    mx: '4px'
                  }
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  data-no-dnd="true"
                  onClick={addNewColumnTitle}
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: (theme) => theme.palette.success.main
                    }
                  }}
                >
                  Add
                </Button>
                <ExitToAppOutlinedIcon
                  fontSize="small"
                  sx={{ color: (theme) => theme.palette.warning.main, cursor: 'pointer' }}
                />
              </Box>
            </Box>
          ) : (
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button
                data-no-dnd="true"
                onClick={toggleOpenNewCardForm}
                sx={{ width: '100%', justifyContent: 'start' }}
                startIcon={<LibraryAddIcon />}
              >
                Add new card
              </Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  )
}

export default Column
