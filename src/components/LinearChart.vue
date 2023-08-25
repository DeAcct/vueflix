<template>
  <div class="LinearChart">
    <p class="LinearChart__Analyze">
      다른 덕후들이 볼 때
      <strong>{{ bestKeyword }}</strong>
      이(가) 강한 작품이에요
    </p>
    <div class="LinearChart__Body">
      <div
        class="LinearChart__Item"
        v-for="({ value, keyword }, i) of data"
        :key="keyword"
        :style="`
          width: ${(value / allKeywords) * 100}%;
          background-color: var(--chart-palette-${i + 1});
        `"
      ></div>
    </div>
    <ChartLegend :data="data"></ChartLegend>
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
.LinearChart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  &__Analyze {
    font-size: 1.3rem;
  }
  &__Body {
    display: flex;
    border-radius: 9999px;
    overflow: hidden;
    width: 100%;
    height: 2rem;
    background-color: hsl(var(--bg-200));
  }
  &__Item {
    transition: width 150ms ease-out;
  }
}

@media screen and (min-width: 1080px) {
  .LinearChart {
    &__Analyze {
      font-size: 1.5rem;
    }
  }
}
</style>
