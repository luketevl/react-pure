import axios from 'axios';
import config from './api/config';

const instance = axios.create({
  baseURL: config.URL_BD
});

export default instance;