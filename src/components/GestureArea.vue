<template>
  <div class="GestureArea">
    <button
      @click="double('before')"
      :class="[
        'GestureArea__Item',
        'GestureArea__Item--Before',
        { 'GestureArea__Item--Interact': moveFiveSecInteraction === 'before' },
      ]"
    >
      <Transition name="gesture-area-before">
        <IconBase
          v-if="moveFiveSecInteraction === 'before'"
          class="GestureArea__Icon"
          ><IconPrevFiveSec
        /></IconBase>
      </Transition>
    </button>
    <button
      @click="double('after')"
      :class="[
        'GestureArea__Item',
        'GestureArea__Item--After',
        { 'GestureArea__Item--Interact': moveFiveSecInteraction === 'after' },
      ]"
    >
      <Transition name="gesture-area-after">
        <IconBase
          v-if="moveFiveSecInteraction === 'after'"
          class="GestureArea__Icon"
          ><IconNextFiveSec
        /></IconBase>
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

import IconBase from "./IconBase.vue";
import IconPrevFiveSec from "./icons/IconPrevFiveSec.vue";
import IconNextFiveSec from "./icons/IconNextFiveSec.vue";

const props = defineProps({
  beforeMove: {
    type: Function,
    required: true,
  },
  afterMove: {
    type: Function,
    required: true,
  },
});

let touches = 0;
const moveFiveSecInteraction = ref("");
function double(to) {
  touches++;

  setTimeout(() => {
    touches = 0;
  }, 300);
  if (touches !== 2) {
    return;
  }
  moveFiveSecInteraction.value = to;
  if (to === "before") {
    props.beforeMove();
  }
  if (to === "after") {
    props.afterMove();
  }
  setTimeout(() => {
    moveFiveSecInteraction.value = "";
  }, 600);
}
</script>

<style lang="scss" scoped>
.GestureArea {
  display: flex;
  &__Item {
    flex-grow: 1;
    background: linear-gradient(
      calc(var(--gesture-area-direction) * 90deg),
      rgb(0 0 0 /0.5),
      transparent
    );
    opacity: 0;
    transition: opacity 300ms ease-out;
    &--Interact {
      opacity: 1;
    }
    &--Before {
      --gesture-area-direction: 1;
    }
    &--After {
      --gesture-area-direction: -1;
    }
  }
}

.gesture-area-before-enter-active,
.gesture-area-before-leave-active,
.gesture-area-after-enter-active,
.gesture-area-after-leave-active {
  transition: transform 150ms ease-in-out;
}

.gesture-area-before-enter-from,
.gesture-area-after-leave-to {
  transform: translateX(1rem);
}
.gesture-area-before-leave-to,
.gesture-area-after-enter-from {
  transform: translateX(-1rem);
}
</style>
