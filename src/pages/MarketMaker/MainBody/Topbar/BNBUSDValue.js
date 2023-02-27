import { Box, Typography } from "@mui/material"
import { palette } from "../../../../themes"
import BNBSymbol1 from '../../../../assets/images/market maker/BNB Symbol1.png'

export const BNBUSDValue = () => {
  return (
    <Box sx={{
      width: '305px',
    }}>
      <Box ml={5} display='flex' justifyContent='space-betweem' alignItems='center' py={2} px={4} sx={{
        width: 'fit-content',
        background: palette.common.black,
        position: 'relative',
        background: palette.common.black,
        borderRadius: '999px',
      }}>
        <Box component='img' src={BNBSymbol1} alt='sumbol' sx={{
          position: 'absolute',
          left: '-20px',
          top: '-2px',
          width: '45px',
        }} />
        <Typography ml={5} variant="h3" sx={{
          color: palette.common.white,
          fontWeight: 700,
        }}>
          BNBUSD
        </Typography>
        <Typography ml={3} variant="h5" sx={{
          color: palette.common.white,
          fontWeight: 400,
        }}>
          $ 301.5325
        </Typography>
      </Box>
    </Box>
  )
}