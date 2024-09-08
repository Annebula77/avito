import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from '../GlobalStyle.ts';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import NoMatchPage from './routes/noMatch.tsx';
import ErrorPage from './routes/errorPage.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NoMatchPage />,
      },
      {
        path: 'orders',
        element: <ErrorPage />,
      },
      {
        path: '*',
        element: <NoMatchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
