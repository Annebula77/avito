import { Typography } from '@mui/material';
import { StyledSection } from '../../styling/stylesToReuse';
// import OrderCard from '../OrderCard/OrderCard';
import AdvertForm from '../AdvertForm/AdvertForm';

const OrderList = () => {
  return (
    <StyledSection>
      <Typography variant="h1">OrderList</Typography>
      {/* <OrderCard
        navLink="#"
        orderNumber={123456}
        status={2}
        createdAt="2022-06-01"
        finishedAt="2022-06-02"
        totalAmount={1000}
        delivery="самовывоз"
        products={[]}
      /> */}
      <AdvertForm />
    </StyledSection>
  );
};

export default OrderList;
