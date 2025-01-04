<template>
  <component :is="component" class="ArrowBtnWidget">
    <span class="ArrowBtnWidget__Col">
      <i class="ArrowBtnWidget__Icon">
        <icon-base>
          <slot name="icon"></slot>
        </icon-base>
      </i>
      <slot name="text"></slot>
    </span>
    <i class="ArrowBtnWidget__Icon" v-if="component === 'RouterLink'">
      <icon-base>
        <icon-arrow-next />
      </icon-base>
    </i>
  </component>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";

defineProps({
  component: {
    type: String,
    default: "button",
    validator(value) {
      return ["button", "RouterLink"].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
.ArrowBtnWidget {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__Col {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: inherit;
  }
  &__Icon {
    display: flex;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>
