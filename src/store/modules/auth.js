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
    if (targetIndex !== -1) {
      state.user.recentWatched[targetIndex] = payload;
    } else {
      state.user.recentWatched.unshift(payload);
    }
    if (state.user.recentWatched.length > 1) {
      const sortOrder = ["year", "month", "date", "hour", "min", "sec"];

      state.user.recentWatched = state.user.recentWatched.sort((a, b) => {
        for (const sortBy of sortOrder) {
          if (a.watchedPoint[sortBy] > b.watchedPoint[sortBy]) {
            return -1;
          } else if (a.watchedPoint[sortBy] < b.watchedPoint[sortBy]) {
            return 1;
          }
        }
      });
    }
  },
  updateWannaSee(state, payload) {
    const targetIndex = state.user.wannaSee.findIndex(
      (wanna) => wanna.aniTitle === payload.aniTitle
    );
    if (targetIndex !== -1) {
      state.user.wannaSee[targetIndex] = payload;
    } else {
      state.user.wannaSee.unshift(payload);
    }
    if (state.user.wannaSee.length > 1) {
      const sortOrder = ["year", "month", "date", "hour", "min", "sec"];

      state.user.wannaSee = state.user.wannaSee.sort((a, b) => {
        for (const sortBy of sortOrder) {
          if (a.time[sortBy] > b.time[sortBy]) {
            return -1;
          } else if (a.time[sortBy] < b.time[sortBy]) {
            return 1;
          }
        }
      });
    }
  },
  deleteWannaSee(state, payload) {
    state.user.wannaSee = state.user.wannaSee.filter(
      (anime) => anime.aniTitle !== payload
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
