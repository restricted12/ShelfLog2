import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://book-4-m26v.onrender.com', // backend server
});

export default instance;
