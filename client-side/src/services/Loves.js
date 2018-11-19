import Api from './_api';

export default {
  index(params) {
    return Api().get('loves', { params });
  },

  post(love) {
    return Api().post('loves', love);
  },

  delete(loveId) {
    return Api().delete(`loves/${loveId}`);
  },
};
