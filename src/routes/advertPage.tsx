import { Helmet } from 'react-helmet-async';
import AdvertComponent from '../components/AdvertComponent/AdvertComponent';
import { useParams } from 'react-router-dom';
import { useGetAdvertisementByIdQuery } from '../store/queries/advertisementsApi';
import Loader from '../components/Loader/Loader';
import ErrorPage from './errorPage';

export default function AdvertPage() {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, isLoading } = useGetAdvertisementByIdQuery(
    productId || ''
  );

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{data?.name} | MarketMe</title>
      </Helmet>
      <AdvertComponent advert={data!} />
    </>
  );
}
