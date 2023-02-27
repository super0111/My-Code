import { Box, Typography } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { palette } from "../../../../themes";

export const MiddleItem3 = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={4} sx={{
      background: '#27262c',
      border: '2px solid #383241',
      borderRadius: '14px',
    }}>
      <Typography sx={{
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center',
        color: palette.common.white,
      }}>
        Entry starts
      </Typography>
      <Typography sx={{
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        width: '100%',  
        color: palette.common.white,
      }}>
        ~0.2:18
      </Typography>
    </Box>
  )
}