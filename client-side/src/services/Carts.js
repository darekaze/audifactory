import Api from './_api';

export default {
  index(params) {
    return Api().get('cart', { params });
  },

  post(item) {
    return Api().post('cart', item);
  },

  delete(itemId) {
    return Api().delete(`cart/${itemId}`);
  },
};
