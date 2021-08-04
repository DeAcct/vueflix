<template>
  <!--상세페이지 뷰(view) 개발완료시 라우터 링크로 전환 예정-->
  <a :href="link" class="btn">
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
  },
};
</script>

<style lang="scss">
.btn {
  padding: 1rem 1.5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.5em;
  width: fit-content;
}
@media screen and (max-width: 768px) {
  .btn {
    font-size: 1.3em;
    padding: 0.9rem 1.5rem;
  }
}
</style>
