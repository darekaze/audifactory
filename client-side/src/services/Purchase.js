import Api from './_api';

export default {
  index(params) {
    return Api().get('purchase', { params });
  },
  purchase(items) {
    return Api().post('purchase', { items });
  },

};
