const state = {
  theme: "light",
};

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
