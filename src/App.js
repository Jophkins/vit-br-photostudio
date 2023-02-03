import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';
import Gallery from './components/Gallery';
import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://vestivrn.ru/i/bf/bf0c99699f19f3b5ac5eb931d2469ea0.jpg"
                      className="img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.reliablecounter.com/blog/wp-content/uploads/2018/12/black-and-white-photography.jpg"
                      className="img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
