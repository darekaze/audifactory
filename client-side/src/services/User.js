import Api from './_api';

export default {
  /* show() {
    return Api().get('userprofile');
  }, */
  update(profile) {
    return Api().put('userprofile', profile);
  },
};
