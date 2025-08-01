<template>
  <component
    :is="tag"
    ref="$root"
    :style="{ backdropFilter: `url('${filter}') blur(0.5px)` }"
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
});

const $root = ref(null);

const filter = getDisplacementFilter({
  el: $root,
  radius: props.radius,
  depth: props.depth,
});
</script>
