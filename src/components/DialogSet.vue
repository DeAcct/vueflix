<template>
  <Transition name="slide-up">
    <div class="DialogSet" v-if="show">
      <slot name="content"></slot>
      <!--button class="DialogSet__Action">플레이짤 업로드</button -->

      <div class="DialogSet__Control">
        <slot name="control"></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.DialogSet {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  transform: translateY(0);
  background-color: hsl(var(--bg-200));
  border-radius: calc(2rem + var(--global-radius))
    calc(2rem + var(--global-radius)) 0 0;
  width: calc(100 * 1px * var(--vw));
  padding: var(--inner-padding) var(--inner-padding) 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  &__Control {
    display: flex;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: 150ms ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

@media screen and (min-width: 1080px) {
  .DialogSet {
    width: 480px;
    left: auto;
    right: max(calc((100 * 1px * var(--vw) - 1920px) / 2), 2rem);
    padding: 2rem 2rem 1rem;
    &__Body {
      padding: 1.9rem;
    }
  }
}
</style>
