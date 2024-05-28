import { Box, Typography } from '@mui/material'
import VideoLabelIcon from '@mui/icons-material/VideoLabel'

import ContainerLeft from './ContainerLeft/ContainerLeft'
import ContainerRight from './ContainerRight/ContainerRight'
import CloseIcon from '@mui/icons-material/Close'

const CardDetail = ({ onClose }) => {
  return (
    <Box
      onClick={(e) => e.stopPropagation()}
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        maxWidth: '786px',
        width: '100%',
        my: '60px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1a2026' : '#fff'),
        py: 2,
        px: 4,
        borderRadius: 2
      }}
    >
      <CloseIcon
        onClick={() => onClose(false)}
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          '&:hover': { opacity: 0.8 },
          cursor: 'pointer'
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <VideoLabelIcon />
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Detail card description
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '12px', fontWeight: 300, opacity: 0.9, pl: 5 }}>in column</Typography>

      <Box sx={{ display: 'flex', gap: 2, py: 2 }}>
        <Box sx={{ width: '70%' }}>
          <ContainerLeft />
        </Box>
        <Box sx={{ width: '30%' }}>
          <ContainerRight />
        </Box>
      </Box>
    </Box>
  )
}

export default CardDetail
