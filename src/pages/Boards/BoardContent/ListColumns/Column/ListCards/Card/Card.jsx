import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import AttachmentIcon from '@mui/icons-material/Attachment'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import PreviewIcon from '@mui/icons-material/Preview'
import CreateIcon from '@mui/icons-material/Create'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'
import ModalBasic from '~/components/Modal/Modal'
import CardDetail from './CardDetail/CardDetail'
import { useConfirm } from 'material-ui-confirm'
import { useDispatch } from 'react-redux'
import { deleteCard } from '~/redux/slices/boardSlice'
import { deleteCardAPI } from '~/apis/cardAPI'

const Card = ({ card, columnId }) => {
  const dispatch = useDispatch()
  const [openDetail, setOpenDetail] = useState(false)

  const confirmDeleteColumn = useConfirm()
  const handleDeleteCard = () => {
    confirmDeleteColumn({
      title: 'Delete card?',
      description: 'This action will delete your card! Are you sure?',
      confirmationText: 'Confirm',
      cancellationText: 'Cancel'
    })
      .then(() => {
        dispatch(deleteCard({ columnId, cardId: card._id }))
        deleteCardAPI(columnId, card._id)
        // softDeleteColumnDetails(column._id)
        // dispatch(fetchSoftDeleteColumnDetails({ columnId: column._id, boardUpdate: boardData }))
      })
      .catch(() => {
        /* ... */
      })
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

  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card.comments?.length || !!card.attachments?.length
  }

  // Sort and drag
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })

  const dndKitCardStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    border: isDragging ? '1px solid #1976d2' : undefined
  }

  return (
    <>
      {openDetail && (
        <ModalBasic onState={openDetail} onClose={setOpenDetail}>
          <CardDetail onClose={setOpenDetail} />
        </ModalBasic>
      )}
      <MuiCard
        ref={setNodeRef}
        style={dndKitCardStyle}
        {...attributes}
        {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset',
          display: card?.FE_PlaceholderCard ? 'none' : 'block',
          border: '1px solid transparent',
          '&:hover': {
            borderColor: (theme) => theme.palette.primary.main
          },
          '&:hover #more-option-card': { visibility: 'visible' }
        }}
      >
        {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} title={card.title} />}
        <CardContent
          sx={{
            height: 45,
            p: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&:last-child': { py: 1.5, pr: 1 }
          }}
        >
          <Typography>{card.title}</Typography>
          <Box id="more-option-card" data-no-dnd="true" sx={{ visibility: 'hidden', display: 'flex' }}>
            <Tooltip title="More option">
              <CreateIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'text.primary', cursor: 'pointer', fontSize: '18px' }}
              />
            </Tooltip>
            <Menu
              data-no-dnd="true"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose()
                  setOpenDetail(true)
                }}
                sx={{
                  '&:hover': {
                    color: 'success.light',
                    '& .library-open-icon': {
                      color: 'success.light'
                    }
                  }
                }}
              >
                <ListItemIcon>
                  <PreviewIcon className="library-open-icon" fontSize="small" />
                </ListItemIcon>
                <ListItemText>Open card</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  '&:hover': {
                    color: 'info.light',
                    '& .library-edit-icon': {
                      color: 'info.light'
                    }
                  }
                }}
              >
                <ListItemIcon>
                  <EditCalendarIcon className="library-edit-icon" fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit title</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleClose}
                sx={{
                  '&:hover': {
                    color: 'warning.dark',
                    '& .delete-forever-icon': {
                      color: 'warning.dark'
                    }
                  }
                }}
              >
                <ListItemIcon>
                  <DeleteForeverIcon className="delete-forever-icon" fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={handleDeleteCard}>Delete card this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </CardContent>
        {shouldShowCardActions() && (
          <CardActions sx={{ p: '0px 4px 8px 4px' }}>
            {!!card?.memberIds.length && (
              <Button startIcon={<GroupIcon />} size="small">
                {card.memberIds.length}
              </Button>
            )}

            {!!card.comments.length && (
              <Button startIcon={<CommentIcon />} size="small">
                {card.comments.length}
              </Button>
            )}
            {!!card.attachments.length && (
              <Button startIcon={<AttachmentIcon />} size="small">
                {card.attachments.length}
              </Button>
            )}
          </CardActions>
        )}
      </MuiCard>
    </>
  )
}

export default Card
