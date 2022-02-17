<template>
  <router-link
    to="/notialert"
    :class="['notification', { 'notification--scrolled': isScroll }]"
  >
    <i class="icon" @click="searchBarOpen">
      <icon-base icon-name="알림">
        <icon-notification />
      </icon-base>
    </i>
  </router-link>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconNotification from "./icons/IconNotification.vue";

export default {
  name: "NotificationActionBtn",
  props: {
    isScroll: {
      type: Boolean,
    },
  },
  components: {
    IconBase,
    IconNotification,
  },
};
</script>

<style lang="scss" scoped>
.notification {
  display: block;
  .icon {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: background-color 150ms ease-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  &--scrolled .icon {
    color: var(--text-800);
  }
}
.fill .notification .icon {
  color: inherit;
  &:hover {
    background-color: var(--theme-100);
    color: var(--theme-500);
  }
}
</style>
