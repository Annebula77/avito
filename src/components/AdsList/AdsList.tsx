import { Typography } from "@mui/material";
import styled from "styled-components";
import AdsCard from "../AdsCard/AdsCard";

const StyledSection = styled.section`
padding: 0;
margin: 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;

`;

const AdsList = () => {
  return (
    <StyledSection>
      <Typography variant="h1">AdsList</Typography>
      <AdsCard
        name='Носки ношенные'
        image="/filling.webp"
        price={100} views={1000}
        likes={1500}
        navLink="#"
      />
    </StyledSection>
  );
};

export default AdsList;