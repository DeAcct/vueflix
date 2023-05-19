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
    console.log(state);
    state.user.wannaSee = state.user.wannaSee.filter(
      (anime) => anime.aniTitle !== payload
    );
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
          } else if (a.aniTitle > b.aniTitle) {
            return 1;
          }
        });
      }
    }
  },
  setReviews(state, payload) {
    state.user.reviews = payload;
  },
  updateMaratonWatch(state, payload) {
    const targetIndex = state.user.maratonWatch.findIndex(
      (anime) => anime.aniTitle === payload.aniTitle
    );
    if (targetIndex === -1) {
      const data = {
        aniTitle: payload.aniTitle,
        recentTime: payload.recentTime,
        allEpisodes: payload.allEpisodes,
        items: [payload.item],
        maratonEnd: false,
      };
      state.user.maratonWatch.push(data);
    } else {
      /* 시간정보 업데이트 */
      state.user.maratonWatch[targetIndex] = {
        ...state.user.maratonWatch[targetIndex],
        recentTime: payload.recentTime,
      };
      /*
       * 100%면 안건들기
       * 100% 아니면 건들기
       * 아예 그걸 본 흔적이 없으면 push()
       */
      const target = state.user.maratonWatch[targetIndex];
      const mutateTargetEpIndex = target.items.findIndex(
        (item) =>
          item.part === payload.item.part && item.index === payload.item.index
      );
      const maratonEnd =
        target.items.reduce(
          (prev, next) => prev && next.episodePercent === "100%",
          true
        ) && target.items.length === target.allEpisodes;
      if (mutateTargetEpIndex === -1) {
        target.items.push(payload.item);
      } else {
        target.items[mutateTargetEpIndex].episodePercent =
          payload.item.episodePercent;
      }
      state.user.maratonWatch[targetIndex].maratonEnd = maratonEnd;
    }
  },
  clearMaraton(state, payload) {
    state.user.maratonWatch = state.user.maratonWatch.filter(
      (anime) => payload !== anime.aniTitle
    );
  },
  newKeywordReview(state, payload) {
    const exists = state.user.keywordReview.findIndex(
      (krItem) => krItem.aniTitle === payload.aniTitle
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
