import { Box, Typography } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { palette } from "../../../../themes";

export const MiddleItem0 = () => {
  return (
    <Box p={4} sx={{
      background: '#27262c',
      border: '1px solid #ed4b9e',
      borderRadius: '14px',
    }}>
      <Typography sx={{
        color: palette.text.primary,
        fontSize: 12,
        fontWeight: 600,
      }}>
        Closed PRICE
      </Typography>

      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h2" sx={{
          color: '#ed4b9e',
        }}>
          $306.3234
        </Typography>
        <Typography sx={{
          background: '#ed4b9e',
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
          color: palette.common.white,
          fontSize: 16,
        }}>
          <ArrowUpwardIcon sx={{ color: palette.common.white, fontSize: 18 }} />
          $0.0370
        </Typography>
      </Box>

      <Box mt={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={{
          fontSize: 14,
          color: palette.common.white,
        }}>
          Locked Price:
        </Typography>
        <Typography sx={{
          fontSize: 14,
          color: palette.common.white,
        }}>
          $306.9743
        </Typography>
      </Box>
      <Box mt={0} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={{
          fontSize: 14,
          fontWeight: 700,
          color: palette.common.white,
        }}>
          Prize Pool:
        </Typography>
        <Typography sx={{
          fontSize: 14,
          fontWeight: 700,
          color: palette.common.white,
        }}>
          11.9743 BNB
        </Typography>
      </Box>
    </Box>
  )
}