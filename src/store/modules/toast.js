const state = {
  toasts: new Set(),
};

const mutations = {
  pushToast(item) {
    state.toasts.add(item);
    setTimeout(() => {
      mutations.destoryToast(item.id);
    }, item.time);
  },
  destoryToast(id) {
    state.toasts = new Set(
      [...state.toasts].filter((toast) => toast.id !== id)
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
