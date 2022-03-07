<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 48"
    class="star-graph"
    @mouseover="setGuideHoveredPoint"
    ref="starGraph"
  >
    <path
      v-for="(svgPoint, index) in svgPoints"
      :key="index"
      :d="svgPoint"
      @click="starClicked(index)"
      :class="[
        'star',
        { 'star--filled': index * 0.5 < rating || index <= hoveredPoint },
      ]"
      role="button"
      :title="`${index * 0.5}점`"
      :data-index="index"
    />
  </svg>
</template>

<script>
export default {
  name: "StarGraph",
  props: {
    rating: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
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
      hoveredPoint: -1,
      guideText: "별점을 남겨주세요",
    };
  },
  methods: {
    starClicked(index) {
      if (!this.disabled) {
        this.$emit("star-changed", (index + 1) * 0.5);
      }
    },
    setGuideHoveredPoint(e) {
      const path = e.target.closest("path");
      if (!path) return;
      if (!this.$refs.starGraph.contains(path)) return;
      this.hoveredPoint = e.target.dataset.index;
    },
    setGuideText(target) {
      switch (target) {
        case -1:
          this.guideText = "별점을 남겨주세요";
          break;
        case 0:
          this.guideText = "이제부터 이 감독/작가/제작진이랑 원수지간이야!";
          break;
        case 1:
          this.guideText = "그동안 즐거웠고 다시는 만나지 말자";
          break;
        case 2:
          this.guideText = "너... 좀 싫다";
          break;
        case 3:
          this.guideText = "별로에요ㅠㅠ";
          break;
        case 4:
          this.guideText = "뭔가 부족해요";
          break;
        case 5:
          this.guideText = "그냥저냥";
          break;
        case 6:
          this.guideText = "꽤 괜찮은 애니";
          break;
        case 7:
          this.guideText = "앉은 자리에서 정주행 가능!";
          break;
        case 8:
          this.guideText = "우주명작!";
          break;
        case 9:
          this.guideText = "제발 이 애니 안 본 덕후 없게 해주세요ㅠㅠㅠ";
          break;
      }
      this.$emit("guide-text-change", this.guideText);
    },
    removeGuide() {
      this.hoveredPoint = -1;
    },
  },
  mounted() {
    this.$emit("guide-text-change", this.guideText);
  },
  watch: {
    hoveredPoint() {
      this.setGuideText(this.hoveredPoint);
    },
    rating() {
      if (this.rating !== 0) {
        this.setGuideText(this.rating * 2 - 1);
      } else {
        this.removeGuide();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.star-graph {
  width: 24rem;
  .star {
    fill: var(--bg-300);
    &--filled {
      fill: var(--point-500);
    }
  }
}
@media (hover: hover) and (pointer: fine) {
  .star-graph {
    .star {
      cursor: pointer;
    }
  }
}
</style>
