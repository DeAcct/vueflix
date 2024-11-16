<template>
  <li
    :class="`ToastItem ToastItem--${useFirstCapital(type)}`"
    ref="$target"
    @touchstart="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="touchend"
  >
    <IconBase class="ToastItem__Icon">
      <IconToast :type />
    </IconBase>
    <span class="ToastItem__Text">
      <slot name="message"></slot>
    </span>
    <VueflixBtn
      class="ToastItem__CloseButton"
      @click.stop="destroyToast"
      type="button"
      component="button"
    >
      <template #text>확인</template>
    </VueflixBtn>
  </li>
</template>

<script setup>
import { computed } from "vue";
import { useFirstCapital } from "@/composables/formatter";
import { useSwipe } from "@/composables/swipe";

import VueflixBtn from "@/components/VueflixBtn.vue";
import IconBase from "@/components/IconBase.vue";
import IconToast from "./icons/IconToast.vue";

defineProps({
  type: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["destroy-toast"]);
function destroyToast() {
  emit("destroy-toast");
}

const { $target, moved, onTouchstart, onTouchmove, clear } = useSwipe();
function touchend() {
  if ($target.value.clientWidth * 0.5 < Math.abs(moved.value)) {
    destroyToast();
    return;
  }
  clear();
}
const opacity = computed(
  () => 1 - Math.abs(moved.value / $target.value.clientWidth)
);
</script>

<style lang="scss" scoped>
.ToastItem {
  padding: 0 0 0 1.6rem;
  height: 4.8rem;
  border-radius: var(--global-radius);
  background: hsl(var(--toast-bg) / 0.9);
  -webkit-backdrop-filter: blur(0.4rem);
  backdrop-filter: blur(0.4rem);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: hsl(var(--item-color));

  translate: calc(v-bind(moved) * -0.1rem) 0;
  opacity: v-bind(opacity);
  // color: hsl(var(--item-color));
  &--Success {
    --item-color: var(--success-color);
  }
  &--Error {
    --item-color: var(--error-color);
  }
  &--Warning {
    --item-color: var(--warning-color);
  }
  &--Info {
    --item-color: var(--info-color);
  }

  &__Icon {
    color: inherit;
    width: 2.4rem;
    height: 2.4rem;
  }
  &__Text {
    color: inherit;
    font-size: 1.6rem;
  }
  &__CloseButton {
    margin-left: auto;
    font-size: 1.4rem;
    font-weight: 700;
    box-shadow: none;
    color: hsl(var(--toast-text));
  }
}
</style>
