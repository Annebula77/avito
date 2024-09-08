import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from './breakpoints';
import { Typography } from '@mui/material';

// Service page styling
export const Container = styled.section`
 margin: 0;
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  margin: 0;
  padding: 0;
  border-radius: 20px;

  ${media.md`
  width: 300px;
  height: 300px;
  `}
  `;

// Link-button styling

export const ServiceStyledTypography = styled(Typography)`
  && {
    color: rgba(4, 78, 196, 1);  
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const StyledLink = styled(Link)`
   margin: 0;
  padding: 20px 20px;
  border-radius: 80px;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
    background-color: rgba(66, 119, 202, 1);
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.6;
  }

  ${media.md`
    padding: 20px 40px;
  `}
  `;

export const Logo = styled.h2`
  padding: 0;
  margin: 0;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(
    90deg,
    rgb(0, 155, 219) 6.89%,
    rgb(111, 238, 177) 44.57%,
    rgb(255, 123, 0) 96.3%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;

  ${media.md`
    margin: 0 0 10px;
  `}
`;

export const HeaderBox = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${media.md`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
  `;