import React from 'react';
import InputHints from 'react-input-hints';

import styles from './PhotosPage.module.scss';

import axios from 'axios';
import UserPhotos from '../../components/UserPhotos';
import { PropagateLoader } from 'react-spinners';

const PhotosPage = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [inputToProps, setInputToProps] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorAfterLoad, setErrorAfterLoad] = React.useState('');
  const [photos, setPhotos] = React.useState([]);

  const inputCapitalize = () => {
    return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  };

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getPhotos();
    setInputToProps(inputCapitalize());
    setInputValue('');
  };

  const renderSwitch = (param) => {
    switch (+param) {
      case 404:
        return `Фотографии не найдены или еще не загружены`;
      case 400:
        return 'Некорректные данные';
      case 503:
        return 'Сервис временно недоступен';
      default:
        return 'Непредвиденная ошибка. Повторите запрос позже.';
    }
  };

  const getPhotos = () => {
    setIsLoading(true);
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
        params: {
          public_key: process.env.REACT_APP_PHOTOS_PUBLIC_KEY,
          path: `/${inputCapitalize()}`,
          preview_size: 'M',
          limit: -1,
        },
      })
      .then((response) => {
        setPhotos(response.data._embedded.items);
        setIsLoading(false);
        setErrorAfterLoad('');
      })
      .catch((error) => {
        setPhotos([]);
        setIsLoading(false);
        setErrorAfterLoad(error.response.status);
      });
  };

  return (
    <section className={styles.photosPage}>
      <div className="container">
        <div className="wrapper">
          <h2>Для получения фото введите Вашу фамилию и имя, и нажмите кнопку загрузить</h2>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-8 mt-4">
              <form
                className="d-flex flex-lg-row flex-column"
                role="search"
                onSubmit={submitHandler}>
                <InputHints
                  required
                  className="form-control me-2 mb-2"
                  onChange={inputHandler}
                  value={inputValue}
                  type="search"
                  aria-label="Search"
                  disabled={isLoading}
                  placeholders={['Иванова Юлия', 'Лебедева Анна', 'Антонова Светлана']}
                  maxLength="30"
                />
                <button
                  className="btn btn-outline-success align-self-baseline"
                  type="submit"
                  disabled={isLoading}>
                  Загрузить
                </button>
              </form>
            </div>
            {isLoading ? (
              <div className="col-12 my-5">
                <h4 className="text-white my-4">Поиск фото</h4>
                <PropagateLoader color="#198754" />
              </div>
            ) : errorAfterLoad ? (
              <div className="col-12 text-bg-warning my-5 p-5">{renderSwitch(errorAfterLoad)}</div>
            ) : (
              <UserPhotos
                input={inputToProps}
                photos={photos}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosPage;
