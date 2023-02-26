import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const SendEmail = async (formData) => {
  try {
    await axiosInstance.post(`/send`, formData);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default SendEmail;
