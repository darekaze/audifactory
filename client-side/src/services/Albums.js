import Api from './_api';

export default {
  index(search, limit = 10) {
    return Api().get('albums', { params: { search, limit } });
  },
  show(albumId) {
    return Api().get(`albums/${albumId}`);
  },
  post(album) {
    return Api().post('albums', album);
  },
  put(album) {
    return Api().put(`albums/${album.id}`, album);
  },
};
