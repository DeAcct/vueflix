<template>
  <div class="NativeDialog">
    <button
      @click="
        () => {
          backdrop === 'close' && close();
        }
      "
      class="NativeDialog__Close"
      :class="shade && 'NativeDialog__Close--Shade'"
      v-show="visible && backdrop !== 'none'"
      type="button"
    ></button>
    <Transition name="dialog-body">
      <div class="NativeDialog__Body" v-if="visible" ref="$body">
        <div class="NativeDialog__Wrap">
          <slot name="title"></slot>
          <slot name="content"></slot>
          <slot name="control"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useOveray } from "@/composables/overay";
import { useEventListener } from "@vueuse/core";

const props = defineProps({
  backdrop: {
    type: String,
    validator(value) {
      return ["close", "none"].includes(value);
    },
    default: "close",
  },
  shade: {
    type: Boolean,
    default: false,
  },
  closeSideEffect: {
    type: Function,
    default: () => {},
  },
});

const {
  visible,
  show,
  close: _close,
} = useOveray({
  time: Infinity,
});
function close() {
  _close();
  console.log("close");
  props.closeSideEffect();
}
const $body = ref(null);
useEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
  }
});

defineExpose({
  show,
  close,
  $body,
});
</script>

<style lang="scss" scoped>
.NativeDialog {
  min-height: 0;
  max-height: unset;

  --dialog-calc-z-index: var(--dialog-z-index, var(--z-index-overay-1));

  &__Wrap {
    display: flex;
    flex-direction: column;
  }

  &__Close {
    position: fixed;
    inset: var(--dialog-close-inset, 0);
    z-index: var(--dialog-calc-z-index);
    transition: all 150ms ease-out allow-discrete;
    @starting-style {
      opacity: 0;
    }
    &--Shade {
      background-color: rgba(0 0 0 / 0.5);
    }
  }

  &__Body {
    position: fixed;
    z-index: calc(var(--dialog-calc-z-index) + 1);
    inset: var(--dialog-inset, auto);
    translate: var(--dialog-translate, -50% -50%);
    background-color: var(--dialog-bg, hsl(var(--bg-200)));
    border-radius: var(--dialog-border-radius);
    width: min(var(--dialog-max-width), 100%);
    padding: var(--dialog-padding, var(--inner-padding));
    box-shadow: var(--dialog-shadow, none);
    overflow: var(--dialog-overflow, auto);
    height: var(--dialog-height, auto);
    opacity: 1;
  }
}

.dialog-body-enter-active,
.dialog-body-leave-active {
  transition: all 150ms ease-out;
}
.dialog-body-leave-active {
  transition: all 100ms ease-out;
}

.dialog-body-enter-from,
.dialog-body-leave-to {
  translate: var(--dialog-starting-translate, 0 100%);
  opacity: var(--dialog-starting-opacity, 1);
}
</style>
