<template>
  <div class="star-interaction">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 48" class="stars">
      <path
        v-for="(svgPoint, index) in svgPoints"
        :key="index"
        :d="svgPoint"
        @click="starClicked(index)"
        :class="['star', { 'star--filled': index * 0.5 < rating }]"
        role="button"
      />
    </svg>
    <button
      class="rating-reset-btn"
      @click="ratingReset"
      :style="`color: ${textColor}; border-bottom-color:${textColor};`"
    >
      별점 초기화
    </button>
  </div>
</template>

<script>
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
  data() {
    return {
      svgPoints: [
        "M21.44,1.63,15.65,14l-13.25,2A2.84,2.84,0,0,0,.81,20.86l9.67,10L8.23,44.7a2.82,2.82,0,0,0,4.15,2.94L24,41.19V0A2.79,2.79,0,0,0,21.44,1.63Z",
        "M39.77,44.7,37.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L32.35,14,26.56,1.63A2.79,2.79,0,0,0,24,0V41.19l11.62,6.45A2.82,2.82,0,0,0,39.77,44.7Z",
        "M79.44,1.63,73.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L66.23,44.7a2.82,2.82,0,0,0,4.15,2.94L82,41.19V0A2.79,2.79,0,0,0,79.44,1.63Z",
        "M97.77,44.7,95.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L90.35,14,84.56,1.63A2.79,2.79,0,0,0,82,0V41.19l11.62,6.45A2.82,2.82,0,0,0,97.77,44.7Z",
        "M137.44,1.63,131.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L124.23,44.7a2.82,2.82,0,0,0,4.15,2.94L140,41.19V0A2.79,2.79,0,0,0,137.44,1.63Z",
        "M155.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L142.56,1.63A2.79,2.79,0,0,0,140,0V41.19l11.62,6.45A2.82,2.82,0,0,0,155.77,44.7Z",
        "M195.44,1.63,189.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L182.23,44.7a2.82,2.82,0,0,0,4.15,2.94L198,41.19V0A2.79,2.79,0,0,0,195.44,1.63Z",
        "M213.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L200.56,1.63A2.79,2.79,0,0,0,198,0V41.19l11.62,6.45A2.82,2.82,0,0,0,213.77,44.7Z",
        "M253.44,1.63,247.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L240.23,44.7a2.82,2.82,0,0,0,4.15,2.94L256,41.19V0A2.79,2.79,0,0,0,253.44,1.63Z",
        "M271.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L258.56,1.63A2.79,2.79,0,0,0,256,0V41.19l11.62,6.45A2.82,2.82,0,0,0,271.77,44.7Z",
      ],
    };
  },
  methods: {
    starClicked(index) {
      this.$emit("starChanged", (index + 1) * 0.5);
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
  .stars {
    width: 50%;
    .star {
      fill: var(--bg-300);
      &--filled {
        fill: var(--point-500);
      }
    }
  }
  .rating-reset-btn {
    padding-bottom: 0.3rem;
    color: var(--text-900);
    font-size: 1.2rem;
    border-bottom: var(--text-900) solid 1px;
  }
}

@media screen and (min-width: 1080px) {
  .star-interaction .stars .star {
    cursor: pointer;
  }
}
</style>
