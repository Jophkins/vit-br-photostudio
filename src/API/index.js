import axios from 'axios';

const SendEmail = async ({
  fullName,
  date,
  city,
  birth,
  tournament,
  category,
  email,
  phone,
  comment,
  setSend,
}) => {
  try {
    const datas = { fullName, date, city, birth, tournament, category, email, phone, comment };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default SendEmail;
