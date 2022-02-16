const state = {
  theme: "light",
};

const mutations = {
  setTheme(state, payload) {
    state.theme = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
