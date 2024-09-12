/* eslint-disable react-hooks/exhaustive-deps */
import { SelectChangeEvent } from '@mui/material';
import { useGetAdvertisementsQuery } from '../../store/queries/advertisementsApi';
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

const useAdsList = () => {
  const [filters, setFilters] = useState({
    search: '',
    sortBy: 'price' as 'price' | 'likes' | 'views',
    sortOrder: 'desc' as 'asc' | 'desc',
    page: 1,
    perPage: 10,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const queryParams = {
    name: filters.search,
    _sort: filters.sortBy,
    _order: filters.sortOrder,
    _page: filters.page,
    _per_page: filters.perPage,
  };

  const {
    data,
    isLoading: isLoadingAds,
    error: adsError,
    refetch,
  } = useGetAdvertisementsQuery(queryParams);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: value,
    }));
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setFilters(prevFilters => ({
        ...prevFilters,
        search: value,
        page: 1,
      }));
    }, 500),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      perPage: Number(event.target.value),
    }));
  };

  const handleSortChange = (
    field: 'price' | 'likes' | 'views',
    order: 'asc' | 'desc'
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sortBy: field,
      sortOrder: order,
    }));
    refetch();
  };

  return {
    open,
    handleOpen,
    handleClose,
    data,
    isLoadingAds,
    adsError,
    filters,
    handlePageChange,
    handleSearchChange,
    handleFilterChange,
    handleSortChange,
  };
};

export default useAdsList;
