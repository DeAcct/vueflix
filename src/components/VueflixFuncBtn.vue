<template>
  <!--상세페이지 뷰(view) 개발완료시 라우터 링크로 전환 예정-->
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VueflixFuncBtn",
  props: {
    link: {
      type: String,
    },
  },
};
</script>
