<template>
  <router-link :to="link" class="btn" :style="style">
    <span class="interaction"> </span>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "VueflixRouteBtn",
  props: {
    link: {
      type: String,
    },
    bg: {
      type: String,
      default: "#fff",
    },
    textColor: {
      type: String,
      default: "inherit",
    },
  },
  data() {
    return {
      style: {
        backgroundColor: this.bg,
        color: this.textColor,
      },
    };
  },
};
</script>

<style lang="scss">
.btn {
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.3em;
  width: fit-content;
  transition: 150ms ease-out;
}
@media screen and (min-width: 768px) {
  .btn {
    font-size: 2em;
    padding: 1.5rem 2rem;
  }
}
</style>
