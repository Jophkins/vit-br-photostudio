import React from 'react';
import { ClipLoader } from 'react-spinners';

import styles from './UserGallery.module.scss';

const UserGallery = ({ photos }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalLoading, setIsModalLoading] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  const modalRef = React.useRef(null);

  let touchStartX = 0;
  let touchEndX = 0;

  const openModal = (image) => {
    setModal(true);
    setSelectedImage(image);
    setIsModalLoading(true);
  };

  const previousImage = () => {
    setIsModalLoading(true);
    const currentIndex = photos.indexOf(selectedImage);
    const previousIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedImage(photos[previousIndex]);
  };

  const nextImage = () => {
    setIsModalLoading(true);
    const currentIndex = photos.indexOf(selectedImage);
    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(photos[nextIndex]);
  };

  const checkDirection = () => {
    touchEndX < touchStartX ? nextImage() : previousImage();
  };

  const touchStart = (event) => {
    touchStartX = event.changedTouches[0].screenX;
  };

  const touchEnd = (event) => {
    touchEndX = event.changedTouches[0].screenX;
    checkDirection();
  };

  const closeModal = (event) => {
    if (event.target.className === `${styles.modalPic} ${styles.open}`) {
      setModal(false);
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div
        className={modal ? `${styles.modalPic} ${styles.open}` : styles.modalPic}
        onClick={closeModal}>
        {isModalLoading && (
          <div className={styles.loader}>
            <ClipLoader color="#198754" />
          </div>
        )}
        {selectedImage && (
          <div>
            <img
              ref={modalRef}
              onTouchStart={touchStart}
              onTouchEnd={touchEnd}
              className="img-fluid"
              src={selectedImage.file}
              style={{ display: isModalLoading ? 'none' : 'block' }}
              onLoad={() => setIsModalLoading(false)}
              alt=""
            />
            <a
              className={`${styles.downloadLink} btn btn-outline-info`}
              href={selectedImage.file}
              style={{ display: isModalLoading ? 'none' : 'block' }}>
              Скачать оригинал
            </a>
            <svg
              onClick={previousImage}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={`bi bi-chevron-left ${styles.leftSvg}`}
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <svg
              onClick={nextImage}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={`bi bi-chevron-right ${styles.rightSvg}`}
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        )}
        <svg
          onClick={() => {
            setModal(false);
            setSelectedImage(null);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-x-lg ${styles.xSvg}`}
          viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className="row">
        {photos.map((item) => {
          return (
            <div className="col-md-2 col-6 my-2" key={item.resource_id}>
              {isLoading && <ClipLoader color="#198754" />}
              <img
                className="img-thumbnail p-1"
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={() => setIsLoading(false)}
                onClick={() => openModal(item)}
                src={item.preview}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default UserGallery;
