import { Helmet } from 'react-helmet-async';
import NoMatchComponent from '../components/NoMatchComponent/NoMatchComponent';

export default function NoMatchPage() {
  return (
    <>
      <Helmet>
        <title>404 | MarketMe</title>
      </Helmet>
      <NoMatchComponent />
    </>
  );
}
