import React from 'react';

import styles from './EventsPage.module.scss';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const yandexDiskData = React.useContext(MyContext);

  return (
    <section className={styles.events}>
      <h2>События</h2>
      <div className="container-fluid">
        <div className="row">
          {yandexDiskData.eventsData.map((item, index) => {
            return (
              <div key={index} className="col-md-2">
                <div className={styles.eventItem}>
                  <Link to="/events/event?id=122">
                    <img
                      className="img-fluid"
                      src="https://img5.goodfon.ru/original/800x480/6/4e/sobaki-dve-para-parochka-duet-priroda-druzia-druzhba-iazyk-l.jpg"
                      alt=""
                    />
                    <p>Lorem ipsum dolor.</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/*<Gallery photosToRender={yandexDiskData.portfolioPhotos} />*/}
      </div>
    </section>
  );
};

export default EventsPage;
