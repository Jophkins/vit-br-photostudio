import React from 'react';

import styles from './Gallery.module.scss';

const Gallery = ({ photosToRender }) => {
  const [modal, setModal] = React.useState(false);
  const [tempImgSrc, setTempImgSrc] = React.useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div
        onClick={() => {
          setModal(false);
          setTempImgSrc('');
        }}
        className={
          modal ? `${styles.modalPic} ${styles.open}` : `${styles.modalPic}`
        }>
        <img src={tempImgSrc} alt="" />
        <svg
          onClick={() => {
            setModal(false);
            setTempImgSrc('');
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className={styles.gallery}>
        {photosToRender.map((item) => {
          return (
            <div
              className={styles.pics}
              key={item.resource_id}
              onClick={() => getImg(item.file)}>
              <img src={item.preview} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
