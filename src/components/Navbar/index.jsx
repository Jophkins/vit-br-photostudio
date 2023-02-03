import React from 'react';

const Navbar = () => {
  const scrollToElement = (element) => {
    const section = document.querySelector(`.${element}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          LOGOTYPE
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                onClick={() => scrollToElement('portfolio')}
                className="nav-link"
                aria-current="page">
                Портфолио
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => scrollToElement('contacts')}
                className="nav-link">
                Контакты
              </span>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" placeholder="Введите код" />
            <button className="btn btn-outline-success" type="submit">
              Получить фото
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
