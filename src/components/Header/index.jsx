import React from 'react';

import headerImage from '../../assets/img/header-HERO.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="row">
            <div className="col-md-6 col-12">
              <img className="img-fluid" src={headerImage} alt="" />
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <div className={styles.rightSide}>
                <h1 className={styles.title}>Иван Иванов</h1>
                <div className={styles.desc}>спортивный фотограф</div>
                <div className={styles.desc1}>(Россия, Казахстан, Грузия)</div>
                <div className={styles.phone}>
                  <a href="tel:99999999999">+9 (999) 999 99 99</a>
                  <a href="tel:99999999999">+9 (999) 999 99 99</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
