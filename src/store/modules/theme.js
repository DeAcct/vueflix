const state = {
  theme: "light",
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const mutations = {
  setTheme(state, payload) {
    state.theme = payload;
    const $app = document.getElementById("app");
    $app.dataset.theme = state.theme;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
