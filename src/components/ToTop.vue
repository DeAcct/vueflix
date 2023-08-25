<template>
  <button class="ToTop" @click="toTop">
    <i class="ToTop__Icon">
      <IconBase>
        <IconArrowPrev />
      </IconBase>
    </i>
    <span class="ToTop__Text">맨 위로</span>
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
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  bottom: 2rem;
  left: 50%;
  z-index: 100;
  background-color: hsl(var(--theme-500));
  border-radius: 9999px;
  box-shadow: var(--box-shadow);
  color: #fff;
  &__Icon {
    color: #fff;
    transform: rotate(90deg);
    margin-right: 1rem;
  }
  &__Text {
    color: #fff;
    font-weight: 700;
  }
}
</style>
