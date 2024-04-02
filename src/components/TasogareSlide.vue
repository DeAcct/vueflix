<template>
  <div
    class="Slide loading-target"
    ref="$root"
    @touchstart="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
  >
    <div class="Slide__RatioHold">
      <div class="Slide__Body" ref="$body">
        <slot name="items"></slot>
      </div>
    </div>
    <button
      class="Slide__ControlButton"
      v-for="{ icon, modifier, action } in controller"
      :class="`Slide__ControlButton--${modifier}`"
      :key="modifier"
      @click="delayAfterMove(action)"
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
    action: "prev",
    modifier: "Prev",
  },
  {
    icon: IconArrowNext,
    action: "next",
    modifier: "Next",
  },
];

const page = ref(0);
const $body = ref(null);
const $root = ref(null);

const TRANSITION_UNIT_TIME = 300;
let transitionTime = `${TRANSITION_UNIT_TIME}ms`;

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

function delayAfterMove(type) {
  if (type === "prev") {
    prev();
  } else {
    next();
  }
  stop();
  setTimeout(() => {
    resume();
  }, TRANSITION_UNIT_TIME * 5);
}

let interval = null;
function resume() {
  if (interval) {
    stop();
  }
  interval = setInterval(() => {
    next();
  }, TRANSITION_UNIT_TIME * 7.5);
}
function stop() {
  clearInterval(interval);
}
onMounted(resume);
onUnmounted(stop);

const position = ref({ start: 0, end: 0 });
function onTouchstart(event) {
  position.value.start = event.touches[0].clientX;
}
function onTouchmove(event) {
  position.value.end = event.touches[0].clientX;
}
function onTouchend() {
  const diff = position.value.start - position.value.end;
  if (Math.abs(diff) < 30) {
    return;
  }
  if (diff > 0) {
    next();
  } else {
    prev();
  }
  stop();
  setTimeout(() => {
    resume();
    position.value = { start: 0, end: 0 };
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
