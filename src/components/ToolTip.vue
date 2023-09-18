<template>
  <div
    :class="[
      'ToolTip',
      `ToolTip--${direction}`,
      { 'ToolTip--AlwaysShow': show },
    ]"
  >
    <div class="ToolTip__Trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="ToolTip__Content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: "column",
    validator() {
      return ["column", "row"];
    },
  },
  show: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: "center",
  },
});
</script>

<style lang="scss" scoped>
.ToolTip {
  display: flex;
  align-items: v-bind(align);
  flex-direction: v-bind("props.direction");
  position: relative;

  &__Trigger {
    display: flex;
  }

  &__Content {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }
  &--column &__Content {
    bottom: 6rem;
  }
  &--row &__Content {
    position: static;
    transform-origin: left;
    align-self: center;
  }
  &:not(:focus-visible) &__Content {
    width: 0;
    height: 0;
    opacity: 0;
  }
}

@media (hover: hover) and (pointer: fine) {
  .ToolTip {
    &--AlwaysShow &__Content,
    &:hover &__Content {
      width: auto;
      height: auto;
      opacity: 1;
    }
    &--row:hover &__Content {
      width: 100%;
      height: auto;
    }
  }
}
</style>
