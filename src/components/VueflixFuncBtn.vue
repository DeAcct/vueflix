<template>
  <button class="btn" :style="style">
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
