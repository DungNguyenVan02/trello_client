import { Box, Modal } from '@mui/material'

const styleInit = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflowY: 'scroll'
}

export default function ModalBasic({ children, onState = false, onClose, style = styleInit }) {
  return (
    <Modal
      data-no-dnd="true"
      open={onState}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} onClick={() => onClose(false)}>
        {children}
      </Box>
    </Modal>
  )
}
