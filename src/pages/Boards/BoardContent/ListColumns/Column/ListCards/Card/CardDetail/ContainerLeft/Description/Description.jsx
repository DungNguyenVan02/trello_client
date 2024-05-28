import SubjectIcon from '@mui/icons-material/Subject'
import { Box, Button, Stack, Typography } from '@mui/material'

import EditNoteIcon from '@mui/icons-material/EditNote'
import Markdown from '~/components/Markdown/Markdown'
import { useState } from 'react'

const Description = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState('')
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1}>
          <SubjectIcon />
          <Typography variant="h7">Description</Typography>
        </Stack>
        {!isEdit && (
          <Button onClick={() => setIsEdit(!isEdit)} size="small" variant="contained" startIcon={<EditNoteIcon />}>
            Edit
          </Button>
        )}
      </Stack>
      <Box mt={1} sx={{}}>
        {!isEdit && (
          <Box
            sx={{
              border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #333' : '1px solid #ccc'),
              p: '12px 6px',
              borderRadius: 1
            }}
          >
            <Typography fontWeight={300} sx={{ opacity: 0.8 }}>
              Preview example description
            </Typography>
          </Box>
        )}
        {isEdit && <Markdown value={value} setValue={setValue} setHideMarkdown={setIsEdit} />}
      </Box>
    </div>
  )
}

export default Description
