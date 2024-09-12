import {
  Box,
  Modal,
  Pagination,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import AdsCard from '../AdsCard/AdsCard';
import { StyledSection } from '../../styling/stylesToReuse';
import { useGetAdvertisementsQuery } from '../../store/queries/advertisementsApi';
import { useCallback, useState } from 'react';
import ErrorPage from '../../routes/errorPage';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import ActionPanel from '../ActionPanel/ActionPanel';
import AdvertForm from '../AdvertForm/AdvertForm';
import { AdvertisementModel } from '../../models/advertismentSchema';
import debounce from 'lodash.debounce';

const ListWrapper = styled.ul`
  margin: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
`;

const LisItemStyles = styled.li`
  margin: 50;
  padding: 0;
  width: 100%;
  display: flex;
  list-style: none;
`;

const AdsList = () => {
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
    search: '',
    sortBy: 'price' as 'price' | 'likes' | 'views',
    sortOrder: 'desc' as 'asc' | 'desc',
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const queryParams = {
    name: filters.search,
    _page: filters.page,
    _per_page: filters.perPage,
    _sort: filters.sortBy,
    _order: filters.sortOrder,
  };

  const {
    data,
    isLoading: isLoadingAds,
    error: adsError,
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
  };

  if (adsError) {
    return <ErrorPage />;
  }

  if (isLoadingAds) {
    return <Loader />;
  }

  return (
    <StyledSection>
      <Typography variant="h1">AdsList</Typography>
      <ActionPanel
        advertisementCount={filters.perPage}
        handleFilterChange={handleFilterChange}
        newAdsClicked={handleOpen}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
      />

      <ListWrapper>
        {data?.data.map((advertisement: AdvertisementModel) => (
          <LisItemStyles key={advertisement.id}>
            <AdsCard
              name={advertisement.name}
              image={advertisement.imageUrl}
              price={advertisement.price}
              views={advertisement.views}
              likes={advertisement.likes}
              navLink={`/ads/${advertisement.id}`}
            />
          </LisItemStyles>
        ))}
      </ListWrapper>
      <Pagination
        count={data?.pages}
        page={filters.page}
        onChange={handlePageChange}
        color="primary"
        size="large"
        sx={{ alignSelf: 'center' }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-new-order"
        aria-describedby="modal-new-order"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <AdvertForm onSubmit={handleClose} />
        </Box>
      </Modal>
    </StyledSection>
  );
};

export default AdsList;
