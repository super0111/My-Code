import { useState, useContext } from 'react'
import { Box, Button, Typography, Switch } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import ContractUtils from '../../../../utils/contractUtils';
import { palette } from "../../../../themes"
import { Context } from '../../../../context/AppProvider';

const leverageMarks = {
  2: "2x",
  10: "10x",
  20: "20x",
  30: "30x",
  40: "40x",
  50: "50x",
  60: "60x",
  70: "70x",
  80: "80x",
  90: "90x",
  100: "100x",
};

export const CreateBetModal = (props) => {
  const {createBetModal, setCreateBetModal} = props
  const [currentAccount, setCurrentAccount] = useContext(Context)
  const [checked, setChecked] = useState(true);
  const [leverageValue, setLeverageValue] = useState(5);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const connectWalletHandler = async () => {
    let res = await ContractUtils.connectWallet();
    if (res.address) {
      setCurrentAccount(res.address);
      window.localStorage.setItem('walletLocalStorageKey', res.address);
    }
    else {
      setCurrentAccount("");
    }
  }

  return (
    <Box sx={{
      width: '300px',
      background: '#27262c',
      borderRadius: '24px',
      overflow: 'hidden',
    }}>
      <Box py={4} px={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{
        background: '#3a364b',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      }}>
        <Box display={'flex'} alignItems={'center'}>
          <ArrowBackIcon 
            onClick={() => setCreateBetModal(!createBetModal)}
            sx={{ color: palette.common.white, marginRight: '5px', cursor: 'pointer' }} 
          />
          <Typography variant="h4" sx={{
            color: palette.common.white,
            textTransform: 'capitalize',
            lineHeight: '21px',
            fontSize: 16,
            fontWeight: 600,
          }}>
            Set Position
          </Typography>
        </Box>
      </Box>
      <Box px={4} pt={4} pb={1}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{
            fontSize: 14,
            color: palette.text.primary,
          }}>
            Commit:
          </Typography>
          <Typography sx={{
            fontSize: 16,
            fontWeight: 600,
            color: palette.common.white,
          }}>
            BNB
          </Typography>
        </Box>
        <input type='text' placeholder='0.00' style={{
          width: '88%',
          backgroundColor: '#372f47',
          border: 'none',
          borderRadius: '16px',
          padding: '12px 16px',
          outline: 'none',
          color: palette.text.primary,
        }}/>
      </Box>
      <Box px={4} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography sx={{
          fontSize: 14,
          color: palette.text.primary,
        }}>
          Bet Type:
        </Typography>
        <Box display={'flex'} alignItems={'center'}>
          <Typography sx={{
            fontSize: 12,
            color: palette.text.primary,
          }}>Long</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          <Typography sx={{
            fontSize: 12,
            color: palette.text.primary,
          }}>Short</Typography>
        </Box>
      </Box>
      <Box px={4} py={1}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{
            fontSize: 14,
            color: palette.text.primary,
          }}>
            Bet Duration:
          </Typography>
          <Typography sx={{
            fontSize: 14,
            color: palette.common.white,
          }}>
            Hour
          </Typography>
        </Box>
        <input type='text' placeholder='0.00' style={{
          width: '88%',
          backgroundColor: '#372f47',
          border: 'none',
          borderRadius: '16px',
          padding: '12px 16px',
          outline: 'none',
          color: palette.text.primary,
        }}/>
      </Box>

      <Box px={4} py={1} className='swiper-no-swiping'>
        <Typography sx={{
          fontSize: 14,
          color: palette.text.primary,
        }}>payout Ratio</Typography>
        <Slider
          min={1}
          max={100}
          step={1}
          marks={leverageMarks}
          onChange={(value) => { setLeverageValue(value) }}
          value={leverageValue}
          defaultValue={leverageValue}
          dotStyle={{ backgroundColor: '#31d0aa', border: 'none', borderRadius: '2px', width: '2px' }}
          handleStyle={{ backgroundColor: '#31d0aa', opacity: 1, boxShadow: 'none' }}
          trackStyle={{ background: '#31d0aa' }}
          railStyle={{ backgroundColor: '#497a6d' }}
          activeDotStyle={{ backgroundColor: '#088466' }}
        />
        {/* <Slider defaultValue={30} step={10} marks min={10} max={110}/> */}
      </Box>

      <Box mt={1} p={4}>
        {
          currentAccount === '' ?
          <Button
            onClick={connectWalletHandler}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              width: '100%',
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
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#1c8a93',
              }
            }}
          >
            Connect Wallet
          </Button>
          :
          <Button
            // onClick={connectWalletHandler}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              width: '100%',
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
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#1c8a93',
              }
            }}
          >
            Create Bet
          </Button>
        }
      </Box>
    </Box>
  )
}