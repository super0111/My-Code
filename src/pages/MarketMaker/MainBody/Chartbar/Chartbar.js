import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Typography, Tab, Tabs } from "@mui/material"
import BarChartIcon from '@mui/icons-material/BarChart';
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import chainlinkImg from '../../../../assets/images/market maker/chainlink.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const Chartbar = () => {
  const [value, setValue] = useState(0);
  const [isChartShow, setIsChartShow] = useState(false);
  const handleChange = (event, newValue) => {
    setIsChartShow(true);
    setValue(newValue);
  };

  return (
    <Box mt={2}>
      <Box display={'flex'} flexDirection={{ md: 'row', xs: 'column-reverse' }} justifyContent={'space-between'} alignItems={'center'}>
        <Tabs value={value} onChange={handleChange} onClick={()=>setIsChartShow(true)} sx={{
          marginLeft: { sm: '30px', xs: '0px'},
          borderBottom: '1px solid #323144',
        }}>
          <Tab sx={{
              padding: {sm: '12px 16px', xs: '8px 8px'},
              fontSize: {sm: 14, xs: 12},
            }}
            label={
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <BarChartIcon />
                Traiding View Chart
              </Box>
            }
          />
          <Tab 
            label={
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <BarChartIcon />
                Chainlink Chart
              </Box>
            } 
          />
        </Tabs>
        <Link to='https://chain.link/' target="_blank" style={{ marginTop: '-15px' }}>
          <Box component='img'
            src={chainlinkImg} 
            alt='img' 
            sx={{
              width: '180px',
              margin: '10px 20px 0 0',
              cursor: 'pointer',
            }} 
          />
        </Link>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
        height: '20px',
        width: '100%',
        backgroundColor: '#27262c',
      }}>
        <Box
          onClick={() => setIsChartShow(!isChartShow)}
          sx={{
            backgroundColor: '#b8add2',
            borderRadius: '8px',
            height: '4px',
            width: '64px',
            cursor: 'pointer',
          }}
        ></Box>
      </Box>
      <Box sx={{ display: isChartShow ? 'block' : 'none' }}>
        <TabPanel value={value} index={0}>
          <Box sx={{
            height: '350px',
          }}>
            <TradingViewWidget
              symbol="BNBUSD"
              theme={Themes.DARK}
              locale="es"
              autosize
              // timezone="Etc/UTC"
              // style="1"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{
            height: '350px',
            backgroundColor: '#131722',
          }}>
            <Typography sx={{ fontSize: 20, color: 'white' }}>Chainlink Chart</Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  )
}