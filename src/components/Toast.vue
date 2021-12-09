<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.toast {
  padding: 1rem 1.5rem;
  border-radius: 10rem;
  background: rgba(0, 0, 0, 0.3);
}
</style>
