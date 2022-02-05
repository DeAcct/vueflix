const state = {
  currentAnimeInfo: undefined,
};

const mutations = {
  setCurrentAnimeInfo(state, payload) {
    state.currentAnimeInfo = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
