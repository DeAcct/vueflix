<template>
  <i
    class="PurchaseMotion"
    @mousedown="downTrigger"
    @mouseup="upTrigger"
    @touchstart.passive="downTrigger"
    @touchend="upTrigger"
  >
    <IconBase class="PurchaseMotion__Icon">
      <IconPurchase :is-active />
    </IconBase>
  </i>
</template>

<script setup>
import { ref } from "vue";

import IconBase from "@/components/IconBase.vue";
import IconPurchase from "@/components/icons/IconPurchase.vue";

const isActive = ref(false);
function downTrigger() {
  isActive.value = true;
}
function upTrigger() {
  isActive.value = false;
}
</script>

<style lang="scss" scoped>
.PurchaseMotion {
  width: 2.4rem;
  height: 2.4rem;
  &__Icon {
    fill: transparent;
    stroke: var(--anime-layout-text);
    color: var(--anime-layout-text);
    stroke-width: 2px;
    stroke-linecap: round;
  }
}
</style>
