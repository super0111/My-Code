import { Box, Typography, Button } from "@mui/material"
import { palette } from "../../../../themes";

export const MiddleItem2 = () => {
  return (
    <Box sx={{
      background: 'linear-gradient(rgb(83, 222, 233) 0%, rgb(118, 69, 217) 100%)',
      borderRadius: '14px',
      padding: '2px',
    }}>
      <Box p={4} sx={{
        background: '#27262c',
        borderRadius: '14px',
      }}>
        <Box mt={0} mb={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{
            fontSize: 16,
            fontWeight: 700,
            color: palette.common.white,
          }}>
            Prize Pool:
          </Typography>
          <Typography sx={{
            fontSize: 16,
            fontWeight: 700,
            color: palette.common.white,
          }}>
            0.0089 BNB
          </Typography>
        </Box>
        <Button sx={{
          background: '#31d0aa',
          border: 'none',
          outline: 'none',
          fontSize: 14,
          color: palette.common.white,
          fontWeight: 600,
          padding: '6.5px 0',
          width: '100%',
          borderRadius: '16px !important',
          textTransform: 'initial',
        }}>
          Enter UP
        </Button>
        <Button sx={{
          background: '#ed4b9e',
          border: 'none',
          outline: 'none',
          fontSize: 14,
          textTransform: 'initial',
          color: palette.common.white,
          fontWeight: 600,
          padding: '6.5px 0',
          width: '100%',
          borderRadius: '16px !important',
          marginTop: '4px',
        }}>
          Enter DOWN
        </Button>
      </Box>
    </Box>
  )
}