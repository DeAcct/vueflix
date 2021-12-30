<template>
  <button class="btn" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VueflixFuncBtn",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
