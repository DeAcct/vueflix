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
  @starting-style {
    &[open]::backdrop {
      opacity: 0;
    }
  }
  &[open]::backdrop {
    background-color: hsl(0 0% 0% / 0.3);
    transition: opacity 150ms ease-out, display 150ms ease-out allow-discrete,
      overay 150ms ease-out allow-discrete;
  }
  &[open] &__Body {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: var(--dialog-pc-inset, auto);
    translate: var(--dialog-pc-translate, -50% -50%);
    background-color: hsl(var(--bg-100));
    border-radius: var(--dialog-border-radius);
    width: min(var(--dialog-max-width), 100%);
    padding: var(--dialog-padding, var(--inner-padding));
    transition: translate 150ms ease-out, display 150ms ease-out allow-discrete,
      overay 150ms ease-out allow-discrete;
    @starting-style {
      translate: var(--dialog-starting-translate, 0 100%);
    }
  }
}
</style>
