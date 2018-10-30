import Api from './_api';

export default {
  index() {
    return Api().get('albums');
  },
  post(album) {
    return Api().post('albums', album);
  },
};
