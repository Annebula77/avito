import { Typography } from '@mui/material';
import AdsCard from '../AdsCard/AdsCard';
import { StyledSection } from '../../styling/stylesToReuse';

const AdsList = () => {
  return (
    <StyledSection>
      <Typography variant="h1">AdsList</Typography>
      <AdsCard
        name="Носки ношенные"
        image="/filling.webp"
        price={100}
        views={1000}
        likes={1500}
        navLink="#"
      />
    </StyledSection>
  );
};

export default AdsList;
