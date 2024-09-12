import { Pagination, Typography } from '@mui/material';
import { StyledSection } from '../../styling/stylesToReuse';
import {
  SearchParams,
  useGetOrdersQuery,
  usePatchOrderMutation,
} from '../../store/queries/ordersApi';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorPage from '../../routes/errorPage';
import OrderCard from '../OrderCard/OrderCard';
import OrderActionPanel from '../OrderActionPanel/OrderActionPanel';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';

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
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
    statuses: [-1],
    sortBy: 'total',
    sortOrder: 'desc' as 'asc' | 'desc',
  });

  const queryParams: SearchParams = {
    _page: filters.page,
    _per_page: filters.perPage,
    _sort: filters.sortBy,
    _order: filters.sortOrder,
    status: filters.statuses.includes(-1) ? [0, 1, 2, 3, 4] : filters.statuses,
  };
  const { data, isLoading, error, refetch } = useGetOrdersQuery(queryParams);
  const [patchOrder] = usePatchOrderMutation();

  const handleFinishOrder = async (id: string) => {
    const currentTime = new Date().toISOString();
    try {
      await patchOrder({ id, finishedAt: currentTime });
      refetch();
    } catch (error) {
      console.error('Failed to finish the order:', error);
    }
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: value,
    }));
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedStatus = Number(event.target.value);
    setFilters(prevFilters => ({
      ...prevFilters,
      statuses: selectedStatus === -1 ? [-1] : [selectedStatus],
      page: 1,
    }));
  };

  const handleSortChange = (field: 'total', order: 'asc' | 'desc') => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sortBy: field,
      sortOrder: order,
      page: 1,
    }));
  };

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
      {data?.data.map(order => (
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
