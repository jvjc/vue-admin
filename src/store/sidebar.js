export default {
  namespaced: true,
  state: {
    isMounted: false,
    collapsed: false,
    menu: [],
  },
  mutations: {
    setMounted(state, payload) {
      state.isMounted = payload || false;
    },
    setMenu(state, payload) {
      state.menu = payload || [];
    },
    toggleCollapse(state, payload) {
      state.collapsed = payload === undefined ? !state.collapsed : payload;
    },
  },
  actions: {},
  getters: {
    menu: (state) => state.menu,
  },
  modules: {},
};
