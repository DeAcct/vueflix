<template>
  <div class="UpdownReaction">
    <button
      class="UpdownReaction__Button UpdownReaction__Button--Up"
      @click="change(1)"
      :disabled="user?.uid === writer || !user"
    >
      <IconBase>
        <IconArrowNext></IconArrowNext>
      </IconBase>
      <span class="blind">좋아요</span>
    </button>
    <button
      class="UpdownReaction__Button UpdownReaction__Button--Down"
      @click="change(-1)"
      :disabled="user?.uid === writer || !user"
    >
      <IconBase>
        <IconArrowPrev></IconArrowPrev>
      </IconBase>
      <span class="blind">싫어요</span>
    </button>
    <div class="UpdownReaction__CounterClip">
      <Transition :name="`counter-${animateDirection}`">
        <p class="UpdownReaction__Number" :key="updown">{{ updown }}</p>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useUpdown } from "@/api/updown";
import { useAuth } from "@/store/auth";

import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

const props = defineProps({
  parent: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
});

const { updown, Update, Read } = useUpdown({
  id: props.parent,
  writer: props.writer,
});
onMounted(async () => {
  await Read();
});

const animateDirection = ref("up");
async function change(number) {
  await Update({ action: number });
  animateDirection.value = number > 0 ? "up" : "down";
  await Read();
}

const auth = useAuth();
const user = computed(() => auth.user);
</script>

<style lang="scss" scoped>
.UpdownReaction {
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &__Button {
    color: hsl(var(--bg-800));
    transform: rotate(-90deg);

    //시각보정
    &--Up {
      margin-top: 0.2rem;
    }
    &--Down {
      margin-bottom: 0.2rem;
    }
    &:disabled {
      color: hsl(var(--bg-400));
      cursor: not-allowed;
    }
  }
  &__CounterClip {
    overflow: hidden;
    height: var(--updown-font-size);
  }
  &__Number {
    font-variant-numeric: tabular-nums;
    font-size: var(--updown-font-size);
  }
}

.counter-up-enter-active,
.counter-up-leave-active,
.counter-down-enter-active,
.counter-down-leave-active {
  transition: translate 150ms ease, opacity 150ms ease;
}

.counter-up-enter-from,
.counter-down-leave-to {
  translate: 0 100%;
  opacity: 0;
}
.counter-up-leave-to,
.counter-down-enter-from {
  translate: 0 -100%;
  opacity: 0;
}
</style>
