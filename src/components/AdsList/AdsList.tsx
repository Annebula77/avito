import { Box, Modal, Pagination, Typography } from '@mui/material';
import AdsCard from '../AdsCard/AdsCard';
import { StyledSection } from '../../styling/stylesToReuse';
import ErrorPage from '../../routes/errorPage';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import ActionPanel from '../ActionPanel/ActionPanel';
import AdvertForm from '../AdvertForm/AdvertForm';
import { AdvertisementModel } from '../../models/advertismentSchema';
import useAdsList from './useAdsList';

const ListWrapper = styled.ul`
  margin: 0;
  padding: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
`;

const LisItemStyles = styled.li`
  margin: 50;
  padding: 0;
  display: flex;
  list-style: none;
`;

const AdsList = () => {
  const {
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
  } = useAdsList();
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
              productId={advertisement.id}
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
