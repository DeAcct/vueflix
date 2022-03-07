<template>
  <div class="star-interaction">
    <div class="col-left">
      <star-graph
        @star-changed="starChanged"
        @guide-text-change="guideTextTrigger"
        :rating="rating"
        :disabled="!!disabled"
      />
      <p class="guide-text">{{ guideText }}</p>
    </div>
    <button
      class="rating-reset-btn"
      @click="ratingReset"
      :style="`color: ${textColor}; border-bottom-color:${textColor};`"
      :disabled="rating === 0"
      type="button"
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
    disabled: {
      type: [Boolean, Object],
    },
  },
  components: {
    StarGraph,
  },
  data() {
    return {
      guideText: "",
    };
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
    guideTextTrigger(e) {
      this.guideText = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-interaction {
  align-self: flex-end;
  width: 100%;
  display: flex;
  .col-left {
    display: flex;
    flex-direction: column;
    width: 20rem;
    max-width: 60%;
  }

  .star-graph {
    width: 100%;
    margin-bottom: 1rem;
  }
  .guide-text {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    line-height: 1.3;
    height: 3.4rem;
  }
  .rating-reset-btn {
    margin-right: 1rem;
    padding-bottom: 0.3rem;
    color: var(--text-900);
    font-size: 1.2rem;
    border-bottom: var(--text-900) solid 1px;
    &:disabled {
      visibility: hidden;
    }
  }
}

@media screen and (min-width: 1080px) {
  .star-interaction {
    .rating-reset-btn {
      cursor: auto;
    }
  }
}
</style>
