import React from 'react';
import axios from 'axios';
import * as xlsx from 'xlsx';

import styles from './EventsPage.module.scss';
import { ClipLoader } from 'react-spinners';

const EventsPage = () => {
  const [data, setData] = React.useState([]);

  // const fetchData = async (link) => {
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       url: link,
  //       responseType: 'blob',
  //     });
  //
  //     const data = await parseExcelFile(response.data);
  //     setData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchData = React.useMemo(() => {
    return async (link) => {
      try {
        const response = await axios({
          method: 'get',
          url: link,
          responseType: 'blob',
        });

        const data = await parseExcelFile(response.data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  const parseExcelFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryData = event.target.result;
        const workbook = xlsx.read(binaryData, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
        resolve(data);
      };
      reader.readAsBinaryString(file);
    });
  };

  React.useEffect(() => {
    axios
      .get('https://cloud-api.yandex.net/v1/disk/public/resources', {
        params: {
          public_key: 'https://disk.yandex.ru/d/AoLoQTg0p0xvMA',
          path: '/Events.xlsx',
        },
      })
      .then((res) => {
        fetchData(res.data.file);
      });
  });

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
              {!data.length > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}>
                  <ClipLoader color="#FFFFFF" />
                </div>
              )}
              <tbody>
                {data
                  .filter((i) => i.length !== 0)
                  .map((row, index) => (
                    <tr key={index}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
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
