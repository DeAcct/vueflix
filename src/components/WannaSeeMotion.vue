<template>
  <i class="WannaSeeMotion" :class="checked && 'WannaSeeMotion--Checked'">
    <IconBase class="WannaSeeMotion__Icon WannaSeeMotion__Icon--Added">
      <IconWannaSeeAdded />
    </IconBase>
    <IconBase class="WannaSeeMotion__Icon WannaSeeMotion__Icon--Add">
      <IconWannaSeeAdd />
    </IconBase>
    {{ wannaSee }}
  </i>
</template>

<script setup>
import IconBase from "@/components/IconBase.vue";
import IconWannaSeeAdd from "@/components/icons/IconWannaSeeAdd.vue";
import IconWannaSeeAdded from "@/components/icons/IconWannaSeeAdded.vue";

const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.WannaSeeMotion {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  &--Checked {
    --add-icon-delay: 0;
    --add-icon-opacity: 0;
    --add-icon-translate: 0 2.5rem;
    --add-icon-scale: 0;
    --added-icon-dashoffset: 0;
    --added-icon-delay: 150ms;
    --added-icon-opacity: 1;
  }

  &__Icon {
    fill: transparent;
    stroke: currentColor;
    color: var(--wanna-see-icon-color, var(--anime-layout-text));
    stroke-width: 2px;
    stroke-linecap: round;
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    &--Added {
      transition-delay: var(--added-icon-delay, 0);
      stroke-dasharray: 25;
      stroke-dashoffset: var(--added-icon-dashoffset, 25);
      opacity: var(--added-icon-opacity, 0);
    }
    &--Add {
      transition-delay: var(--add-icon-delay, 0);
      translate: var(--add-icon-translate, 0);
      scale: var(--add-icon-scale, 1);
      opacity: var(--add-icon-opacity, 1);
    }
  }
}
</style>
