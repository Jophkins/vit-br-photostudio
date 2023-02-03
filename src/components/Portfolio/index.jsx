import React from 'react';
import Gallery from '../Gallery';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="wrapper">
          <h2 className="title text-center m-5">Портфолио</h2>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
