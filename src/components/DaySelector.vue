<template>
  <div class="DaySelector" ref="$DaySelector">
    <button
      v-for="({ key, text }, index) in DAYS"
      :key="key"
      :class="[
        'DaySelector__Item',
        { 'DaySelector__Item--Active': key === selected },
      ]"
      @click="
        () => {
          indicatorMove(index);
          emits('day-change', key);
        }
      "
      ref="$DayItems"
    >
      {{ text }}
    </button>
    <div class="DaySelector__Indicator"></div>
  </div>
</template>

<script setup>
import { DAYS } from "@/enums/Days";
import { useIndicatorAnimation } from "@/composables/indicator";

// defineProps는 setup() 밖으로 호이스팅(선언이 상단으로 끌어올려짐) 되므로 외부 상수/변수를 참조할 수 없다.
// 다만 import 되었거나 script 블록에서 선언된 경우 참조할 수 있다.
const props = defineProps({
  type: {
    type: String,
  },
  selected: {
    type: String,
    validator(value) {
      return DAYS.map(({ key }) => key).includes(value);
    },
  },
});

const emits = defineEmits(["day-change"]);

const currentDayIndex = DAYS.findIndex((item) => props.selected === item.key);
const {
  selector: $DaySelector,
  items: $DayItems,
  to: indicatorPosition,
  move: indicatorMove,
} = useIndicatorAnimation(currentDayIndex);
</script>

<style lang="scss" scoped>
.DaySelector {
  display: flex;
  justify-content: space-between;
  background-color: hsl(var(--bg-200));
  padding: 0.4rem;
  position: relative;
  overflow: hidden;
  &__Item {
    z-index: 2;
    width: 4rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    border-radius: 9999px;
    transition: color 150ms ease-out;
    &--Active {
      color: hsl(var(--theme-500));
    }
    &:focus-visible {
      border: 2px solid hsl(var(--theme-500));
    }
  }

  &__Indicator {
    position: absolute;
    z-index: 1;
    width: 4rem;
    height: 4rem;
    background-color: hsl(var(--theme-500) / 0.2);
    border-radius: 50%;
    transform: translateX(calc(v-bind("indicatorPosition.x") * 1px));
    transition: transform 150ms ease-out;
  }
}
</style>
