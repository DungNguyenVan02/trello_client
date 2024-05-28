import { Box, Stack, Typography } from '@mui/material'
import { ACTIONS, ADD_TO_CARD, POWER_UPS } from '~/utils/constants'
import Button from './Button/Button'

const ContainerRight = () => {
  return (
    <Stack height="100%" gap={2}>
      <Box>
        <Typography
          variant="h7"
          fontWeight={500}
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'info.dark' : '#172b4d') }}
        >
          Add to card
        </Typography>
        <Stack gap={1} mt={1}>
          {ADD_TO_CARD.map((item) => {
            const Icon = item.icon
            return <Button key={item.id} icon={<Icon />} title={item.title} />
          })}
        </Stack>
      </Box>
      <Box>
        <Typography
          variant="h7"
          fontWeight={500}
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'info.dark' : '#172b4d') }}
        >
          Power-Ups
        </Typography>
        <Stack gap={1} mt={1}>
          {POWER_UPS.map((item) => {
            const Icon = item.icon
            return <Button key={item.id} icon={<Icon />} title={item.title} />
          })}
        </Stack>
      </Box>
      <Box>
        <Typography
          variant="h7"
          fontWeight={500}
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'info.dark' : '#172b4d') }}
        >
          Actions
        </Typography>
        <Stack gap={1} mt={1}>
          {ACTIONS.map((item) => {
            const Icon = item.icon
            return <Button key={item.id} icon={<Icon />} title={item.title} />
          })}
        </Stack>
      </Box>
    </Stack>
  )
}

export default ContainerRight
