<template>
  <component class="btn" :type="type" :is="component">
    <i class="icon" v-if="icon">
      <slot name="icon"></slot>
    </i>
    <span class="text">
      <slot name="text"></slot>
    </span>
  </component>
</template>

<script setup>
defineProps({
  type: {
    type: String,
  },
  component: {
    type: String,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
</script>
