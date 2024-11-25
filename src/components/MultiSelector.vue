<template>
  <div class="MultiSelector" ref="$MultiSeletor" @keydown="arrowMove">
    <button
      v-for="({ key, text }, index) in data"
      :key
      class="MultiSelector__Item"
      :class="index === selected && 'MultiSelector__Item--Active'"
      @click="
        () => {
          indicatorMove(index);
          selected = key;
        }
      "
      @focus="() => false && indicatorMove(index)"
      ref="$Items"
      type="button"
    >
      {{ text }}
    </button>
    <div class="MultiSelector__Indicator"></div>
  </div>
</template>

<script setup>
import { useIndicatorAnimation } from "@/composables/indicator";
const props = defineProps({
  data: {
    type: Array,
  },
});

const selected = defineModel();

const {
  selector: $MultiSeletor,
  items: $Items,
  to,
  move: indicatorMove,
} = useIndicatorAnimation(selected.value);

function arrowMove(event) {
  const index = $Items.value.findIndex(
    (item) => item === document.activeElement
  );
  if (index === -1) return;
  if (index === 0 && event.key === "ArrowLeft") return;
  if (index === $Items.value.length - 1 && event.key === "ArrowRight") return;
  if (event.key === "ArrowLeft") {
    $Items.value[index - 1].focus();
  } else if (event.key === "ArrowRight") {
    $Items.value[index + 1].focus();
  }
}
</script>

<style lang="scss" scoped>
.MultiSelector {
  display: flex;
  justify-content: space-between;
  background-color: hsl(var(--bg-200));
  padding: 0.4rem;
  position: relative;
  overflow: hidden;
  &__Item {
    z-index: var(--z-index-s2);
    width: var(--item-width);
    height: var(--item-height);
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: var(--indicator-radius, 9999px);
    transition: color 150ms ease-out;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(var(--bg-600));
    &--Active {
      color: hsl(var(--text-800));
    }
    &:focus-visible {
      border-color: currentColor;
      // background-color: hsl(var(--theme-500) / 0.1);
    }
  }

  &__Indicator {
    position: absolute;
    left: 0;
    top: 0;
    z-index: var(--z-index-s1);
    width: calc(v-bind("to.width") * 1px);
    height: calc(v-bind("to.height") * 1px);
    // background-color: hsl(var(--theme-500) / 0.2);
    background-color: hsl(var(--bg-100));
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.06),
      0 2px 2px hsl(0deg 0% 0% / 0.06), 0 4px 4px hsl(0deg 0% 0% / 0.06);
    border-radius: var(--indicator-radius, 9999px);
    translate: calc(v-bind("to.x") * 1px) calc(v-bind("to.y") * 1px);
    transition: translate 150ms cubic-bezier(0.83, 0, 0.17, 1);
  }
}
</style>
