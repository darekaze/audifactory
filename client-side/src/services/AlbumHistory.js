import Api from './_api';

export default {
  index(params) {
    return Api().get('view-history', { params });
  },

  post(history) {
    return Api().post('view-history', history);
  },
};
