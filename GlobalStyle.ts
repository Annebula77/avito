import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }

@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
    src: url('./fonts/Jost-Regular.woff2') format('woff2'),
      url('./fonts/Jost-Regular.woff') format('woff'),
      url('./fonts/Jost-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-stretch: normal;
    font-display: swap;
    src: url('./fonts/Jost-Medium.woff2') format('woff2'),
      url('../fonts/Jost-Medium.woff') format('woff'),
      url('../fonts/Jost-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
    font-display: swap;
    src: url('./fonts/Jost-SemiBold.woff2') format('woff2'),
      url('./fonts/Jost-SemiBold.woff') format('woff'),
      url('./fonts/Jost-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    font-display: swap;
    src: url('./fonts/Jost-Bold.woff2') format('woff2'),
      url('./fonts/Jost-Bold.woff') format('woff'),
      url('./fonts/Jost-Bold.ttf') format('truetype');
  }



  /* * {
  box-shadow: 0 0 0 1px red;
} */
  
  html, body, #root {
  width: 100%;
  min-height: 100vh;
  padding: 0;  
  margin: 0;
  font-family: 'Jost', sans-serif;    
}
`;

export default GlobalStyle;