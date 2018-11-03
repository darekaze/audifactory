import Api from './_api';

export default {
  index() {
    return Api().get('albums');
  },
  show(albumId) {
    return Api().get(`albums/${albumId}`);
  },
  post(album) {
    return Api().post('albums', album);
  },
};
