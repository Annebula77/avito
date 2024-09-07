import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import GlobalStyle from './GlobalStyle.ts';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
