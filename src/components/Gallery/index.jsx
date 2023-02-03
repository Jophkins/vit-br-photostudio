import React from 'react';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const [modal, setModal] = React.useState(false);
  const [tempImgSrc, setTempImgSrc] = React.useState('');

  const gallery = [
    {
      id: 1,
      imgUrl:
        'https://i.pinimg.com/originals/f5/1a/a0/f51aa0ac79ae5e6f27f6242741cfe464.jpg',
    },
    {
      id: 2,
      imgUrl:
        'https://i.pinimg.com/736x/72/6a/28/726a287132b1b5e2311cac3df1ab798d--rinko-kawauchi-paraty.jpg',
    },
    {
      id: 3,
      imgUrl:
        'https://i.pinimg.com/736x/8b/8c/26/8b8c26c51168de1955ac34fbd85e3a3b.jpg',
    },
    {
      id: 4,
      imgUrl: 'http://danilov.icu/highlights/portrait/polina_11.jpg',
    },
    {
      id: 5,
      imgUrl:
        'https://i.pinimg.com/originals/af/66/5a/af665a42a1a83b13856693a4016e52b1.jpg',
    },
    {
      id: 6,
      imgUrl: 'https://pp.userapi.com/c628216/v628216541/3897b/6wxkTNQyDOM.jpg',
    },
    {
      id: 7,
      imgUrl:
        'https://i.pinimg.com/736x/93/49/cc/9349cc3b99cddf307474cf70b8afe24d.jpg',
    },
    {
      id: 8,
      imgUrl:
        'https://i.pinimg.com/originals/21/35/ef/2135ef61f7e7c1e6c7da5b6d3ec103f3.jpg',
    },
  ];

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div
        className={
          modal ? `${styles.modalPic} ${styles.open}` : `${styles.modalPic}`
        }>
        <img src={tempImgSrc} alt="" />
        <svg
          onClick={() => setModal(false)}
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
        {gallery.map((item, index) => {
          return (
            <div
              className={styles.pics}
              key={index}
              onClick={() => getImg(item.imgUrl)}>
              <img src={item.imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
