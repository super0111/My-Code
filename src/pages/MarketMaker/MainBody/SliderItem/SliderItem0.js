import { Box, Typography } from "@mui/material"
import HideSourceIcon from '@mui/icons-material/HideSource';
import { palette } from "../../../../themes"

import { MiddleItem0 } from "./MiddleItem0"

export const SliderItem0 = () => {
  return (
    <Box sx={{
      width: '300px',
      background: '#323144',
      borderRadius: '24px',
      overflow: 'hidden',
    }}>
      <Box py={2} px={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{
        background: '#3d3952',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      }}>
        <Box display={'flex'} alignItems={'center'}>
          <HideSourceIcon sx={{ color: '#666171', marginRight: '5px' }} />
          <Typography variant="h4" sx={{
            color: '#666171',
            textTransform: 'capitalize',
            lineHeight: '21px',
            fontSize: 16,
          }}>
            Expired
          </Typography>
        </Box>
        <Typography variant="h4" sx={{
          color: '#666171',
          lineHeight: '15px',
          fontSize: 12,
        }}>
          #149956
        </Typography>
      </Box>

      <Box p={4}>
        <Box mt={4} display={'flex'} justifyContent={'center'} sx={{
          position: 'relative',
        }}>
          <svg height="65px" width="240px" viewBox="0 0 240 65" color="#3d3c58" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><g filter="url(#filter0_i)"><path d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z" fill="#3d3c58"></path></g><defs><filter id="filter0_i" x="10.0001" y="1.03125" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{
            position: 'absolute',
            top: '10px',
          }}>
            <Typography sx={{
              fontSize: 20,
              fontWeight: 700,
              color: palette.primary.main,
              textAlign: 'center',
              marginBottom: '-5px',
            }}>
              Up
            </Typography>
            <Typography sx={{
              fontSize: 14,
              fontWeight: 600,
              color: '#b8add2',
              textAlign: 'center',
            }}>
              2.19x
              <span style={{ fontSize: 12, marginLeft: '5px' }}>Payout</span>
            </Typography>
          </Box>
        </Box>

        <MiddleItem0 />

        <Box display={'flex'} justifyContent={'center'} sx={{
          position: 'relative',
        }}>
          <svg height="65px" width="240px" viewBox="0 0 240 65" color="#c14d96" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><g filter="url(#filter0_i)"><path d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z" fill="#c14d96"></path></g><defs><filter id="filter0_i" x="10.0001" y="1" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{
            position: 'absolute',
            top: '10px',
          }}>
            <Typography sx={{
              fontSize: 14,
              fontWeight: 600,
              color: palette.common.white,
              textAlign: 'center',
            }}>
              2.19x
              <span style={{ fontSize: 12, marginLeft: '5px' }}>Payout</span>
            </Typography>
            <Typography sx={{
              fontSize: 20,
              fontWeight: 700,
              color: palette.common.white,
              textAlign: 'center',
              marginTop: '-5px',
            }}>
              Down
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}