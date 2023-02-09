import React from 'react';
import styles from './PortfolioPage.module.scss';
import Gallery from '../../components/Gallery';

const PortfolioPage = () => {
  const gallery = [
    {
      id: 1,
      name: '',
      file: 'https://i.pinimg.com/originals/f5/1a/a0/f51aa0ac79ae5e6f27f6242741cfe464.jpg',
      preview:
        'https://i.pinimg.com/originals/f5/1a/a0/f51aa0ac79ae5e6f27f6242741cfe464.jpg',
    },
    {
      id: 2,
      name: '',
      file: 'https://i.pinimg.com/736x/72/6a/28/726a287132b1b5e2311cac3df1ab798d--rinko-kawauchi-paraty.jpg',
      preview:
        'https://i.pinimg.com/736x/72/6a/28/726a287132b1b5e2311cac3df1ab798d--rinko-kawauchi-paraty.jpg',
    },
    {
      id: 3,
      name: '',
      file: 'https://i.pinimg.com/736x/8b/8c/26/8b8c26c51168de1955ac34fbd85e3a3b.jpg',
      preview:
        'https://i.pinimg.com/736x/8b/8c/26/8b8c26c51168de1955ac34fbd85e3a3b.jpg',
    },
    {
      id: 4,
      name: '',
      file: 'http://danilov.icu/highlights/portrait/polina_11.jpg',
      preview: 'http://danilov.icu/highlights/portrait/polina_11.jpg',
    },
    {
      id: 5,
      name: '',
      file: 'https://i.pinimg.com/originals/af/66/5a/af665a42a1a83b13856693a4016e52b1.jpg',
      preview:
        'https://i.pinimg.com/originals/af/66/5a/af665a42a1a83b13856693a4016e52b1.jpg',
    },
    {
      id: 6,
      name: '',
      file: 'https://pp.userapi.com/c628216/v628216541/3897b/6wxkTNQyDOM.jpg',
      preview:
        'https://pp.userapi.com/c628216/v628216541/3897b/6wxkTNQyDOM.jpg',
    },
    {
      id: 7,
      name: '',
      file: 'https://i.pinimg.com/736x/93/49/cc/9349cc3b99cddf307474cf70b8afe24d.jpg',
      preview:
        'https://i.pinimg.com/736x/93/49/cc/9349cc3b99cddf307474cf70b8afe24d.jpg',
    },
    {
      id: 8,
      name: '',
      file: 'https://i.pinimg.com/originals/21/35/ef/2135ef61f7e7c1e6c7da5b6d3ec103f3.jpg',
      preview:
        'https://i.pinimg.com/originals/21/35/ef/2135ef61f7e7c1e6c7da5b6d3ec103f3.jpg',
    },
  ];

  return (
    <section className={styles.portfolio}>
      <h2>Портфолио</h2>
      <div className="container">
        <Gallery photosToRender={gallery} />
      </div>
    </section>
  );
};

export default PortfolioPage;
