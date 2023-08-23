<template>
  <RouterLink
    to="/notialert"
    :class="['notification', { 'notification--scrolled': isScroll }]"
  >
    <i class="icon" @click="searchBarOpen">
      <IconBase icon-name="알림">
        <IconNotification />
      </IconBase>
    </i>
  </RouterLink>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconNotification from "./icons/IconNotification.vue";
defineProps({
  isScroll: {
    type: Boolean,
  },
  iconColorDefault: {
    type: String,
  },
  iconColorFill: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: center;
  .icon {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: v-bind("iconColorDefault");
    transition: background-color 150ms ease-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  &--scrolled .icon {
    color: v-bind("iconColorFill");
  }
}
</style>
