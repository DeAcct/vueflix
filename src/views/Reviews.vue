<template>
  <div class="reviews" :style="`min-height: ${deviceHeight}px;`">
    <!--todo : 로그인버튼 위젯으로 분리후 v-if처리-->
    <login-widget class="widget" v-if="!isLoggedIn"></login-widget>
    <keyword-review class="widget" :isLoggedIn="isLoggedIn" />
    <text-review class="widget" :myRating="myRating" :isLoggedIn="isLoggedIn" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import KeywordReview from "../components/KeywordReview.vue";
import TextReview from "../components/TextReview.vue";
import LoginWidget from "../components/LoginWidget.vue";

export default {
  name: "reviews",
  components: {
    KeywordReview,
    TextReview,
    LoginWidget,
  },
  props: {
    myRating: Number,
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
    });
  },
  unmounted() {
    window.removeEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
    });
  },
  data() {
    return {
      deviceHeight: window.innerHeight,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    isLoggedIn() {
      return this.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  padding: 7rem 0 2rem;
  background-color: var(--bg-100);
  display: flex;
  flex-direction: column;
  align-items: center;

  .widget:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
