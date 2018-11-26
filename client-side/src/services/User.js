import Api from './_api';

export default {
  update(profile) {
    return Api().put('userprofile', profile);
  },
};
