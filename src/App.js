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
import axios from 'axios';

export const MyContext = React.createContext();

function App() {
  const [isLoad, setIsLoading] = React.useState(false);
  const [yandexDiskData, setYandexDiskData] = React.useState({
    portfolioPhotos: [],
    eventsData: [],
    eventsPreviews: [],
  });

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .all([
        axios.get('https://cloud-api.yandex.net/v1/disk/public/resources', {
          params: {
            public_key: process.env.REACT_APP_PORTFOLIO_PUBLIC_KEY,
            preview_size: 'L',
          },
        }),
        axios.get('https://cloud-api.yandex.net/v1/disk/public/resources', {
          params: {
            public_key: process.env.REACT_APP_EVENTS_PUBLIC_KEY,
            limit: 50,
          },
        }),
      ])
      .then(
        axios.spread((obj1, obj2) => {
          if (obj1) {
            setYandexDiskData((prevState) => {
              return {
                ...prevState,
                portfolioPhotos: obj1.data._embedded.items,
              };
            });
          }
          if (obj2) {
            setYandexDiskData((prevState) => {
              return {
                ...prevState,
                eventsData: obj2.data._embedded.items,
              };
            });
          }
          obj2.data._embedded.items.forEach((item) => {
            axios
              .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
                params: {
                  public_key: process.env.REACT_APP_EVENTS_PUBLIC_KEY,
                  path: item.path,
                  preview_size: 'L',
                  limit: 1,
                },
              })
              .then((response) => {
                setYandexDiskData((prevState) => {
                  return {
                    ...prevState,
                    eventsPreviews: [
                      ...prevState.eventsPreviews,
                      response.data._embedded.items[0].preview,
                    ],
                  };
                });
              });
          });
        }),
      )
      .finally(() => {
        setIsLoading(false);
      });
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

          <MyContext.Provider value={yandexDiskData}>
            <AppRouter />
          </MyContext.Provider>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
