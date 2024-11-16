<template>
  <div
    class="Slide loading-target"
    ref="$root"
    @touchstart="touchstart"
    @touchmove="onTouchmove"
    @touchend="touchend"
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
import { useSwipe } from "../composables/swipe";

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

function move(amount) {
  const now = page.value.now + amount;
  page.value = {
    now: (now + $body.value.children.length) % $body.value.children.length,
    next:
      (now + amount + $body.value.children.length) %
      $body.value.children.length,
  };

  [...$body.value.children].forEach((child, i) => {
    const isActive = i === page.value.now || i === page.value.next;
    child.style.pointerEvents = isActive ? "auto" : "none";
    child.style.touch = isActive ? "auto" : "none";
    child.style.opacity = isActive ? 1 : 0;
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

const {
  $target: $root,
  onTouchstart,
  onTouchmove,
  onTouchend,
  clear,
} = useSwipe();
function touchstart(event) {
  loopEnd();
  onTouchstart(event);
}
function touchend() {
  onTouchend({
    left() {
      move(1);
    },
    right() {
      move(-1);
    },
    callback() {
      setTimeout(() => {
        loopStart();
        clear();
      }, props.time);
    },
  });
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
