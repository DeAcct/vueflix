<template>
  <div class="reviews" :style="`min-height: ${deviceHeight}px;`">
    <login-widget class="widget" v-if="!user" :btn-func="goAuth">
      <template v-slot:text>
        <h2>로그인하고 리뷰를 남겨보세요</h2>
      </template>
      <template v-slot:login-state-text>로그인</template>
    </login-widget>
    <keyword-reviews class="widget" :isLoggedIn="user" />
    <text-review class="widget" :user="user" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import KeywordReviews from "../components/KeywordReviews.vue";
import TextReview from "../components/TextReview.vue";
import LoginWidget from "../components/LoginWidget.vue";

export default {
  name: "AnimeReviews",
  components: {
    KeywordReviews,
    TextReview,
    LoginWidget,
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
  methods: {
    goAuth() {
      this.$router.push("/auth");
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  padding: 7rem 0 2rem;
  background-color: var(--anime-bg);
  display: flex;
  flex-direction: column;
  align-items: center;

  .widget:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
