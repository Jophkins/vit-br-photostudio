import React from 'react';
import axios from 'axios';
import UserGallery from '../UserGallery';

const UserPhotos = ({ input, photos }) => {
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

  return photos.length !== 0 ? (
    <div className="userPhotos mt-4">
      <div className="col-12 my-2">
        <h4 className="my-4 text-white text-bg-success p-2">Фотографии найдены</h4>
      </div>
      <div className="col-12 col-md-8 offset-md-2 my-4">
        <button onClick={downloadPhoto} className="btn btn-outline-info p-4">
          Скачать все фото
        </button>
      </div>
      <UserGallery photos={photos} />
    </div>
  ) : null;
};

export default UserPhotos;
