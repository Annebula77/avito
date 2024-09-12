/* eslint-disable prettier/prettier */
import { Pagination, Typography } from '@mui/material';
import { StyledSection } from '../../styling/stylesToReuse';
import Loader from '../Loader/Loader';
import ErrorPage from '../../routes/errorPage';
import OrderCard from '../OrderCard/OrderCard';
import OrderActionPanel from '../OrderActionPanel/OrderActionPanel';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';
import useOrderList from './useOrderList';

const ActionContainer = styled.div`
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  justify-self: flex-end;

  ${media.md`
  position: sticky;
  top: 140px;
  right: 20px;
  z-index: 10;
  `}
`;

const OrderList = () => {
  const {
    data,
    filters,
    isLoading,
    error,
    handleFinishOrder,
    filteredOrders,
    handlePageChange,
    handleStatusChange,
    handleSortChange } = useOrderList();

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledSection>
      <Typography variant="h1">OrderList</Typography>
      <ActionContainer>
        <OrderActionPanel
          onChange={handleStatusChange}
          onSortChange={handleSortChange}
          currentStatus={filters.statuses[0]}
        />
      </ActionContainer>
      {filteredOrders?.map(order => (
        <OrderCard
          key={order.id}
          orderNumber={+order.id}
          status={order.status}
          createdAt={order.createdAt}
          finishedAt={order.finishedAt}
          totalAmount={order.total}
          delivery={order.deliveryWay}
          products={order.items}
          onClick={() => {
            handleFinishOrder(order.id);
          }}
        />
      ))}
      <Pagination
        count={data?.pages}
        page={filters.page}
        onChange={handlePageChange}
        color="primary"
        size="large"
        sx={{ alignSelf: 'center' }}
      />
    </StyledSection>
  );
};

export default OrderList;
