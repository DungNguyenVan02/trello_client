import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import AttachmentIcon from '@mui/icons-material/Attachment'

const Card = ({ temporaryHideMedia }) => {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card 1</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/438260628_987770732698019_13243884947361188_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wWKX61Vt-pIQ7kNvgFMiZWH&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAhL1ED85X_FGo4vq-mDNvWd5roH5jV_ne_bUsM7pskKw&oe=663FB2B9"
        title="Content"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Dien Bien Phu</Typography>
      </CardContent>
      <CardActions sx={{ p: '0px 4px 8px 4px' }}>
        <Button startIcon={<GroupIcon />} size="small">
          20
        </Button>
        <Button startIcon={<CommentIcon />} size="small">
          10
        </Button>
        <Button startIcon={<AttachmentIcon />} size="small">
          9
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
