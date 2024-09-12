import { type ProductModel } from '../../models/productSchema';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button, Chip } from '@mui/material';
import StatusComponent from '../StatusComponent/StatusComponent';
import { StyledSpan } from '../../styling/stylesToReuse';
import AdsCard from '../AdsCard/AdsCard';
import { formatDate } from '../../utils/functions/formatDate';
import { ExpandMore, RotatingIcon } from './MuiStyles';
import {
  DetailsWrapper,
  NoHoverIconButton,
  ProductsWrapper,
  Wrapper,
} from './OrderCardStyles';
import { formatPrice } from '../../utils/functions/formatPrice';

interface OrderCardProps {
  orderNumber: number;
  status: number;
  createdAt: string;
  finishedAt: string;
  totalAmount: number;
  delivery: string;
  products: ProductModel[];
  onClick: () => void;
}
const OrderCard: React.FC<OrderCardProps> = ({
  orderNumber,
  status,
  createdAt,
  finishedAt,
  totalAmount,
  delivery,
  products,
  onClick,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        minWidth: '240px',
        maxWidth: '1200px',
        width: '100%',
        padding: '20px',
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5">
            Заказ: <StyledSpan>No{orderNumber}</StyledSpan>
          </Typography>
        }
        subheader={`создан: ${formatDate(createdAt)}`}
        action={
          <NoHoverIconButton aria-label="закрыть заказ">
            {finishedAt ? (
              <Chip
                label={`Завершён: ${formatDate(finishedAt)}`}
                variant="outlined"
                color="primary"
              />
            ) : (
              <Button variant="contained" color="primary" onClick={onClick}>
                Завершить заказ
              </Button>
            )}
          </NoHoverIconButton>
        }
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: '20px', sm: 0 },
          margin: { xs: 0, sm: '0 auto' },
        }}
      />
      <CardContent>
        <Wrapper>
          <DetailsWrapper>
            <Typography
              variant="h2"
              sx={{ xs: { fontSize: '18px' }, md: { fontSize: '24px' } }}
            >
              Способ доставки: <StyledSpan>{delivery}</StyledSpan>
            </Typography>
            <Typography
              variant="h2"
              sx={{ xs: { fontSize: '18px' }, md: { fontSize: '24px' } }}
            >
              Сумма заказа:{' '}
              <StyledSpan>{formatPrice(totalAmount)} рублей</StyledSpan>
            </Typography>
            <Typography
              variant="h2"
              sx={{ xs: { fontSize: '18px' }, md: { fontSize: '24px' } }}
            >
              Наименований: <StyledSpan>{products.length}</StyledSpan>
            </Typography>
          </DetailsWrapper>
          <StatusComponent status={status} />
        </Wrapper>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
          sx={{
            width: 'fit-content',
          }}
        >
          <>
            <Typography
              variant="h5"
              sx={{ padding: '0 4px 0 10px', color: 'primary.main' }}
            >
              Показать все товары
            </Typography>
            <RotatingIcon expand={expanded} fontSize="large" />
          </>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ProductsWrapper>
            {products.map(product => (
              <AdsCard
                key={product.id}
                name={product.name}
                image={product.imageUrl}
                price={product.price}
                views={product.views}
                likes={product.likes}
                navLink={`/ads/${product.id}`}
                quantity={product.count}
                productId={product.id}
              />
            ))}
          </ProductsWrapper>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default OrderCard;
