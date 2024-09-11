import styled from 'styled-components';
import { StyledSection } from '../../styling/stylesToReuse';

const StyledTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    rgba(72, 66, 131, 1),
    rgba(241, 79, 79, 1),
    rgba(196, 196, 196, 1),
    rgba(140, 40, 40, 1)
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: color-shift 3s linear infinite;

  @keyframes color-shift {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const Loader = () => {
  return (
    <StyledSection>
      <StyledTitle>MarketMe</StyledTitle>
    </StyledSection>
  );
};

export default Loader;
