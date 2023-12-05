<template>
  <div class="ModalBackdrop" @click="action"></div>
</template>

<script setup>
defineProps({
  action: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.ModalBackdrop {
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: calc(var(--vw) * 100 * 1px);
  height: calc(var(--vh) * 100 * 1px);
  background-color: rgba(0 0 0 / 0.5);
}
</style>
