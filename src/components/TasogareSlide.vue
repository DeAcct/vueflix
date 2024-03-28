<template>
  <div
    class="Slide loading-target"
    ref="$root"
    @touchstart="onTouchstart"
    @touchmove="onTouchmove"
  >
    <div class="Slide__RatioHold">
      <div class="Slide__Body" ref="$body">
        <slot name="items"></slot>
      </div>
    </div>
    <button
      v-for="{ icon, modifier, action } in controller"
      :key="modifier"
      @click="action"
      class="Slide__ControlButton"
      :class="`Slide__ControlButton--${modifier}`"
      type="button"
    >
      <IconBase>
        <component :is="icon" />
      </IconBase>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import IconBase from "@/components/IconBase.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";
import IconArrowNext from "@/components/icons/IconArrowNext.vue";

const controller = [
  {
    icon: IconArrowPrev,
    action: prev,
    modifier: "Prev",
  },
  {
    icon: IconArrowNext,
    action: next,
    modifier: "Next",
  },
];

const page = ref(0);
const $body = ref(null);
const $root = ref(null);

let transitionTime = `${TRANSITION_UNIT_TIME}ms`;

// const slots = useSlots();
const TRANSITION_UNIT_TIME = 300;

function prev() {
  transitionTime = `${TRANSITION_UNIT_TIME}ms`;
  $body.value.style.willChange = "transform";
  if (page.value <= 0) {
    page.value = $body.value.children.length - 1;
    transitionTime = `${TRANSITION_UNIT_TIME * $body.value.children.length}ms`;
    return;
  }
  page.value--;
  $body.value.style.willChange = "unset";
}
function next() {
  transitionTime = `${TRANSITION_UNIT_TIME}ms`;
  $body.value.style.willChange = "transform";
  if (page.value >= $body.value.children.length - 1) {
    page.value = 0;
    transitionTime = `${TRANSITION_UNIT_TIME * $body.value.children.length}ms`;
    return;
  }
  page.value++;
  $body.value.style.willChange = "unset";
}

let interval = null;
onMounted(() => {
  interval = setInterval(() => {
    if (isMoving.value) return;
    next();
  }, TRANSITION_UNIT_TIME * 7.5);
});
onUnmounted(() => {
  clearInterval(interval);
});

const isMoving = ref(false);
const position = ref(0);
function onTouchstart(event) {
  isMoving.value = true;
  position.value = event.touches[0].clientX;
}
function onTouchmove(event) {
  if (!isMoving.value) return;
  const diff = position.value - event.touches[0].clientX;
  if (diff > 0) {
    next();
  } else {
    prev();
  }
  setTimeout(() => {
    isMoving.value = false;
    position.value = 0;
  }, TRANSITION_UNIT_TIME * 5);
}
</script>

<style lang="scss" scoped>
.Slide {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__RatioHold {
    position: relative;
    padding-bottom: 133.333%;
  }
  &__Body {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    translate: calc(-1 * v-bind("page") * 100vw) 0;
    transition: translate v-bind("transitionTime") cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__ControlButton {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .Slide {
    &__RatioHold {
      padding-bottom: calc(1043 / 2560 * 100%);
    }
    &__ControlButton {
      display: block;
      position: absolute;
      color: #fff;
      &--Next {
        right: 2rem;
      }
      &--Prev {
        left: 2rem;
      }
    }
  }
}
</style>
