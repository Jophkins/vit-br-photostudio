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
                <h1 className={styles.title}>Виталий Мозговой</h1>
                <div className={styles.desc}>спортивный фотограф</div>
                {/*<div className={styles.desc1}>(Россия, Казахстан, Грузия)</div>*/}
                <div className={styles.phone}>
                  <a href="tel:79258371194">+7 (925) 837 11 94</a>
                  <a
                    style={{ fontSize: '20px', color: '#0DCAF0' }}
                    href="https://wa.me/79258371194"
                    target="_blank"
                    rel="noreferrer">
                    (whatsApp)
                  </a>
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
