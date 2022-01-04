const state = {
  user: undefined,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
