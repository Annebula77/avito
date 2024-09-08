import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(66, 119, 202, 1)', // Light blue
      light: 'rgba(255, 255, 255, 1)', // White
      dark: 'rgba(4, 78, 196, 1)', // Dark blue
    },
    secondary: {
      main: 'rgba(229, 229, 229, 1)', // grey
      contrastText: 'rgba(229, 229, 229, 1)', // For text on secondary color, use primary
    },
    error: {
      main: 'rgba(255, 75, 107, 1)', // Assuming Alert is for errors red
    },
    warning: {
      main: 'rgba(255, 233, 39, 1)', // Your UI kit Warning color yellow
    },
    success: {
      main: 'rgba(5, 170, 111, 1)', // Your UI kit Success color green
    },
    background: {
      default: 'rgba(255, 255, 255, 1)', // white background
      paper: 'rgba(255, 255, 255, 1)', // For elements like cards, dialogues
    },
    text: {
      primary: 'rgba(40, 43, 46, 1)',
      secondary: 'rgba(142, 142, 142, 1)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Jost',
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '70px',
    },
    h2: {
      fontFamily: 'Jost',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: 'Jost',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    h4: {
      fontFamily: 'Jost',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    h5: {
      fontFamily: 'Jost',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
      },
    },
  },
});

export default theme;
