<template>
  <section class="login-widget inner">
    <h2 class="guide">로그인하고 리뷰를 남겨보세요</h2>
    <vueflix-btn class="widget" component="router-link" to="/auth">
      <template v-slot:text>로그인</template>
    </vueflix-btn>
  </section>
</template>

<script>
import VueflixBtn from "../components/VueflixBtn.vue";
export default {
  name: "LoginWidget",
  components: {
    VueflixBtn,
  },
};
</script>

<style lang="scss">
.login-widget {
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  padding: {
    top: 1.8rem;
    bottom: 1.8rem;
  }
  .guide {
    font-size: 1.5rem;
  }
  .btn {
    border-radius: 9999px;
    background-color: var(--theme-500);
    color: #fff;
  }
}
</style>
