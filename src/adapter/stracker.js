import axios from 'axios';
import SystemConfig from '../utils/config';

const apiKey = process.env.REACT_APP_API_KEY; // Store your API key in .env file

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: SystemConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = `${SystemConfig.apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;