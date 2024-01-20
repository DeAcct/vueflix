<template>
  <div class="MultiSelector" ref="$MultiSeletor">
    <button
      v-for="({ key, text }, index) in data"
      :key="key"
      :class="[
        'MultiSelector__Item',
        { 'MultiSelector__Item--Active': index === selected },
      ]"
      @click="
        () => {
          indicatorMove(index);
          selected = key;
        }
      "
      @focus="indicatorMove(index)"
      ref="$Items"
    >
      {{ text }}
    </button>
    <div class="MultiSelector__Indicator"></div>
  </div>
</template>

<script setup>
import { useIndicatorAnimation } from "@/composables/indicator";

// defineProps는 setup() 밖으로 호이스팅(선언이 상단으로 끌어올려짐) 되므로 외부 상수/변수를 참조할 수 없다.
// 다만 import 되었거나 script 블록에서 선언된 경우 참조할 수 있다.
const props = defineProps({
  type: {
    type: String,
  },
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
    z-index: 2;
    width: var(--item-width);
    height: var(--item-height);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    border-radius: 9999px;
    transition: color 150ms ease-out;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    &--Active {
      color: hsl(var(--theme-500));
    }
    &:focus-visible {
      border: 2px solid hsl(var(--theme-500));
    }
  }

  &__Indicator {
    position: absolute;
    left: 0;
    z-index: 1;
    width: calc(v-bind("to.width") * 1px);
    height: calc(v-bind("to.height") * 1px);
    background-color: hsl(var(--theme-500) / 0.2);
    border-radius: 9999px;
    transform: translateX(calc(v-bind("to.x") * 1px));
    transition: transform 150ms ease-out;
  }
}
</style>
