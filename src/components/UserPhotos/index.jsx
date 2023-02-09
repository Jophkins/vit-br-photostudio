import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styles from './UserPhotos.module.scss';

const UserPhotos = ({ photos, isLoading, setIsLoading }) => {
  return isLoading ? (
    <div className={`${styles.spinner} col-12`}>
      <PropagateLoader color="#198754" />
    </div>
  ) : (
    <div className="userPhotos">
      <div className="col-12">
        <h3>PHOTOS</h3>
        <button
          className="btn btn-success"
          onClick={() =>
            console.log(
              photos.map((item) => {
                return {
                  id: item.resource_id,
                  name: item.name,
                  file: item.file,
                  preview: item.preview,
                };
              }),
            )
          }>
          Check Photos
        </button>
      </div>
      <div className="col-12">
        {photos.map((item) => {
          return <img key={item.resource_id} src={item.preview} alt="" />;
        })}
      </div>
    </div>
  );
};

export default UserPhotos;
