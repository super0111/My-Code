import { Box, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';

import pancakeSwapIcon from '../assets/images/market maker/pancake swap symbol.webp'
import { palette } from "../themes";

export const Warning = (props) => {
  const { setIsWarning } = props

  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{
      background: 'linear-gradient(rgb(128, 81, 214) 0%, rgb(73, 34, 134) 100%)',
      padding: '5px',
      position: 'relative',
    }}>
      <Box display='flex' alignItems='center'>
        <Box component='img' src={pancakeSwapIcon} alt='icon' sx={{
          width: '50px',
        }} />
        <Box display='flex' alignItems='center' sx={{
          padding: '16px 8px',
          background: 'rgba(39, 38, 44, 0.4)',
          borderRadius: '16px',
        }}>
          <Typography mr={1} variant="h4" sx={{
            color: '#ffb237',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>
            PHISHING WARNING:
          </Typography>
          <Typography variant="h4">
            Please make sure you're visiting
            <span style={{color: palette.common.white, fontWeight: 700, margin: '0 5px'}}>https://pancakeswap.finance</span>
            -check the URL carefully.
          </Typography>
        </Box>
      </Box>
      <Box 
        onClick={() => setIsWarning(false)}
        sx={{
          position: 'absolute',
          right: '15px',
          top: '25px',
          cursor: 'pointer',
        }}
      >
        <ClearIcon  sx={{ color: palette.common.white, fontSize: 18 }}/>
      </Box>
    </Box>
  )
}