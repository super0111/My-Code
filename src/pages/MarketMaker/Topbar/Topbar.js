import { Box } from "@mui/material"

import { Slider, BNBUSDValue, Timebar } from './'

export const Topbar = () => {
  return (
    <Box pl={12} pr={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <BNBUSDValue />
      <Slider />
      <Timebar />
    </Box>
  )
}