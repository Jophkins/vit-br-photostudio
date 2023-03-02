import React from 'react';

import styles from './EventsPage.module.scss';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const EventsPage = () => {
  const yandexDiskData = React.useContext(MyContext);
  const [isLoad, setIsLoad] = React.useState(true);

  return (
    <section className={styles.events}>
      <h2>События</h2>
      <div className="container">
        <div className="row">
          {yandexDiskData.eventsData.map((item, index) => {
            return (
              <div key={index} className="col-md-3">
                <div className={styles.eventItem}>
                  <Link to={`/events/event?id=${index}`}>
                    {isLoad && <ClipLoader color="#FFFFFF" />}
                    <img
                      style={{ display: isLoad ? 'none' : 'block' }}
                      className="img-fluid"
                      src={yandexDiskData.eventsPreviews[index]}
                      onLoad={() => setIsLoad(false)}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
