<template>
  <component class="VueflixBtn" :type="type" :is="component">
    <i class="VueflixBtn__Icon" v-if="icon">
      <slot name="icon"></slot>
    </i>
    <span class="VueflixBtn__Text">
      <slot name="text"></slot>
    </span>
  </component>
</template>

<script setup>
defineProps({
  type: {
    type: String,
  },
  component: {
    type: String,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.VueflixBtn {
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;

  width: -moz-fit-content;
  width: fit-content;
  transition: 150ms ease-out;
  box-shadow: var(--box-shadow);
  transition: box-shadow 150ms ease-out;
  &:active {
    box-shadow: 0 0.2rem 0.4rem transparent;
    opacity: 0.9;
  }
  &__Icon {
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__Text {
    color: inherit;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: inherit;
    font-weight: 700;
  }
}
</style>
