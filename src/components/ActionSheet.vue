<template>
  <div class="action-sheet">
    <button
      class="action-sheet__shadow"
      @click="close"
      :title="`${title} 닫기`"
    ></button>
    <div class="action-area inner">
      <strong class="action-sheet__title">{{ title }}</strong>
      <ul>
        <li
          v-for="action in actions"
          :key="action.text"
          @click="action.method"
          class="action-item"
        >
          <button>{{ action.text }}</button>
        </li>
        <li class="action-item"><button @click="close">닫기</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionSheet",
  props: {
    title: {
      type: String,
    },
    actions: {
      type: Array,
    },
    close: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.action-sheet {
  position: fixed;
  z-index: 100;
  width: 100%;
  .action-sheet__shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100vh;
  }
  .action-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--text-100);
    border-radius: 0.6rem 0.6rem 0 0;
    .action-sheet__title {
      padding: 2rem 0;
      font-size: 1.5rem;
      font-weight: 700;
      align-self: center;
    }
    .action-item {
      border-top: 1px solid var(--text-200);
      button {
        padding: 1.4rem 0 1.5rem;
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }
}
</style>
