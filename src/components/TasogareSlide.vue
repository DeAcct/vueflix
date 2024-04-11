<template>
  <div
    class="Slide loading-target"
    ref="$root"
    @touchstart="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
  >
    <div class="Slide__RatioHold" ref="$body">
      <slot name="items"></slot>
    </div>
    <button
      class="Slide__ControlButton"
      v-for="{ icon, modifier, action } in controller"
      :class="`Slide__ControlButton--${modifier}`"
      :key="modifier"
      @click="move(action)"
      type="button"
    >
      <IconBase>
        <component :is="icon" />
      </IconBase>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

import IconBase from "@/components/IconBase.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";
import IconArrowNext from "@/components/icons/IconArrowNext.vue";

const props = defineProps({
  autoplay: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Number,
    default: 3000,
  },
});

const controller = [
  {
    icon: IconArrowPrev,
    action: -1,
    modifier: "Prev",
  },
  {
    icon: IconArrowNext,
    action: 1,
    modifier: "Next",
  },
];

const page = ref({ now: 0, next: 1 });
const $body = ref(null);
const $root = ref(null);

function move(amount) {
  const now = page.value.now + amount;
  page.value = {
    now: (now + $body.value.children.length) % $body.value.children.length,
    next:
      (now + amount + $body.value.children.length) %
      $body.value.children.length,
  };

  [...$body.value.children].forEach((child, i) => {
    if (i === page.value.now || i === page.value.next) {
      child.style.opacity = 1;
      return;
    }
    child.style.opacity = 0;
  });
}

let interval = null;
function loopStart() {
  if (interval) {
    loopEnd();
  }
  if (props.autoplay) {
    interval = setInterval(() => {
      move(1);
    }, props.time);
  }
}
function loopEnd() {
  clearInterval(interval);
}
onMounted(loopStart);
onUnmounted(loopEnd);

const position = ref({ start: 0, end: 0 });
function onTouchstart(event) {
  loopEnd();
  position.value.start = event.touches[0].clientX;
}
function onTouchmove(event) {
  position.value.end = event.touches[0].clientX;
}
function onTouchend() {
  const diff = position.value.start - position.value.end;
  if (Math.abs(diff) < $root.value.clientWidth / 3) {
    return;
  }
  if (diff > 0) {
    move(1);
  } else {
    move(-1);
  }
  setTimeout(() => {
    loopStart();
    position.value = { start: 0, end: 0 };
  }, props.time);
}
</script>

<style lang="scss">
.Slide {
  &__RatioHold > * {
    position: absolute;
    top: 0;
    transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1);
  }
}
</style>

<style lang="scss" scoped>
.Slide {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__RatioHold {
    width: 100%;
    position: relative;
    padding-bottom: 133.333%;
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
