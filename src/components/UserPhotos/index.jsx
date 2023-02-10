import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styles from './UserPhotos.module.scss';
import axios from 'axios';

const UserPhotos = ({ input, photos, isLoading, setIsLoading }) => {
  const downloadPhoto = () => {
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources/download', {
        params: {
          public_key: process.env.REACT_APP_PHOTOS_PUBLIC_KEY,
          path: `/${input}`,
        },
      })
      .then((response) => {
        window.location.href = response.data.href;
      });
  };

  return isLoading ? (
    <div className={`${styles.spinner} col-12`}>
      <h4 className="text-white my-4">Поиск фото</h4>
      <PropagateLoader color="#198754" />
    </div>
  ) : (
    <div className="userPhotos">
      {/*<div className="col-12">*/}
      {/*  <button*/}
      {/*    className="btn btn-success"*/}
      {/*    onClick={() =>*/}
      {/*      console.log(*/}
      {/*        photos.map((item) => {*/}
      {/*          return {*/}
      {/*            id: item.resource_id,*/}
      {/*            name: item.name,*/}
      {/*            file: item.file,*/}
      {/*            preview: item.preview,*/}
      {/*          };*/}
      {/*        }),*/}
      {/*      )*/}
      {/*    }>*/}
      {/*    Check Photos*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="col-12">
        <h3 className="my-4 text-white">Фотографии найдены</h3>
        <p className="text-white">Предпросмотр (5шт)</p>
        {photos.map((item) => {
          return (
            <img
              className={`${styles.userPhotos} img-fluid`}
              key={item.resource_id}
              src={item.preview}
              alt=""
            />
          );
        })}
      </div>
      <div className="col-8 offset-md-2 mt-4">
        <button onClick={downloadPhoto} className="btn btn-primary">
          Скачать все фото
        </button>
      </div>
    </div>
  );
};

export default UserPhotos;
