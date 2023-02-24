import type { ButtonProps } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const createTypographySystem = () => {
  return {
    body1: {
      color: '#513F01',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: '150%',
      textDecorationLine: 'none !important',
    },
    body2: {
      color: '#090A0C !important',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: '160%',
      textDecorationLine: 'underline',
    },
    button: {
      alignItems: 'center',
      color: '#fff',
      display: 'flex',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 700,
      letterSpacing: '0.75px',
      lineHeight: '32px',
    },
    h1: {
      color: '#513F01',
      fontSize: 62,
      fontStyle: 'normal',
      fontWeight: 700,
      letterSpacing: '0.01em',
      lineHeight: '102%',
    },
    h2: {
      color: '#513F01',
      fontSize: '42px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '120%',
    },
    h3: {
      color: '#513F01',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: '105%',
    },
    h4: {
      color: '#090A0C !important',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '130%',
    },
  }
}

const createPaletteSystem = () => ({
  common: {
    black: '#000',
    white: '#FFFFFF',
  },
  primary: {
    dark: '#513F01 !important',
    light: '#CA9F02',
    main: '#FDD649 !important',
  },
  secondary: {
    main: '#3ffefd',
  },
  text: {
    disabled: '#596673',
    primary: '#090A0C',
    secondary: '#596673',
  },
})
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained' as ButtonProps['variant'] },
          style: {
            '&:hover': {
              backgroundColor: '#CA9F02 !important',
            },
            background: '#CA9F02 !important',
            color: '#FCFCFC !important',
          },
        },
        {
          props: { variant: 'outlined' as ButtonProps['variant'] },
          style: {
            '&:hover': {
              color: '#FFF !important',
            },
          },
        },
      ],
    },
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
          fontFamily: 'DM Sans',
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
