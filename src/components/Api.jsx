import axios from 'axios';

const baseURL = 'https://nc-news-portfolio-site.onrender.com/api';

const api = axios.create({
  baseURL,
});






export default api;