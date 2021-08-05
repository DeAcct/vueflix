<template>
  <!--상세페이지 뷰(view) 개발완료시 라우터 링크로 전환 예정-->
  <a :href="link" class="btn" :style="style">
    <span class="interaction"> </span>
    <slot></slot>
  </a>
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
  padding: 1rem 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.5em;
  width: fit-content;
  transition: 150ms ease-out;
}
@media screen and (max-width: 768px) {
  .btn {
    font-size: 1.3em;
    padding: 0.9rem 1.5rem;
  }
}
</style>
