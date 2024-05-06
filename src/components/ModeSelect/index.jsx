import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme()
  const handleChange = (e) => {
    const selectedMode = e.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: '120px',
        '& fieldset': { borderColor: '#fff' }
      }}
    >
      <InputLabel id="label-select-dark-light-mode" sx={{ color: '#fff', '&.Mui-focused': { color: '#fff' } }}>
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="label-select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: '#fff',
          '&:.Mui-focused fieldset': { borderColor: '#fff' },
          '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
          '.MuiSvgIcon-root': { color: '#fff' }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
