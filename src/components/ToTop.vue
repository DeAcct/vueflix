<template>
  <button class="ToTop" @click="toTop">
    <i class="ToTop__Icon">
      <IconBase>
        <IconArrowPrev />
      </IconBase>
    </i>
  </button>
</template>

<script setup>
import IconBase from "../components/IconBase.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";

function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style lang="scss" scoped>
.ToTop {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  color: #fff;
  &__Icon {
    display: flex;
    color: #fff;
    transform: rotate(90deg);
  }
}
</style>
