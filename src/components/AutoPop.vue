<template>
  <Transition name="auto-pop">
    <span class="AutoPop" v-if="visible">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </span>
  </Transition>
</template>

<script setup>
import { useAutoPop } from "@/composables/overay";
const { visible, show, close } = useAutoPop(700);

defineExpose({ show, close });
</script>

<style lang="scss" scoped>
.AutoPop {
  display: flex;
  padding: 1.4rem 2rem;
  border-radius: 9999px;
  font-size: 1.4rem;
  background-color: hsl(var(--bg-900) / 0.8);
  color: hsl(var(--text-100));
  backdrop-filter: blur(10px);
  position: fixed;
  bottom: 2rem;
  left: 50%;
  translate: -50% 0;
  justify-content: center;
}

.auto-pop-enter-active,
.auto-pop-leave-active {
  transition: translate 300ms, opacity 300ms;
}

.auto-pop-enter-from,
.auto-pop-leave-to {
  translate: -50% 3rem;
  opacity: 0;
}
</style>
