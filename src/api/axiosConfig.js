import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Your backend API base URL
  timeout: 1000,
});

export default axiosInstance;
