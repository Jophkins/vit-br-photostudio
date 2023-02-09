import React from 'react';

import styles from './PhotosPage.module.scss';
import axios from 'axios';
import UserPhotos from '../../components/UserPhotos';

const PhotosPage = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getPhotos();
    setInputValue('');
  };

  const getPhotos = () => {
    setIsLoading(true);
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
        params: {
          public_key: 'https://disk.yandex.com/d/fbULyPn7BI2NBw',
          path: `/${inputValue}`,
          limit: 5,
        },
      })
      .then((response) => {
        setPhotos(response.data._embedded.items);
        console.log(response.data._embedded.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
        setIsLoading(false);
      });
  };

  return (
    <section className={styles.photosPage}>
      <div className="container">
        <div className="wrapper">
          <h2>
            Для получения фото введите вашу фамилию и нажмите кнопку загрузить
          </h2>
          <div className="row justify-content-center">
            <div className="col-8 mt-4">
              <form
                className="d-flex flex-lg-row flex-column"
                role="search"
                onSubmit={submitHandler}>
                <input
                  onChange={inputHandler}
                  value={inputValue}
                  className="form-control me-2 mb-2"
                  type="search"
                  placeholder="Фамилия"
                  aria-label="Search"
                  required
                  disabled={isLoading}
                />
                <button
                  className="btn btn-outline-success align-self-baseline"
                  type="submit"
                  disabled={isLoading}>
                  Загрузить
                </button>
              </form>
            </div>
            <UserPhotos
              photos={photos}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosPage;
