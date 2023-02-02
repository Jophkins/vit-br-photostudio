import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="header container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              LOGO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Портфолио
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Получить фото
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

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

      <div className="portfolio">
        <div className="container">
          <div className="wrapper">
            <h2 className="title text-center m-5">PORTFOLIO</h2>
            <Gallery />
          </div>
        </div>
      </div>

      <div className="contacts">
        <div className="container">
          <div className="wrapper">
            <h2 className="title text-center m-5">CONTACTS</h2>
            <div className="row">
              <div className="col-12 col-md-6">
                <ul className="contacts-list">
                  <li>TELEGRAM</li>
                  <li>INSTAGRAM</li>
                  <li>VK</li>
                  <li>GOOGLE</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <iframe
                  title="yaMap"
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A39520befb4e939904b82acc27129ead06fa18cb118b6e514da1f8ce75736c2dd&amp;source=constructor"
                  width="90%"
                  height="400"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
