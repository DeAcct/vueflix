<template>
  <div class="star-interaction">
    <star-graph @starChanged="starChanged" :rating="rating" />
    <button
      class="rating-reset-btn"
      @click="ratingReset"
      :style="`color: ${textColor}; border-bottom-color:${textColor};`"
      :disabled="rating === 0"
    >
      별점 초기화
    </button>
  </div>
</template>

<script>
import StarGraph from "./StarGraph.vue";
export default {
  name: "StarInteraction",
  props: {
    rating: {
      type: Number,
    },
    textColor: {
      type: String,
      default: "inherit",
    },
  },
  components: {
    StarGraph,
  },
  methods: {
    starChanged(e) {
      this.$emit("starChanged", e);
    },
    ratingReset() {
      if (this.rating !== 0) {
        this.$emit("starChanged", 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.star-interaction {
  align-self: flex-end;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rating-reset-btn {
    padding-bottom: 0.3rem;
    color: var(--text-900);
    font-size: 1.2rem;
    border-bottom: var(--text-900) solid 1px;
    &:disabled {
      color: var(--text-200) !important;
    }
  }
}

@media screen and (min-width: 1080px) {
  .star-interaction {
    .rating-reset-btn {
      &:disabled {
        opacity: 0;
        cursor: auto;
      }
    }
  }
}
</style>
