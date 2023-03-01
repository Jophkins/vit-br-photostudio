import React from 'react';
import styles from '../../pages/PortfolioPage/PortfolioPage.module.scss';
import Gallery from '../Gallery';
import { MyContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Event = () => {
  const yandexDiskData = React.useContext(MyContext);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  return (
    <section className={styles.portfolio}>
      <div className="container-fluid">
        <button onClick={() => console.log(id)}>CHECK2</button>
        <button onClick={() => console.log(yandexDiskData.eventsData)}>CHECK3</button>
        <Gallery photosToRender={yandexDiskData.portfolioPhotos} />
      </div>
    </section>
  );
};

export default Event;
