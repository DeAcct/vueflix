<template>
  <div class="GestureArea">
    <button
      @click="double(-5)"
      class="GestureArea__Item GestureArea__Item--Before"
      :class="nowInteraction === 'before' && 'GestureArea__Item--Interact'"
      type="button"
    >
      <Transition name="gesture-area-before">
        <IconBase v-if="nowInteraction === 'before'" class="GestureArea__Icon">
          <IconPrevFiveSec />
        </IconBase>
      </Transition>
    </button>
    <button
      @click="double(5)"
      class="GestureArea__Item GestureArea__Item--After"
      :class="nowInteraction === 'after' && 'GestureArea__Item--Interact'"
      type="button"
    >
      <Transition name="gesture-area-after">
        <IconBase v-if="nowInteraction === 'after'" class="GestureArea__Icon">
          <IconNextFiveSec />
        </IconBase>
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import IconBase from "./IconBase.vue";
import IconPrevFiveSec from "./icons/IconPrevFiveSec.vue";
import IconNextFiveSec from "./icons/IconNextFiveSec.vue";

const props = defineProps({
  // before: {
  //   type: Function,
  //   required: true,
  // },
  // after: {
  //   type: Function,
  //   required: true,
  // },
  action: {
    type: Function,
    required: true,
  },
});

let touches = 0;
const nowInteraction = defineModel();
function double(to) {
  touches++;

  setTimeout(() => {
    touches = 0;
  }, 300);
  if (touches !== 2) {
    return;
  }
  nowInteraction.value = to > 0 ? "after" : "before";
  props.action(to);
}
watch(nowInteraction, (val) => {
  if (val) {
    setTimeout(() => {
      nowInteraction.value = "";
    }, 600);
  }
});
</script>

<style lang="scss" scoped>
.GestureArea {
  display: flex;
  &__Item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background: linear-gradient(
      calc(var(--gesture-area-direction) * 90deg),
      rgb(0 0 0 /0.5),
      transparent
    );
    opacity: 0;
    transition: opacity 100ms ease-out;
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
  &__Icon {
    color: #fff;
    width: 3.6rem;
    height: 3.6rem;
  }
}

.gesture-area-before-enter-active,
.gesture-area-before-leave-active,
.gesture-area-after-enter-active,
.gesture-area-after-leave-active {
  transition: translate 100ms ease-in-out;
}

.gesture-area-before-enter-from,
.gesture-area-after-leave-to {
  // transform: translateX(1rem);
  translate: 1rem;
}
.gesture-area-before-leave-to,
.gesture-area-after-enter-from {
  translate: -1rem;
  // transform: translateX( -1rem);
}
</style>
