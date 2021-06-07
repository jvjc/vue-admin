export default {
  namespaced: true,
  state: {
    isMounted: false,
  },
  mutations: {
    setMounted(state, payload) {
      state.isMounted = payload || false;
    },
  },
  actions: {},
  getters: {
  },
};
