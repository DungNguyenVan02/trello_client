import { useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import Column from './Column/Column'

import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { toast } from 'react-toastify'

const ListColumns = ({ columns, createNewColumn, createNewCard }) => {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const [validTitle, setValidTitle] = useState(false)
  const [newColumnTitle, setNewColumnTitle] = useState('')

  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const resetData = () => {
    setNewColumnTitle('')
    toggleOpenNewColumnForm()
  }

  const addNewColumnTitle = () => {
    if (!newColumnTitle || newColumnTitle.length < 3) {
      setValidTitle(true)
      toast.warning('hi hi')
      return
    }
    createNewColumn({ title: newColumnTitle })
    resetData()
  }

  return (
    <SortableContext items={columns?.map((c) => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map?.((column) => (
          <Column key={column._id} column={column} createNewCard={createNewCard} />
        ))}

        <Box
          sx={{
            minWidth: '250px',
            maxWidth: '250px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          {openNewColumnForm ? (
            <Box
              sx={{
                minWidth: '250px',
                maxWidth: '250px',
                p: 1,
                borderRadius: '6px',
                height: 'fit-content',
                bgcolor: '#ffffff3d',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <TextField
                id="outlined-search"
                label="Enter column title"
                type="text"
                size="small"
                autoFocus
                value={newColumnTitle}
                onChange={(e) => {
                  if (validTitle) {
                    setValidTitle(false)
                  }
                  setNewColumnTitle(e.target.value)
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {newColumnTitle && (
                        <CloseIcon
                          onClick={() => setNewColumnTitle('')}
                          sx={{ color: '#fff', fontSize: 'medium', cursor: 'pointer', '&:hover': { opacity: 0.7 } }}
                        />
                      )}
                    </InputAdornment>
                  )
                }}
                error={validTitle && true}
                helperText={validTitle ? 'Please enter column title!' : undefined}
                sx={{
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
                  },
                  '& p': {
                    mx: '4px'
                  }
                }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  onClick={addNewColumnTitle}
                  variant="contained"
                  color="success"
                  size="small"
                  startIcon={<AddIcon sx={{ color: 'white' }} />}
                  sx={{
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    boxShadow: 'none',
                    flex: 2,
                    '&:hover': {
                      bgcolor: (theme) => theme.palette.success.main
                    }
                  }}
                >
                  Add column
                </Button>
                <Button
                  onClick={() => {
                    setValidTitle(false)
                    resetData()
                  }}
                  variant="contained"
                  size="small"
                  sx={{
                    border: '0.5px solid',
                    bgcolor: (theme) => theme.palette.error.main,
                    borderColor: (theme) => theme.palette.error.main,
                    boxShadow: 'none',
                    flex: 1,
                    '&:hover': {
                      bgcolor: (theme) => theme.palette.error.main
                    }
                  }}
                >
                  Close
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              onClick={toggleOpenNewColumnForm}
              startIcon={<PlaylistAddIcon />}
              sx={{ color: '#fff', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
            >
              Add new column
            </Button>
          )}
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
