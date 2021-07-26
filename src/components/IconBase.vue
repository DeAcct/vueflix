<template>
  <!--
    currentColor를 이용한 아이콘 색상조작
    |  currentColor값은 상위 요소의 color값을 따른다.
  -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title lang="ko">{{ iconName }} 아이콘</title>
    <g :fill="iconColor">
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
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
