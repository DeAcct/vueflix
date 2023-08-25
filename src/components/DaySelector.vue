<template>
  <div class="DaySelector">
    <button
      v-for="day in DAYS"
      :key="day.key"
      :class="[
        'DaySelector__Item',
        { 'DaySelector__Item--Active': day.key === selected },
      ]"
      @click="dayBtnClick($event, day.key)"
    >
      {{ day.text }}
    </button>
  </div>
</template>

<script setup>
import { DAYS } from "@/enums/Days";

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
function dayBtnClick(_, key) {
  emits("day-change", key);
}
</script>

<style lang="scss" scoped>
.DaySelector {
  display: flex;
  justify-content: space-between;
  height: 4rem;

  &__Item {
    width: 4rem;
    height: 4rem;
    background-color: hsl(var(--bg-400));
    color: #fff;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    transition: 150ms ease-out;

    &--Active {
      background-color: hsl(var(--theme-500)) !important;
    }
    &:focus {
      background-color: hsl(var(--theme-300));
    }
  }
}
@media screen and (min-width: 768px) {
  .DaySelector {
    justify-content: flex-start;
    gap: 1rem;
  }
}
@media screen and (min-width: 1080px) {
  .DaySelector {
    margin: 0;
  }
}
</style>
