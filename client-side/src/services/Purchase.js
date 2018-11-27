import Api from './_api';

export default {
  purchase(items) {
    return Api().post('purchase', { items });
  },

};
