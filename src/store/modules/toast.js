const state = {
  isShown: false,
  text: "",
};

const mutations = {
  changeToastMeta(state, payload) {
    state.isShown = payload.isShown;
    state.text = payload.text;
    console.log(state);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
