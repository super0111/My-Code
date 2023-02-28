import { Box, Typography } from "@mui/material"
import { palette } from "../../../../themes"
import BNBSymbol1 from '../../../../assets/images/market maker/BNB Symbol1.png'

export const BNBUSDValue = () => {
  return (
    <Box sx={{
      width: { sm: '245px', xs: '130px'},
    }}>
      <Box ml={{ md: 5, xs: 2}} display='flex' justifyContent='space-betweem' alignItems='center' py={2} px={4} sx={{
        width: 'fit-content',
        position: 'relative',
        background: palette.common.black,
        borderRadius: '999px',
      }}>
        <Box component='img' src={BNBSymbol1} alt='sumbol' sx={{
          position: 'absolute',
          left: { md: '-20px', xs: '-10px'},
          top: { md: '-2px', xs: '10px'},
          width: { md: '45px', xs: '35px'},
        }} />
        <Box display={'flex'} flexDirection={{ md: 'row', xs: 'column' }} alignItems={{ md: 'center', xs: 'start' }}>
          <Typography ml={5} variant="h3" sx={{
            color: palette.common.white,
            fontWeight: 700,
          }}>
            BNBUSD
          </Typography>
          <Typography ml={3} variant="h5" sx={{
            color: palette.common.white,
            fontWeight: 700,
            marginLeft: {md: 0, xs: '20px'}
          }}>
            $ 301.5325
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}