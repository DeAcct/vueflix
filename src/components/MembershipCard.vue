<template>
  <RouterLink to="#none" class="MembershipCard">
    <div class="row-top">
      <slot name="method"></slot>
      <i class="icon">
        <IconBase>
          <IconArrowNext />
        </IconBase>
      </i>
    </div>
    <slot name="sub"></slot>
  </RouterLink>
</template>

<script setup>
import { useEventListener } from "@vueuse/core";
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import { reactive } from "vue";

useEventListener(window, "deviceorientation", cardInteraction);
const tilt = reactive({
  beta: 0,
  gamma: 0,
});
function cardInteraction(e) {
  tilt.beta = `${e.beta * 0.001}deg`;
  tilt.gamma = `${e.gamma * 0.001}deg`;
}
</script>

<style lang="scss" scoped>
.MembershipCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc((100vw - 4rem) / 1.58);
  padding: 2rem 3.5rem;
  border-radius: 0.3rem;
  transform: perspective(3px) rotateX(v-bind("tilt.beta"))
    rotateY(v-bind("tilt.gamma"));
  transition: transform 150ms ease-out;
  .row-top {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    color: #fff;
  }
}

@media screen and (min-width: 768px) {
  .MembershipCard {
    width: 37.5rem;
    height: calc(37.5rem / 1.58);
  }
}
</style>
