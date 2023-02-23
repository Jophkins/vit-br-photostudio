import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';
import logo from './assets/img/logo2.svg';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import React from 'react';
import Footer from './components/Footer';
import { BarLoader } from 'react-spinners';

function App() {
  const [isLoad, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: `${isLoad ? 'flex' : 'none'}`,
          flexDirection: 'column',
          backgroundColor: '#15181a',
        }}>
        <img className="img-fluid m-2" src={logo} alt="" />
        <BarLoader color="#FFFFFF" />
      </div>
      <div className={`App ${isLoad ? 'hide' : ''}`}>
        <BrowserRouter>
          <Navbar />

          <AppRouter />

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
