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

  &__Content {
    opacity: 0;
    transition: 150ms ease-out;
    position: absolute;
    white-space: nowrap;
  }
  &--column &__Content {
    top: -6rem;
  }
  &--row &__Content {
    width: 0;
    position: static;
    transform-origin: left;
    align-self: center;
  }
  &--AlwaysShow &__Content,
  &:hover &__Content {
    width: auto;
    opacity: 1;
  }
}
</style>
