<template>
  <div class="DaySelector" ref="$DaySelector">
    <button
      v-for="({ key, text }, index) in DAYS"
      :key="key"
      :class="[
        'DaySelector__Item',
        { 'DaySelector__Item--Active': key === selected },
      ]"
      @click="dayChange(_, index, key)"
      ref="$DayItems"
    >
      {{ text }}
    </button>
    <div class="DaySelector__Indicator"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
function dayChange(_, i, key) {
  indicatorMove(i);
  emits("day-change", key);
}

const indicatorPosition = ref(0);
const $DaySelector = ref(null);
const $DayItems = ref([]);
function indicatorMove(i) {
  console.log($DayItems.value[i]);
  const { x: toX } = $DayItems.value[i].getBoundingClientRect();
  const { x: bodyX } = $DaySelector.value.getBoundingClientRect();
  const [paddingLeft] = getComputedStyle($DaySelector.value, null)
    .getPropertyValue("padding-left")
    .split("px");
  indicatorPosition.value = toX - bodyX - paddingLeft;
}
onMounted(() => {
  const currentDayIndex = DAYS.findIndex((item) => props.selected === item.key);
  indicatorMove(currentDayIndex);
});

/*
const emits = defineEmits(["day-change"]);
const $DaySelector = ref(null);
const indicatorPosition = ref(0);
function moveIndicator(e) {
  if (!$DaySelector.value) {
    return 0;
  }
  const { x: toX } = e.currentTarget.getBoundingClientRect();
  const { x: bodyX } = $DaySelector.value.getBoundingClientRect();
  indicatorPosition.value = toX - bodyX - PADDING_LEFT;
}

function dayChange($event, key) {
  moveIndicator($event);
  emits("day-change", key);
}

onMounted(() => {
  const trackDivision =
    ($DaySelector.value.getBoundingClientRect().width - PADDING_LEFT * 2) / 7;
  const currentDayIndex = DAYS.findIndex((item) => props.selected === item.key);
  indicatorPosition.value = currentDayIndex * trackDivision;
});
*/

/*
const indicatorPosition = computed(() => {
  return DAYS.findIndex((item) => props.selected === item.key);
});

const $DaySelector = ref(null);
*/
</script>

<style lang="scss" scoped>
.DaySelector {
  display: flex;
  justify-content: space-between;
  background-color: var(--general-bg);
  padding: 0.4rem;
  position: relative;
  &__Item {
    z-index: 2;
    width: 4.4rem;
    height: 4.4rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    border-radius: 9999px;

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
    width: 4.4rem;
    height: 4.4rem;
    background-color: hsl(var(--theme-500) / 0.2);
    border-radius: 50%;
    transform: translateX(calc(v-bind(indicatorPosition) * 1px));
    transition: transform 150ms ease-out;
  }
}
</style>
