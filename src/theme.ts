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
      color: 'rgba(76, 81, 74, 1)',
    },
    h2: {
      fontFamily: 'Jost',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color: 'rgba(76, 81, 74, 1)',
    },
    h3: {
      fontFamily: 'Jost',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      color: 'rgba(76, 81, 74, 1)',
    },
    h4: {
      fontFamily: 'Jost',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      color: 'rgba(76, 81, 74, 1)',
    },
    h5: {
      fontFamily: 'Jost',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color: 'rgba(76, 81, 74, 1)',
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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '80px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '80px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
        },
        notchedOutline: {
          borderRadius: '80px',
        },
      },
    },
  },
});

export default theme;
