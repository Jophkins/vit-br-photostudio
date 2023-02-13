import React from 'react';
import styles from './PortfolioPage.module.scss';
import Gallery from '../../components/Gallery';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const PortfolioPage = () => {
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
        params: {
          public_key: process.env.REACT_APP_PORTFOLIO_PUBLIC_KEY,
          preview_size: 'L',
        },
      })
      .then((response) => {
        setPhotos(response.data._embedded.items);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={styles.portfolio}>
      <h2>Портфолио</h2>
      <div className="container">
        {isLoading ? (
          <ClipLoader color="#198754" />
        ) : (
          <Gallery photosToRender={photos} />
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
