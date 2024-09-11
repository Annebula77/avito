import { Box, Modal, Pagination, Typography } from '@mui/material';
import AdsCard from '../AdsCard/AdsCard';
import { StyledSection } from '../../styling/stylesToReuse';
import {
  useGetAdvertisementsCountQuery,
  useGetAdvertisementsQuery,
} from '../../store/queries/advertisementsApi';
import { useState } from 'react';
import ErrorPage from '../../routes/errorPage';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import ActionPanel from '../ActionPanel/ActionPanel';
import AdvertForm from '../AdvertForm/AdvertForm';

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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ price: '', views: '', likes: '' });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    data: advertisements = [],
    isLoading: isLoadingAds,
    error: adsError,
  } = useGetAdvertisementsQuery({
    page,
    per_page: perPage,
    search,
    filter,
  });

  const {
    data: totalCount = 0,
    isLoading: isLoadingCount,
    error: countError,
  } = useGetAdvertisementsCountQuery({});

  const totalPages = Math.ceil(+totalCount! / perPage);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (adsError || countError) {
    return <ErrorPage />;
  }

  if (isLoadingAds || isLoadingCount) {
    return <Loader />;
  }

  return (
    <StyledSection>
      <Typography variant="h1">AdsList</Typography>
      <ActionPanel newAdsClicked={handleOpen} />

      <ListWrapper>
        {advertisements?.map(advertisement => (
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
        count={totalPages}
        page={page}
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
          <AdvertForm />
        </Box>
      </Modal>
    </StyledSection>
  );
};

export default AdsList;
