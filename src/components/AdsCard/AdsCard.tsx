import { Card, CardContent, Typography } from '@mui/material';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { CardLink } from '../../styling/stylesToReuse';
import {
  NameWrapper,
  ReactionWrapper,
  RowWrapper,
  StyledImage,
} from './adsCardStyles';

interface AdsCardProps {
  navLink: string;
  name: string;
  image: string;
  price: number;
  views: number;
  likes: number;
  quantity?: number;
}

const AdsCard: React.FC<AdsCardProps> = ({
  name,
  image,
  price,
  views,
  likes,
  navLink,
  quantity,
}) => {
  return (
    <CardLink to={navLink}>
      <Card sx={{ minWidth: '240px', maxWidth: '900px' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingX: '60px',
          }}
        >
          <NameWrapper>
            <StyledImage src={image} alt={name} />
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                overflow: { xs: 'hidden' },
                textOverflow: { xs: 'ellipsis' },
                whiteSpace: { xs: 'nowrap' },
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h2"
              color="primary.main"
              align="left"
              sx={{
                marginLeft: {
                  xs: 0,
                  lg: 'auto',
                },
              }}
            >
              {price} рублей
            </Typography>
            {quantity && <Typography variant="h4"> x {quantity}</Typography>}
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
  );
};

export default AdsCard;
