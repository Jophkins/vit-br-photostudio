import React from 'react';

import styles from './RequestPhoto.module.scss';

const RequestPhoto = () => {
  const [inputState, setInputState] = React.useState({
    name: '',
    date: '',
    city: '',
    birth: '',
    tournament: '',
    category: '',
    email: '',
    phone: '',
    comment: '',
    photo: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const checker = (event) => {
    event.preventDefault();
    console.log(inputState);
    setInputState({
      name: '',
      date: '',
      city: '',
      birth: '',
      tournament: '',
      category: '',
      email: '',
      phone: '',
      comment: '',
      photo: '',
    });
    event.target.reset();
  };

  return (
    <section>
      <div className={styles.requestPhotos}>
        <p>Закажите фотографии своего ребенка с соревнований</p>
        <p>заполните форму ниже, не забудьте прикрепить фотографию купальника</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className={styles.formWrapper}>
              <form onSubmit={checker} className="d-flex flex-column">
                <input
                  value={inputState.name}
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  placeholder="Имя и фамилия *"
                  required
                />
                <input
                  value={inputState.date}
                  onChange={handleInputChange}
                  name="date"
                  type="text"
                  placeholder="Число, время и поток (по протоколам) *"
                  required
                />
                <input
                  value={inputState.city}
                  onChange={handleInputChange}
                  name="city"
                  type="text"
                  placeholder="Город *"
                  required
                />
                <input
                  value={inputState.birth}
                  onChange={handleInputChange}
                  name="birth"
                  type="text"
                  placeholder="Год рождения *"
                  required
                />
                <input
                  value={inputState.tournament}
                  onChange={handleInputChange}
                  name="tournament"
                  type="text"
                  placeholder="Название турнира *"
                  required
                />
                <select
                  value={inputState.category}
                  onChange={handleInputChange}
                  name="category"
                  required>
                  <option value="" disabled>
                    Категория *
                  </option>
                  <option value="БП">БП</option>
                  <option value="Обруч">Обруч</option>
                  <option value="Скакалка">Скакалка</option>
                  <option value="Булавы">Булавы</option>
                  <option value="Мяч">Мяч</option>
                  <option value="Лента">Лента</option>
                  <option value="Награждение">Награждение</option>
                  <option value="ОФП">ОФП</option>
                </select>
                <input
                  value={inputState.email}
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Ваш email *"
                  required
                />
                <input
                  value={inputState.phone}
                  onChange={handleInputChange}
                  name="phone"
                  type="tel"
                  placeholder="Номер телефона для связи *"
                  required
                />
                <input
                  value={inputState.comment}
                  onChange={handleInputChange}
                  name="comment"
                  type="text"
                  placeholder="Комментарий"
                />
                <hr />
                <label className="text-danger" htmlFor="file-input">
                  Обязательно приложите фото купальников
                </label>
                <input
                  value={undefined}
                  onChange={handleInputChange}
                  id="file-input"
                  name="photo"
                  type="file"
                  accept=".png,.jpg"
                  placeholder="hello"
                  required
                />
                <button className="btn btn-outline-success">Заказать</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestPhoto;
