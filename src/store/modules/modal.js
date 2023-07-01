const state = {
  modal: {
    content: [],
    action: [],
  },
};

const mutations = {
  callModal({ content, action }) {
    state.modal.content = content;
    state.modal.action = action;
  },
  destroyModal() {
    state.modal = {
      content: [],
      action: [],
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
