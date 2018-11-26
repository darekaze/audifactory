const state = {
  token: null,
  user: {},
  isUserLoggedIn: false,
};

const mutations = {
  setToken(st, token) {
    st.token = token;
    st.isUserLoggedIn = !!token;
  },
  setUser(st, user) {
    st.user = user;
  },
  updateUser(st, user) {
    st.user.name = user.name;
    st.user.address = user.address;
    st.user.phonenumber = user.phonenumber;
  },
};

const actions = {
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  setUser({ commit }, user) {
    commit('setUser', user);
  },
  updateUser({ commit }, user) {
    commit('updateUser', user);
  },
};

const getters = {
  currentUser(st) {
    return st.user;
  },
  isAuthenticated(st) {
    return st.isUserLoggedIn;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
