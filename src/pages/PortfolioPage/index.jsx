import React from 'react';
import styles from './PortfolioPage.module.scss';
import Gallery from '../../components/Gallery';

const PortfolioPage = () => {
  return (
    <section className={styles.portfolio}>
      <h2>Портфолио</h2>
      <div className="container">
        <Gallery />
      </div>
    </section>
  );
};

export default PortfolioPage;
