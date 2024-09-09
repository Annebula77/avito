import { Card, CardContent, Typography } from "@mui/material";
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styled from "styled-components";
import { CardLink } from "../../styling/stylesToReuse";
import { media } from "../../styling/breakpoints";

const StyledImage = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
margin: 0;
padding: 0;
border-radius: 20px;
`;

const RowWrapper = styled.div`
  padding: 20px 0 0;
  margin: 0;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; 

  ${media.xl`
    padding: 0 0 0 110px;
    justify-content: flex-start;
    gap: 40px; 
  `}
`;

const NameWrapper = styled.article`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${media.xl`
    flex-direction: row;
  `}
`;

const ReactionWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;  
`;




interface AdsCardProps {
  navLink: string;
  name: string;
  image: string;
  price: number;
  views: number;
  likes: number;
}

const AdsCard: React.FC<AdsCardProps> = ({ name, image, price, views, likes, navLink }) => {

  return (
    <CardLink to={navLink}>
      <Card sx={{ minWidth: '240px', maxWidth: '800px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: '60px' }}>
          <NameWrapper>
            <StyledImage src={image} alt={name} />
            <Typography variant="h2" color="text.primary">{name}</Typography>
            <Typography
              variant="h2"
              color="primary.main"
              align="left"
              sx={{
                marginLeft: {
                  xs: 0,
                  lg: 'auto'
                }
              }}
            >{price} рублей</Typography>
          </NameWrapper>
          <RowWrapper>
            <ReactionWrapper>
              <StackedBarChartRoundedIcon color="primary" />
              <Typography variant="h4">{views}</Typography>
            </ReactionWrapper>
            <ReactionWrapper>
              <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
              <Typography variant="h4">{likes}</Typography>
            </ReactionWrapper>
          </RowWrapper>
        </CardContent>
      </Card>
    </CardLink>
  )
}

export default AdsCard;