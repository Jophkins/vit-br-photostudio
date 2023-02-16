import React from 'react';

const RequestPhoto = () => {
  return (
    <div>
      <h2>ЗАКАЗ ФОТО</h2>
      <div className="container">
        <div className="row">
          <form className="d-flex flex-column">
            <input type="text" placeholder="Проверка" />
            <input type="text" placeholder="Проверка" />
            <input type="text" placeholder="Проверка" />
            <input type="text" placeholder="Проверка" />
            <button className="btn btn-primary">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestPhoto;
