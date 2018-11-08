import Api from './_api';

export default {
  index(params) {
    return Api().get('loves', { params });
  },

  post(params) {
    return Api().post('loves', { params });
  },

  delete(loveId) {
    return Api().delete(`loves/${loveId}`);
  },
};
