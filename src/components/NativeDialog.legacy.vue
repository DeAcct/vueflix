<template>
  <dialog class="NativeDialog" ref="dialogRoot">
    <form method="dialog" class="NativeDialog__Body" ref="dialogBody">
      <div class="NativeDialog__Wrap">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="control"></slot>
      </div>
    </form>
  </dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogRoot = ref(null);
const dialogBody = ref(null);
defineExpose({
  dialogRoot,
  dialogBody,
});
</script>

<style lang="scss" scoped>
.NativeDialog {
  min-height: 0;
  max-height: unset;
  &__Close {
    touch-action: none;
  }

  @starting-style {
    &[open]::backdrop {
      opacity: 0;
    }
  }
  &[open]::backdrop {
    opacity: 1;
    background-color: hsl(0 0% 0% / 0.3);
    transition: opacity 150ms ease-out, display 150ms ease-out allow-discrete,
      overay 150ms ease-out allow-discrete;
  }
  &[open] &__Body {
    position: fixed;
    z-index: 2;
    inset: var(--dialog-inset, auto);
    translate: var(--dialog-translate, -50% -50%);
    background-color: var(--dialog-bg, hsl(var(--bg-100)));
    border-radius: var(--dialog-border-radius);
    width: min(var(--dialog-max-width), 100%);
    padding: var(--dialog-padding, var(--inner-padding));
    box-shadow: var(--dialog-shadow, none);
    overflow: var(--dialog-overflow, auto);
    height: var(--dialog-height, auto);

    transition: translate 150ms ease-out, display 150ms ease-out allow-discrete,
      overay 150ms ease-out allow-discrete, opacity 150ms ease-out;
    opacity: 1;
    @starting-style {
      translate: var(--dialog-starting-translate, 0 100%);
      opacity: var(--dialog-starting-opacity, 1);
    }
  }
  &__Wrap {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &[open] &__Close {
    touch-action: auto;
    position: fixed;
    z-index: 1;
    width: calc(100 * 1px * var(--vw));
    height: calc(100 * 1px * var(--vh));
  }
}
</style>
