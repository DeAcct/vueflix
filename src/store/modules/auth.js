const state = {
  user: undefined,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  updateRecentWatched(state, payload) {
    const targetIndex = state.user.recentWatched.findIndex(
      (recent) => recent.aniTitle === payload.aniTitle
    );
    console.log(targetIndex);
    if (targetIndex !== -1) {
      console.log("목록에 있으니 덮어씀");
      state.user.recentWatched[targetIndex] = payload;
    } else {
      console.log("목록에 없으니 앞에 추가함");
      state.user.recentWatched.unshift(payload);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
