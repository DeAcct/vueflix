<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :fill="iconColor"
    role="presentation"
  >
    <title lang="ko">{{ iconName }}</title>
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: "IconBase",
  props: {
    iconName: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  color: inherit;
  fill: currentColor;
  transition: 150ms ease-out;
}
</style>
