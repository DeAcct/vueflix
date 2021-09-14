<template>
  <router-link :to="link" class="route-btn" :style="style">
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
    border: {
      type: String,
      default: "1px solid var(--bg-200)",
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
.route-btn {
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.3em;
  font-weight: 700;
  width: fit-content;
  transition: 150ms ease-out;
}
@media screen and (min-width: 1024px) {
  .route-btn {
    font-size: 2em;
    padding: 1.5rem 2rem;
  }
}
</style>
