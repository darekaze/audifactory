import axios from 'axios';
import store from '../stores/_store';

export default () => axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
});
