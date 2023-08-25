<template>
  <ul class="ChartLegend">
    <li class="ChartLegend__Item" v-for="(label, i) in data" :key="label">
      <span class="col-left">
        <i
          class="ChartLegend__Icon"
          :style="`background-color:var(--chart-palette-${i + 1})`"
        />
        <strong class="ChartLegend__Keyword">{{ label.keyword }}</strong>
      </span>
      <p class="ChartLegend__Value">{{ label.value }}</p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.ChartLegend {
  display: flex;
  flex-wrap: wrap;
  margin: -0.3rem 0;
  .col-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  &__Icon {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
  }
  &__Item {
    min-width: 0;
    width: 33.333%;
    display: flex;
    padding: 0.5rem 1rem;
    margin: 0.3rem 0;
    font-size: 1.3rem;
    justify-content: space-between;
    &:not(:nth-child(3n)) {
      border-right: 1px solid hsl(var(--bg-300));
    }
  }
}
</style>
