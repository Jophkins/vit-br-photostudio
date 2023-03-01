import React from 'react';
import InputMask from 'react-input-mask';

import styles from './RequestPhoto.module.scss';
import SendEmail from '../../API';

const RequestPhoto = () => {
  const [fullName, setFullName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [city, setCity] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [tournament, setTournament] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [isSend, setIsSend] = React.useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBtnLoading(true);
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('date', date);
    formData.append('city', city);
    formData.append('birth', birth);
    formData.append('tournament', tournament);
    formData.append('category', category);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('file', file);
    SendEmail(formData).then(() => {
      setBtnLoading(false);
      setFullName('');
      setDate('');
      setCity('');
      setBirth('');
      setTournament('');
      setCategory('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSend(true);
    });
  };

  return (
    <section className={styles.requestPhotos}>
      {isSend ? (
        <div className="bg-success p-4">
          Заявка отправлена, я постараюсь связаться с вами, как можно быстрее.
        </div>
      ) : (
        <div>
          <div className={`${styles.title} col-10 offset-1 col-md-6 offset-md-3`}>
            <p>Закажите фотографии своего ребенка с соревнований</p>
            <p>заполните форму ниже, не забудьте прикрепить фотографию купальника</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <div className={styles.formWrapper}>
                  <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="Имя и фамилия *"
                      maxLength={20}
                      required
                    />
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="text"
                      placeholder="Число, время и поток (по протоколам) *"
                      maxLength={50}
                      required
                    />
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      placeholder="Город *"
                      maxLength={20}
                      required
                    />
                    <InputMask
                      value={birth}
                      onChange={(e) => setBirth(e.target.value)}
                      mask="9999"
                      type="text"
                      placeholder="Год рождения *"
                      required
                    />
                    <input
                      value={tournament}
                      onChange={(e) => setTournament(e.target.value)}
                      type="text"
                      placeholder="Название турнира *"
                      maxLength={50}
                      required
                    />
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                      <option value="" disabled>
                        Категория *
                      </option>
                      <option value="ОФП">ОФП</option>
                      <option value="БП">БП</option>
                      <option value="Скакалка">Скакалка</option>
                      <option value="Обруч">Обруч</option>
                      <option value="Мяч">Мяч</option>
                      <option value="Булавы">Булавы</option>
                      <option value="Лента">Лента</option>
                    </select>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Ваш email *"
                      maxLength={30}
                      required
                    />
                    <InputMask
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      mask="+7 (999) 999 99 99"
                      type="tel"
                      placeholder="Номер телефона для связи *"
                      required
                    />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Комментарий"
                      maxLength={200}
                    />
                    <hr />
                    <label className="text-danger" htmlFor="file-input">
                      Обязательно приложите фото купальников
                    </label>
                    <input
                      value={undefined}
                      onChange={handleFileChange}
                      id="file-input"
                      name="photo"
                      type="file"
                      accept="image/*"
                      required
                    />
                    <button disabled={btnLoading && true} className="btn btn-outline-success">
                      {btnLoading ? 'Отправляем...' : 'Заказать'}
                    </button>
                    <p>
                      Нажимая кнопку "заказать" вы соглашаетесь на обработку введенных вами данных
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RequestPhoto;
