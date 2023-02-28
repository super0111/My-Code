import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import BNBSymbol from '../assets/images/market maker/BNB Symbol.png'
import EthSymbol from '../assets/images/market maker/Eth Symbol.png'

import { palette } from "../themes"

const navItems = [
  { name: 'Win', to: '/win' },
  { name: 'Trade', to: '/trade' },
  { name: 'Earn', to: 'earn' },
  { name: 'NFT', to: 'nft' },
]
const networks = [
  { symbol: '', networkName: 'Select a Network' },
  { symbol: BNBSymbol, networkName: 'BNB Smart Chain', networkName1: 'BNB' },
  { symbol: EthSymbol, networkName: 'Ethereum', networkName1: 'Eth' },
]

export const Header = () => {
  const navigate = useNavigate()
  const [ selectedNetworkName, setSelectedNetworkName ] = useState('BNB Smart Chain')

  const handleSelectNetwork = (i, name) => {
    if(i !== 0)
      setSelectedNetworkName(name)
  }

  const walletConnect = () => {

  }
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box p={3} display='flex' justifyContent='space-between' alignItems='center' sx={{
        background: '#27262c',
        borderBottom: '1px solid #383241',
      }}>
        <Box display='flex' alignItems='center'>
          <Box display='flex' alignItems='center' sx={{cursor: 'pointer'}} onClick={()=>navigate('/')}>
            <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-4ba21b47-0 hFKfwc"><circle cx="48" cy="48" r="48" fill="#53DEE9"></circle><path fillRule="evenodd" clipRule="evenodd" d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z" fill="#633001"></path><path d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z" fill="#D1884F"></path><path d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z" fill="#FEDC90"></path><path d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z" fill="#633001"></path><defs><linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop stopColor="#53DEE9"></stop><stop offset="1" stopColor="#1FC7D4"></stop></linearGradient></defs></svg>
            <Typography ml={1} variant="h4" sx={{
              display: { lg: 'block', xs: 'none' },
              fontFamily: 'monospace',
              fontSize: 22,
              fontWeight: 600,
              color: palette.common.white,
            }}>
              PancakeSwap
            </Typography>
          </Box>
          <Box ml={{ md: 5, xs: 1}}>
            {navItems.map((item, i) => (
              <Button key={i} sx={{
                padding: {sm: '6px 8px', xs: '8px 2px !important'},
                minWidth: {sm: '64px !important', xs: '40px !important'},
                '&:hover': {
                  background: '#353547',
                  borderRadius: '10px',
                }
              }}>
                <Link
                  to={item.to}
                  style={{ color: palette.text.primary, textDecoration: 'none', textTransform: 'initial',}}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Box>

        <Box display='flex' alignItems='center'>
          <Box display='flex' alignItems='center' sx={{cursor: 'pointer', display: { md: 'flex', xs: 'none' },}}>
            <Box sx={{
              width: '24px',
              '&:hover': {
                width: '28px',
                transition: '0.2s',
              }
            }}>
              <svg viewBox="0 0 96 96" width="100%" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-4ba21b47-0 hFKfwc"><circle cx="48" cy="48" r="48" fill="#53DEE9"></circle><path fillRule="evenodd" clipRule="evenodd" d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z" fill="#633001"></path><path d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z" fill="#D1884F"></path><path d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z" fill="#FEDC90"></path><path d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z" fill="#633001"></path><defs><linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop stopColor="#53DEE9"></stop><stop offset="1" stopColor="#1FC7D4"></stop></linearGradient></defs></svg>
            </Box>
            <Typography variant="h3" sx={{
              fontWeight: 600,
              marginLeft: '5px'
            }}>
              $3.959
            </Typography>
          </Box>
          <LanguageIcon sx={{ display: { md: 'block', xs: 'none' }, color: palette.text.primary, margin: '0 10px', cursor: 'pointer' }} />
          <SettingsIcon sx={{ display: { md: 'block', xs: 'none' }, color: palette.text.primary, marginRight: '10px', cursor: 'pointer' }} />

          <Box mr={4} pr={2} display={{md:'flex', xs: 'none'}} justifyContent='space-between' alignItems='center' className='network-dropdown' sx={{
            width: {md: '220px', xs: '178px'},
            backgroundColor: '#353547',
            borderRadius: '16px',
            boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 0px inset',
            cursor: 'pointer',
            position: 'relative',
          }}>
            <Box component='img' src={BNBSymbol} alt='symbol' sx={{
              width: '35px',
            }} />
            <Typography mx={2} variant='h4' sx={{
              fontWeight: 600,
              fontSize: {md:16, xs: 12},
              color: palette.common.white,
            }}>
              {selectedNetworkName}
            </Typography>
            <KeyboardArrowDown sx={{color: palette.common.white}} />

            <Box display='flex' flexDirection='column' className='network-dropdown-body' sx={{
              position: 'absolute',
              top: '35px',
              left: '-5px',
            }}>
              <Box sx={{
                margin: 'auto',
                width: '200px',
                background: '#27262c',
                height: '13px',
              }}></Box>
              <Box pb={3} display='flex' flexDirection='column' sx={{
                backgroundColor: '#27262c',
                border: '1px solid #383241',
                borderRadius: '16px',
                width: '240px',
                zIndex: 1001,
              }}>
                { networks.map((item, i) => (
                  <Box key={i} px={4} display='flex' alignItems='center'
                    sx={{
                      padding: i === 0 ? '16px 16px' : '8px 16px',
                      borderBottom: i === 0 && '1px solid #4b4949',
                      '&:hover': {
                        background: i !== 0 && '#373737',
                      }
                    }}
                    onClick={()=>handleSelectNetwork(i, item.networkName)}
                  >
                    { i !==0 &&
                      <Box component='img' src={item.symbol} alt='symbol' sx={{
                        width: i === 1 ? '35px' : '33px',
                      }} />
                    }
                    <Typography variant='h4' ml={2}>
                      {item.networkName}
                    </Typography>
                  </Box>
                )) }
              </Box>
            </Box>
          </Box>
          <Button
            onClick={walletConnect}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              borderRadius: '16px',
              textTransform: 'inherit',
              boxShadow: 'rgb(14 14 44 / 40%) 0px -1px 0px 0px inset',
              fontSize: 14,
              fontWeight: 600,
              justifyContent: 'center',
              outline: 'none',
              transition: 'background-color 0.2s ease 0s, opacity 0.2s ease 0s',
              backgroundColor: '#1fc7d4',
              color: '#191326',
              padding: '4px 16px',
              '&:hover': {
                backgroundColor: '#1c8a93',
              }
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
      <Box display={{md: 'none', xs: 'flex'}} justifyContent={'end'} alignItems='center' sx={{ background: 'black' }}>
        <LanguageIcon sx={{ color: palette.text.primary, margin: '0 10px', cursor: 'pointer' }} />
        <SettingsIcon sx={{ color: palette.text.primary, marginRight: '10px', cursor: 'pointer' }} />

        <Box mr={2} pr={2} display='flex' justifyContent='space-between' alignItems='center' className='network-dropdown' sx={{
          width: {md: '220px', xs: '178px'},
          backgroundColor: '#353547',
          borderRadius: '16px',
          boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 0px inset',
          cursor: 'pointer',
          position: 'relative',
        }}>
          <Box component='img' src={BNBSymbol} alt='symbol' sx={{
            width: '35px',
          }} />
          <Typography mx={2} variant='h4' sx={{
            fontWeight: 600,
            fontSize: {md:16, xs: 12},
            color: palette.common.white,
          }}>
            {selectedNetworkName}
          </Typography>
          <KeyboardArrowDown sx={{color: palette.common.white}} />

          <Box display='flex' flexDirection='column' className='network-dropdown-body' sx={{
            position: 'absolute',
            top: '35px',
            left: '-57px',
          }}>
            <Box pb={3} display='flex' flexDirection='column' sx={{
              backgroundColor: '#27262c',
              border: '1px solid #383241',
              borderRadius: '16px',
              width: '240px',
              zIndex: 1001,
            }}>
              { networks.map((item, i) => (
                <Box key={i} px={4} display='flex' alignItems='center'
                  sx={{
                    padding: i === 0 ? '16px 16px' : '8px 16px',
                    borderBottom: i === 0 && '1px solid #4b4949',
                    '&:hover': {
                      background: i !== 0 && '#373737',
                    }
                  }}
                  onClick={()=>handleSelectNetwork(i, item.networkName)}
                >
                  { i !==0 &&
                    <Box component='img' src={item.symbol} alt='symbol' sx={{
                      width: i === 1 ? '35px' : '33px',
                    }} />
                  }
                  <Typography variant='h4' ml={2}>
                    {item.networkName}
                  </Typography>
                </Box>
              )) }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}