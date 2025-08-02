<template>
  <component
    :is="tag"
    ref="$root"
    :style="{
      backdropFilter: `url('${filter}') blur(0.5px) saturate(1.5) brightness(1.2)`,
      backgroundColor
    }"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { ref } from "vue";
import { getDisplacementFilter } from "@/composables/liquid-glass";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  radius: {
    type: [Number, String],
    default: 24,
  },
  depth: {
    type: [Number, String],
    default: 4,
  },
  backgroundColor: {
    type: String,
    default: "hsl(var(--bg-100) / 0.3)",
  },
});

const $root = ref(null);

const filter = getDisplacementFilter({
  el: $root,
  radius: props.radius,
  depth: props.depth,
});
</script>
