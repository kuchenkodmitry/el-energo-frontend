import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE
  ? `${process.env.REACT_APP_API_BASE}/api`
  : '/api';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
