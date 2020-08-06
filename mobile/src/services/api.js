import axios from 'axios';

const api = axios.create({
  baseURL: 'https://afternoon-dawn-62971.herokuapp.com/'
});

export default api;