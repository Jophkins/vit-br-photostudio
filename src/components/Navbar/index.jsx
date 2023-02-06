import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();

  const formNavigate = () => {
    navigate('photos');
  };

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const scrollToElement = (element) => {
    const section = document.querySelector(`.${element}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGOTYPE
        </Link>
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
              <Link className="nav-link" to="/events">
                События
              </Link>
            </li>
            <li className="nav-item">
              <span
                onClick={() => scrollToElement('portfolio')}
                className="nav-link">
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
          <form className="d-flex" onSubmit={formNavigate}>
            <input
              className="form-control me-2"
              onChange={inputHandler}
              value={inputValue}
              placeholder="Введите код"
            />
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
