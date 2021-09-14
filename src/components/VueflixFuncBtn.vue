<template>
  <button class="func-btn" :style="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VueflixFuncBtn",
  props: {
    bg: {
      type: String,
      default: "#fff",
    },
    textColor: {
      type: String,
      default: "inherit",
    },
    border: {
      type: String,
      default: "none",
    },
  },
  data() {
    return {
      style: {
        backgroundColor: this.bg,
        color: this.textColor,
        border: this.border,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.func-btn {
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.3rem;
  font-weight: 700;
  width: fit-content;
  transition: 150ms ease-out;
}
@media screen and (min-width: 1024px) {
  .func-btn {
    font-size: 2em;
    padding: 1.5rem 2rem;
  }
}
</style>
