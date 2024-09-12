/* eslint-disable prettier/prettier */
import {
  SearchParams,
  useGetOrdersQuery,
  usePatchOrderMutation,
} from '../../store/queries/ordersApi';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



const useOrderList = () => {
  const location = useLocation();
  const productId = location.state?.productId;

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

  const filteredOrders = productId
    ? data?.data.filter(order =>

      order.items.some(item => item.id === productId)
    )
    : data?.data;
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

  return {
    data,
    filters,
    isLoading,
    error,
    handleFinishOrder,
    filteredOrders,
    handlePageChange,
    handleStatusChange,
    handleSortChange
  }
};

export default useOrderList;
