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
};

const actions = {
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  setUser({ commit }, user) {
    commit('setUser', user);
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
