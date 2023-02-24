import { createTheme } from '@mui/material/styles'

const createTypographySystem = () => {
  return {
    h2: {
      color: '#31d0aa',
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: 24,
    },
    h3: {
      color: '#b8add2',
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h4: {
      color: '#b8add2',
      fontSize: '14px',
      fontWeight: 400,
    },
    h5: {
      color: '#b8add2',
      fontSize: '12px',
      fontWeight: 400,
    },

  }
}

const createPaletteSystem = () => ({
  common: {
    black: '#000',
    white: '#FFFFFF',
  },
  text: {
    disabled: '#353547',
    primary: '#31d0aa',
  },
})
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          '&:before': {
            border: '1px solid rgba(0,0,0,0.2)',
          },
          color: 'white',
        },
        tooltip: {
          backgroundColor: 'white',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '16px',
          margin: 0,
          marginBottom: '0px !important',
          marginTop: '0px !important',
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Kanit, sans-serif',
        },
      },
    },
  },
  palette: createPaletteSystem(),
  spacing: 4,
  typography: createTypographySystem(),
})

export default theme
export const palette = theme.palette
