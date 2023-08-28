<template>
  <div class="LinearChart">
    <p class="LinearChart__Summary">
      <slot name="summary"></slot>
    </p>
    <div class="LinearChart__Body">
      <div
        class="LinearChart__Item"
        v-for="({ value, keyword }, i) of data"
        :key="keyword"
        :style="`
          width: ${(value / total) * 100}%;
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

const total = computed(() =>
  props.data.reduce((acc, { value }) => (acc += value), 0)
);
</script>

<style lang="scss" scoped>
.LinearChart {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  &__Summary {
    font-size: 1.4rem;
    text-align: center;
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
    &__Summary {
      font-size: 1.5rem;
    }
  }
}
</style>
