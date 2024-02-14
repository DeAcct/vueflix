<template>
  <span class="LoadAnimation">
    <span class="LoadAnimation__Circle"></span>
  </span>
</template>

<style lang="scss" scoped>
.LoadAnimation {
  &__Circle {
    display: block;
    background-color: rgba(255 255 255 / 0.5);
    animation: load-animation 600ms infinite alternate-reverse ease-in-out;
    border-radius: 50%;
    padding-bottom: 100%;
  }
}

@keyframes load-animation {
  from {
    scale: 0 0 0;
  }
  to {
    scale: 1 1 1;
  }
}
</style>
