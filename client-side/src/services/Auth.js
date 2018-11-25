import Api from './_api';

export default {
  register(credentials, recaptcha) {
    return Api().post('register', { credentials, recaptcha });
  },
  login(credentials, recaptcha) {
    return Api().post('login', { credentials, recaptcha });
  },
  forgotpassword(credentials) {
    return Api().post('forgotpassword', credentials);
  },
};
