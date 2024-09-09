import JostBoldWoff2 from '../fonts/Jost-Bold.woff2';
import JostBoldWoff from '../fonts/Jost-Bold.woff';
import JostBoldTtf from '../fonts/Jost-Bold.ttf';
import JostMediumWoff2 from '../fonts/Jost-Medium.woff2';
import JostMediumWoff from '../fonts/Jost-Medium.woff';
import JostMediumTtf from '../fonts/Jost-Medium.ttf';
import JostRegularWoff2 from '../fonts/Jost-Regular.woff2';
import JostRegularWoff from '../fonts/Jost-Regular.woff';
import JostRegularTtf from '../fonts/Jost-Regular.ttf';
import JostSemiBoldWoff2 from '../fonts/Jost-SemiBold.woff2';
import JostSemiBoldWoff from '../fonts/Jost-SemiBold.woff';
import JostSemiBoldTtf from '../fonts/Jost-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
  width: 100%;
  min-height: 100vh;
  padding: 0;  
  margin: 0;
  font-family: 'Jost', sans-serif;
  color: rgba(76, 81, 74, 1);    
}

@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
    src: url(${JostRegularWoff2}) format('woff2'),
         url(${JostRegularWoff}) format('woff'),
         url(${JostRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-stretch: normal;
    font-display: swap;
    src: url(${JostMediumWoff2}) format('woff2'),
      url(${JostMediumWoff}) format('woff'),
      url(${JostMediumTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
    font-display: swap;
    src: url(${JostSemiBoldWoff2}) format('woff2'),
      url(${JostSemiBoldWoff}) format('woff'),
      url(${JostSemiBoldTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    font-display: swap;
    src: url(${JostBoldWoff2}) format('woff2'),
      url(${JostBoldWoff}) format('woff'),
      url(${JostBoldTtf}) format('truetype');
  }



  /* * {
  box-shadow: 0 0 0 1px red;
} */ 

`;

export default GlobalStyle;