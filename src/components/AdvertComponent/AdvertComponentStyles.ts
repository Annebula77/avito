import styled from 'styled-components';
import { media } from '../../styling/breakpoints';

export const StyledFigure = styled.figure`
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 40px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 40px;

    ${media.md` 
      width: 400px;
      height: 400px;
    `}
  }

  ${media.md` 
  flex-direction: row;
  justify-content: space-between;
    `}
`;

export const StyledFigureCaption = styled.figcaption`
  margin: 0 0 auto auto;
  padding: 0;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;

  ${media.md` 
   
    align-items: flex-end;
    `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.4s ease;
  border-radius: 40px;
  &:hover {
    opacity: 0.6;
  }
`;
