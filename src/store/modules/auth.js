import { useTimeSort } from "@/composables/sort";

const state = {
  user: undefined,
};

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const mutations = {
  setUser(state, payload) {
    console.log(state);
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
      // const sortOrder = ["year", "month", "date", "hour", "min", "sec"];

      // state.user.recentWatched = state.user.recentWatched.sort((a, b) =>
      //   let sortPriority;
      //   for (const sortBy of sortOrder) {
      //     if (a.watchedPoint[sortBy] > b.watchedPoint[sortBy]) {
      //       sortPriority = -1;
      //       continue;
      //     }
      //     if (a.watchedPoint[sortBy] < b.watchedPoint[sortBy]) {
      //       sortPriority = 1;
      //       continue;
      //     }
      //     sortPriority = 0;
      //   }

      //   sortOrder.reduce((acc, sortBy) => {
      //     if (a.watchedPoint[sortBy] > b.watchedPoint[sortBy]) {
      //       return -1;
      //     }
      //     if (a.watchedPoint[sortBy] < b.watchedPoint[sortBy]) {
      //       return 1;
      //     }
      //     return 0;`
      //   })
      // );
      // state.user.recentWatched = useTimeSort(
      //   state.user.recentWatched,
      //   "watchedPoint"
      // );
      state.user.recentWatched = [...state.user.recentWatched].sort((a, b) => {
        if (a.watchedPoint > b.watchedPoint) {
          return -1;
        }
        if (a.watchedPoint < b.watchedPoint) {
          return 1;
        }
        return 0;
      });
    }
  },
  mergeUser(state, payload) {
    state.user = { ...state.user, ...payload };
  },
  updatePurchased(state, payload) {
    const targetIndex = state.user.purchased.findIndex(
      (purchase) => purchase.aniTitle === payload.aniTitle
    );
    if (targetIndex !== -1) {
      state.user.purchased[targetIndex].episodes = [
        ...state.user.purchased[targetIndex].episodes,
        ...payload.episodes,
      ];
      if (state.user.purchased[targetIndex].episodes.length > 1) {
        state.user.purchased[targetIndex].episodes = state.user.purchased[
          targetIndex
        ].episodes.sort((a, b) => a.index - b.index);
      }
    } else {
      state.user.purchased.unshift(payload);
      if (state.user.purchased.length > 1) {
        state.user.purchased = state.user.purchased.sort((a, b) => {
          if (a.aniTitle < b.aniTitle) {
            return -1;
          }
          if (a.aniTitle > b.aniTitle) {
            return 1;
          }
          return 0;
        });
      }
    }
  },
  updateMaratonWatch(state, payload) {
    const { aniTitle, part, index, time, maratonMax } = payload;
    const target = state.user.maratonWatch.find(
      (anime) => anime.aniTitle === payload.aniTitle
    );
    if (!target) {
      state.user.maratonWatch = [
        { aniTitle, list: [{ part, index, time }], clear: false },
      ];
      return;
    }
    const watching = target.list.find(
      (log) => log.part === payload.part && log.index === payload.index
    );
    function checkClear() {
      const isClear =
        target.list.reduce(
          (acc, log) => acc && log.time.current === log.time.max,
          true
        ) && target.list.length === maratonMax;
      target.clear = isClear;
    }
    if (!watching) {
      target.list.unshift({ part, index, time });
      checkClear();
      return;
    }
    watching.time = payload.time;
    checkClear();
  },
  clearMaraton(state, payload) {
    state.user.maratonWatch = state.user.maratonWatch.filter(
      (anime) => payload !== anime.aniTitle
    );
  },
  updateKeywordReview(state, payload) {
    const exists = state.user.keywordReview.findIndex(
      (animeItem) => animeItem.aniTitle === payload.aniTitle
    );
    if (exists !== -1) {
      state.user.keywordReview[exists].likeIt = payload.likeIt;
    } else {
      state.user.keywordReview.push(payload);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
