import React from 'react';

const MyComponent = () => {
  return (
    <footer className="contacts">
      <div className="container">
        <div className="wrapper">
          <h2 className="title text-center m-5">Контакты</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul className="contacts-list">
                <li>TELEGRAM</li>
                <li>INSTAGRAM</li>
                <li>VK</li>
                <li>GOOGLE</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <iframe
                title="yaMap"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A39520befb4e939904b82acc27129ead06fa18cb118b6e514da1f8ce75736c2dd&amp;source=constructor"
                width="90%"
                height="400"></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyComponent;
