import React from 'react';

import styles from './EventsPage.module.scss';

const EventsPage = () => {
  const tableData = [
    {
      date: '10.04.2023',
      event: 'Чемпионат мира по гимнастике',
      location: 'Лондон, Великобритания',
    },
    { date: '01.06.2023', event: 'Кубок Европы по гимнастике', location: 'Париж, Франция' },
    { date: '15.07.2023', event: 'Открытый турнир по гимнастике', location: 'Москва, Россия' },
  ];

  return (
    <section className={styles.events}>
      <h2>Календарь предстоящих событий</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
            <table>
              <thead>
                <tr className={styles.tableFirstRow}>
                  <th>Дата</th>
                  <th>Событие</th>
                  <th>Место проведения</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.event}</td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
