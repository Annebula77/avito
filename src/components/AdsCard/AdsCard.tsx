import { Button, Card, CardContent, Tooltip, Typography } from '@mui/material';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { CardLink, ReactionWrapper } from '../../styling/stylesToReuse';
import { NameWrapper, RowWrapper, StyledImage } from './adsCardStyles';
import { formatPrice } from '../../utils/functions/formatPrice';
import { useNavigate } from 'react-router-dom';

interface AdsCardProps {
  navLink: string;
  name: string;
  image?: string;
  price: number;
  views?: number;
  likes?: number;
  quantity?: number;
  productId: string;
}

const AdsCard: React.FC<AdsCardProps> = ({
  name,
  image,
  price,
  views,
  likes,
  navLink,
  quantity,
  productId,
}) => {
  const navigate = useNavigate();
  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    navigate('/orders', { state: { productId } });
  };

  return (
    <CardLink to={navLink}>
      <Card
        sx={{
          minWidth: { sx: '300px', sm: '400px', md: '900px', lg: '1100px' },
          maxWidth: '1300px',
          width: '100%',
          paddingRight: { xs: '0px', md: '20px' },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <NameWrapper>
            <StyledImage
              src={image}
              alt={name}
              loading="lazy"
              decoding="async"
            />
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
            {quantity && (
              <Typography
                variant="h2"
                sx={{ marginLeft: { xs: 0, md: 'auto' } }}
              >
                {quantity} шт. x
              </Typography>
            )}
            <Typography
              variant="h2"
              color="primary.main"
              align="left"
              sx={{
                marginLeft: {
                  xs: 0,
                  md: 'auto',
                },
                paddingLeft: {
                  sx: 0,
                  md: '100px',
                },
              }}
            >
              {formatPrice(price)} рублей
            </Typography>
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
            <Tooltip title="Список заказов с товаром" placement="top">
              <Button
                type="button"
                variant="contained"
                onClick={handleClick}
                sx={{ padding: '10px 10px', marginLeft: { xs: 0, md: 'auto' } }}
                onMouseDown={(
                  event: React.SyntheticEvent<HTMLButtonElement>
                ) => {
                  event.stopPropagation();
                  event.preventDefault();
                }}
              >
                <LocalMallRoundedIcon />
              </Button>
            </Tooltip>
          </RowWrapper>
        </CardContent>
      </Card>
    </CardLink>
  );
};

export default AdsCard;
