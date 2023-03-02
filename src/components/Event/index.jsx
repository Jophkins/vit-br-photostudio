import React from 'react';
import styles from '../../pages/PortfolioPage/PortfolioPage.module.scss';
import Gallery from '../Gallery';
import { MyContext } from '../../App';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Event = () => {
  const yandexDiskData = React.useContext(MyContext);
  const [eventPhotos, setEventPhotos] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  React.useEffect(() => {
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
        params: {
          public_key: process.env.REACT_APP_EVENTS_PUBLIC_KEY,
          path: yandexDiskData.eventsData[id].path,
          preview_size: 'L',
          limit: -1,
        },
      })
      .then((response) => {
        setEventPhotos(response.data._embedded.items);
        setIsLoad(false);
      });
  }, [id, yandexDiskData.eventsData]);

  return (
    <section className={styles.portfolio}>
      <div className="container-fluid">
        <h3 className="my-4">{yandexDiskData.eventsData[id].name}</h3>
        {isLoad && <ClipLoader color="#FFFFFF" />}
        <Gallery photosToRender={eventPhotos} />
      </div>
    </section>
  );
};

export default Event;
