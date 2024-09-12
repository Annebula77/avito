import styled from 'styled-components';
import { media } from '../../styling/breakpoints';

export const Wrapper = styled.article`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  ${media.lg`
  flex-direction: row;
  justify-content: space-between; 
  align-items: flex-start;  
  gap: 20px; 
  `}
`;

export const DetailsWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const NoHoverIconButton = styled.div`
  margin: 0;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

export const ProductsWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
