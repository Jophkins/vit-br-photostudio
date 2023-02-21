import React from 'react';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h3>
              Здравствуйте, я - профессиональный спортивный фотограф, специализирующийся на съемке
              гимнастики. <br /> Меня зовут Виталий и я уже более 5 лет занимаюсь этой увлекательной
              профессией.
            </h3>
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <p className="mt-5">
              Если у вас есть какие-либо вопросы, пожелания или предложения, не стесняйтесь
              связаться со мной. Я всегда готов к общению и с радостью отвечу на все ваши запросы.
            </p>
            <p>Вы можете связаться со мной по следующим контактным данным:</p>
            <p>
              Телефон: <a href="tel:79258371194">+7 (925) 837 11 94</a> (
              <a href="https://wa.me/79258371194" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              )
            </p>
            <p>
              Instagram:{' '}
              <a href="https://www.instagram.com/mvg_ph" target="_blank" rel="noreferrer">
                @mvg_ph
              </a>
            </p>
            <p>
              Я также предлагаю вам следить за моими последними работами и новостями на моей
              странице в{' '}
              <a href="https://www.instagram.com/mvg_ph" target="_blank" rel="noreferrer">
                Instagram
              </a>
              . Там я публикую свои лучшие работы, а также даю советы по съемке спортивной
              гимнастики.
            </p>
            <p>
              Если вы хотите заказать фотосессию или у вас есть другие вопросы, связанные с моей
              работой, пожалуйста, не стесняйтесь обращаться ко мне. Я с радостью отвечу на все ваши
              вопросы и помогу вам сделать лучший выбор.
            </p>
            <h4 className="my-5">Спасибо за ваш интерес к моей работе!</h4>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default ContactsPage;
