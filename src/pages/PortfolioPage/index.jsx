import React from 'react';
import styles from './PortfolioPage.module.scss';
import Gallery from '../../components/Gallery';
import { MyContext } from '../../App';

const PortfolioPage = () => {
  const yandexDiskData = React.useContext(MyContext);

  return (
    <section className={styles.portfolio}>
      <h2>Портфолио</h2>
      <div className="container">
        <Gallery photosToRender={yandexDiskData.portfolioPhotos} />
      </div>
    </section>
  );
};

export default PortfolioPage;
