import axios from 'axios';

const SendEmail = async (formData) => {
  try {
    await axios.post(`http://localhost:5000/send`, formData);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default SendEmail;
