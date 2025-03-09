<template>
  <div class="MultiView">
    <Transition :name="transitionName" mode="out-in">
      <div :key="viewKey" class="MultiView__Item">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  transitionName: {
    type: String,
    default: "fade",
  },
  viewKey: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style scoped lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms cubic-bezier(0, 0.55, 0.45, 1);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
    transform-origin: center center;
  }
  &-enter-from,
  &-leave-to {
    scale: 0.95;
    opacity: 0;
  }
}
</style>
