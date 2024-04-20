<template>
  <div class="FanfareCount">
    <canvas class="FanfareCount__Effect" ref="$canvas"></canvas>
    <Transition name="fanfare-fade">
      <div class="FanfareCount__Rail" v-if="_count >= 0">
        <div class="FanfareCount__Counter">
          <Transition :name="_count > 0 ? 'scale-count' : 'text-down'">
            <span :key="_count" class="FanfareCount__Number" v-if="_count > 0">
              {{ _count }}
            </span>
            <span class="FanfareCount__New" v-else>New!</span>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useFanfare } from "@/composables/canvas";

const props = defineProps({
  count: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },
});

const { $canvas, start } = useFanfare({
  amount: 100,
  colors: [
    "240 159 144",
    "242 204 182",
    "240 154 148",
    "176 82 95",
    "197 130 122",
  ],
});

// start($canvas.value);
const _count = ref(props.count);
onMounted(() => {
  if (props.count < 0) {
    throw new Error("count must be positive");
  }
  if (props.count === 0) {
    start();
    return;
  }
  const interval = setInterval(() => {
    _count.value -= 1;
    if (_count.value === 0) {
      start();
    }
    if (_count.value === props.count * -1) {
      clearInterval(interval);
    }
  }, 1000);
});
</script>

<style lang="scss" scoped>
.FanfareCount {
  touch-action: none;
  pointer-events: none;
  &__Rail {
    position: absolute;
    inset: 0;
    z-index: var(--z-index-overay-2);
  }
  &__Counter {
    position: sticky;
    top: var(--fanfare-counter-top, 50%);
    left: var(--fanfare-counter-left, 50%);
    translate: var(--fanfare-counter-translate, -50% -50%);
    z-index: var(--z-index-overay-3);
    width: var(--fanfare-counter-width);
    height: var(--fanfare-counter-height);

    background: var(--fanfare-counter-bg, hsl(var(--bg-500) / 0.8));
    -webkit-backdrop-filter: blur(var(--fanfare-counter-blur, 10px));
    backdrop-filter: blur(var(--fanfare-counter-blur, 10px));
    border-radius: var(
      --fanfare-counter-radius,
      calc(var(--global-radius) * 4)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }
  &__Number {
    display: block;
    font-weight: inherit;
  }
  &__New {
    display: block;
    font-weight: inherit;
  }
}

.scale-count-enter-active,
.scale-count-leave-active {
  transition: scale 300ms ease-out, opacity 300ms ease-out;
}
.scale-count-leave-active {
  display: none;
}
.scale-count-enter-from,
.scale-count-leave-to {
  scale: 1.5;
  opacity: 0;
}

.text-down-enter-active,
.text-down-leave-active {
  transition: translate 300ms ease-out, opacity 300ms ease-out;
}
.text-down-leave-active {
  display: none;
}
.text-down-enter-from,
.text-down-leave-to {
  translate: 0 -2rem;
}

.fanfare-fade-leave-active {
  transition: opacity 300ms ease-out;
}
.fanfare-fade-leave-to {
  opacity: 0;
}
</style>
