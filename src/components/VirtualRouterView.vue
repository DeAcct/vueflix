<template>
  <div class="VirtualRouterView">
    <Transition name="router-view">
      <slot name="first"></slot>
      <slot name="second"></slot>
    </Transition>
  </div>
</template>
