import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img className="mb-2" src={logo} alt="" />
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
              <Link className="nav-link" to="/request">
                Заказ фото
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Портфолио
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success p-3" to="/photos">
                Получить фото
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
