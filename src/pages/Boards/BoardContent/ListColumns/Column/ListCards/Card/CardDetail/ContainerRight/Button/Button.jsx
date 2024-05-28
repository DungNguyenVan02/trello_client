import { Button as MuiButton } from '@mui/material'

const Button = ({ icon, title }) => {
  return (
    <MuiButton
      sx={{
        justifyContent: 'flex-start',
        boxShadow: 'none',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2f3542' : '#e4e6ea'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'info.light' : '#172b4d'),
        '&:hover': {
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#3b4458' : '#d3d5d9'),
          boxShadow: 'none'
        },
        transition: 'none'
      }}
      startIcon={icon}
      variant="contained"
    >
      {title}
    </MuiButton>
  )
}

export default Button
