<template>
  <div class="reviews" :style="`min-height: ${deviceHeight}px;`">
    <keyword-reviews />
  </div>
</template>

<script>
import KeywordReviews from "../components/KeywordReviews.vue";

export default {
  name: "reviews",
  components: {
    KeywordReviews,
  },
  mounted() {
    window.addEventListener("resize", () => {
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
  padding-top: 6rem;
  background-color: var(--bg-100);
  .keyword-review {
    margin-top: 1rem;
  }
}
</style>
