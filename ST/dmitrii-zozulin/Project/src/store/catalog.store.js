const catalogStore = {
  namespaced: true,
  state: {
    items: [],
    searchLine: '',
  },
  mutations: {
    add(state, item) {
      state.items.push(item);
    },
    search(state, text) {
      state.searchLine = text;
    },
  },
};

export default catalogStore;
