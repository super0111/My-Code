import { Box } from "@mui/material"
import { Sliderbar } from "./Sliderbar"
import { BNBUSDValue } from "./BNBUSDValue"
import { Timebar } from "./Timebar"

export const Topbar = (props) => {
  const { next, previous, renderer, count } = props;

  return (
    <Box px={4} mb={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <BNBUSDValue />
      <Sliderbar next={next} previous={previous}/>
      <Timebar renderer={renderer} count={count}/>
    </Box>
  )
}