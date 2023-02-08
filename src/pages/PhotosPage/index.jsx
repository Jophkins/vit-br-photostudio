import React from 'react';

import styles from './PhotosPage.module.scss';

const PhotosPage = () => {
  const [inputValue, setInputValue] = React.useState('');

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <section className={styles.photosPage}>
      <div className="container">
        <div className="wrapper">
          <h2>
            Для получения фото введите вашу фамилию и нажмите кнопку загрузить
          </h2>
          <div className="row justify-content-center">
            <div className="col-6 mt-4">
              <form className="d-flex" role="search" onSubmit={submitHandler}>
                <input
                  onChange={inputHandler}
                  value={inputValue}
                  className="form-control me-2"
                  type="search"
                  placeholder="Фамилия"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Загрузить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosPage;
