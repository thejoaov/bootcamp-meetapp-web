import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === 'development'
      ? 'http://localhost:3333'
      : process.env.REACT_APP_API,
});

export default api;
