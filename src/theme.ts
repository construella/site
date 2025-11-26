import { createTheme } from '@mui/material/styles';

export const costoradoTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F5357', // deep teal
      light: '#3F7579',
      dark: '#083234',
    },
    secondary: {
      main: '#4F6F55', // moss green
    },
    background: {
      default: '#F5F3EC', // light sand
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2933',
      secondary: '#4B5563',
    },
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'].join(','),
    h1: { fontWeight: 600, letterSpacing: '0.02em' },
    h2: { fontWeight: 600, letterSpacing: '0.015em' },
    h3: { fontWeight: 500 },
    body1: { fontSize: 14 },
    body2: { fontSize: 13 },
    caption: { fontSize: 11 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            outline: 'none',
          },
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
          },
          '&:active': {
            outline: 'none',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            outline: 'none',
          },
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
          },
          '&:active': {
            outline: 'none',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // Ensure no outline when Link is used as a button (component="button" or component={Button})
          '&:hover': {
            outline: 'none',
          },
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
          },
          '&:active': {
            outline: 'none',
          },
        },
      },
    },
  },
});

export const costoradoDarkPalette = {
  primary: {
    main: '#80CBC4', // Teal 200
    light: '#B2FEF7',
    dark: '#4F9A94',
    contrastText: '#000000',
  },
  secondary: {
    main: '#A5D6A7', // Green 200
    contrastText: '#000000',
  },
  background: {
    default: '#0A1929', // Deep dark blue-grey
    paper: '#001E3C',   // Darker blue-grey
  },
  text: {
    primary: '#E7EBF0',
    secondary: '#B2BAC2',
  },
};

export const costoradoBluePalette = {
  primary: {
    main: '#4682b4', // (steelblue)
    light: '#79B0E6',
    dark: '#005784',
  },
  secondary: {
    main: '#26C6DA', // Cyan 400
  },
  background: {
    default: '#F0F4F8', // Light Blue Grey
    paper: '#FFFFFF',
  },
  text: {
    primary: '#102A43',
    secondary: '#486581',
  },
};

export const costoradoBlueDarkPalette = {
  primary: {
    main: '#90CAF9', // Blue 200
    light: '#C3FDFF',
    dark: '#5D99C6',
    contrastText: '#000000',
  },
  secondary: {
    main: '#80DEEA', // Cyan 200
    contrastText: '#000000',
  },
  background: {
    default: '#0F172A', // Slate 900
    paper: '#1E293B',   // Slate 800
  },
  text: {
    primary: '#F1F5F9',
    secondary: '#94A3B8',
  },
};
