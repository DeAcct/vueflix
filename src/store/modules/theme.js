const deviceTheme = window.matchMedia("prefers-color-scheme").matches;

const state = {
  theme: deviceTheme,
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
