<template>
  <div class="reviews" :style="`min-height: ${deviceHeight}px;`">
    <keyword-review class="widget" />
    <text-review class="widget" :myRating="myRating" />
  </div>
</template>

<script>
import KeywordReview from "../components/KeywordReview.vue";
import TextReview from "../components/TextReview.vue";

export default {
  name: "reviews",
  components: {
    KeywordReview,
    TextReview,
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
};
</script>

<style lang="scss" scoped>
.reviews {
  padding-top: 7rem;
  background-color: var(--bg-100);
  .widget:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
