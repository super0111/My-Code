import { Box, Typography } from "@mui/material"
import Countdown from "react-countdown";

import { palette } from "../../../../themes";

export const MiddleItem3 = (props) => {
  const { renderer, count } = props;

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

      <Countdown date={Date.now() + count} renderer={renderer} />
    </Box>
  )
}