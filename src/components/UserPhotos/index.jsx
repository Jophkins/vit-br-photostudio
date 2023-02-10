import React from 'react';
import axios from 'axios';

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
    <div className="userPhotos">
      <div className="col-12">
        <button
          className="btn btn-success"
          onClick={() => console.log(process.env.REACT_APP_PHOTOS_PUBLIC_KEY)}>
          Check Photos
        </button>
      </div>
      <div className="col-12">
        <h3 className="my-4 text-white">Фотографии найдены</h3>
        <p className="text-white">Предпросмотр (5шт)</p>
        {photos.map((item) => {
          return (
            <img
              className="img-fluid p-1"
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
  ) : (
    <div className="col-12">
      <button
        className="btn btn-success"
        onClick={() => console.log(process.env.REACT_APP_PHOTOS_PUBLIC_KEY)}>
        Check Photos
      </button>
    </div>
  );
};

export default UserPhotos;
