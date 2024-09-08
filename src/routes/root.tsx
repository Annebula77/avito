import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBoard from '../components/NavBoard/NavBoard';


export default function Root() {


  return (
    <HelmetProvider>
      <Helmet>
        <title>Объявления | MarketMe</title>
        <meta
          name="description"
          content="Доска объявлений для продажи и покупки. Продавайте вместе с нами!"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <>
        <NavBoard />
      </>

    </HelmetProvider>
  );
}