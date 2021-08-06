<template>
  <router-link to="/notification" class="notification">
    <i class="icon" @click="searchBarOpen">
      <icon-base iconName="검색">
        <icon-notification />
      </icon-base>
    </i>
  </router-link>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconNotification from "./icons/IconNotification.vue";

export default {
  name: "Notification",
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
