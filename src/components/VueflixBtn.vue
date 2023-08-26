<template>
  <component class="btn" :type="type" :is="component">
    <i class="icon" v-if="icon">
      <icon-base>
        <slot name="icon"></slot>
      </icon-base>
    </i>
    <span class="text">
      <slot name="text"></slot>
    </span>
  </component>
</template>

<script setup>
import IconBase from "./IconBase.vue";

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
