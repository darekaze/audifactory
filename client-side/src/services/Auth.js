import Api from './_api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  forgotpassword(credentials){
    return Api().post('forgotpassword',credentials);
  },
};
