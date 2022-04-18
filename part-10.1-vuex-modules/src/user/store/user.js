export default {
  getters: {
    isLoggedIn(state, getters, rootState) {
      return rootState.isLoggedIn;
    },
  },
};
