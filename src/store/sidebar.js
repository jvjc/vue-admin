export default {
  namespaced: true,
  state: {
    menu: [],
  },
  mutations: {
    setMenu(state, payload) {
      state.menu = payload || [];
    },
  },
  actions: {},
  getters: {
    menu: (state) => state.menu,
  },
  modules: {},
};
