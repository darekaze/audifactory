import Api from './_api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
};
