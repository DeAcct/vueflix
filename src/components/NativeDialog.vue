<template>
  <dialog class="NativeDialog" ref="dialogRoot">
    <form method="dialog" class="NativeDialog__Body">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="control"></slot>
    </form>
  </dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogRoot = ref(null);
defineExpose({
  dialogRoot,
});
</script>

<style lang="scss" scoped>
.NativeDialog {
  &__Body {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) * 2) calc(var(--global-radius) * 2)
      0 0;
    width: 100%;
    padding: var(--inner-padding);
  }
}
</style>
