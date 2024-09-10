import styled from 'styled-components';
import { media } from '../../styling/breakpoints';

export const RowWrapper = styled.div`
  padding: 20px 0 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  ${media.lg`
    padding: 0 0 0 110px;
    justify-content: flex-start;
    gap: 40px; 
  `}
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0;
  padding: 0;
  border-radius: 20px;
`;

export const NameWrapper = styled.article`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${media.lg`
    flex-direction: row;
  `}
`;

export const ReactionWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;
