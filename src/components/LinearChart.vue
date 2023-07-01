<template>
  <div class="linear-chart">
    <p class="linear-chart__analyze">
      다른 덕후들이 볼 때
      <strong>{{ bestKeyword }}</strong>
      이(가) 강한 작품이에요
    </p>
    <div class="linear-chart__body">
      <div
        class="linear-chart__item"
        v-for="({ value, keyword }, i) of data"
        :key="keyword"
        :style="`
          width: ${(value / allKeywords) * 100}%;
          background-color: var(--chart-palette-${i + 1});
        `"
      ></div>
    </div>
    <chart-legend :data="data"></chart-legend>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ChartLegend from "./ChartLegend.vue";
const props = defineProps({
  data: {
    type: Array,
  },
});

const allKeywords = computed(() =>
  props.data.reduce((acc, { value }) => (acc += value), 0)
);

const bestKeyword = computed(
  () =>
    props.data.reduce((acc, now) => (acc.value > now.value ? acc : now), {})
      .keyword
);
</script>

<style lang="scss" scoped>
.linear-chart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  &__analyze {
    font-size: 1.3rem;
  }
  &__body {
    display: flex;
    border-radius: 9999px;
    overflow: hidden;
    width: 100%;
    height: 2rem;
    background-color: hsl(var(--bg-200));
  }
  &__item {
    transition: width 150ms ease-out;
  }
}

@media screen and (min-width: 1024px) {
  .linear-chart {
    &__analyze {
      font-size: 1.5rem;
    }
  }
}
</style>
