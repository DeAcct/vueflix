<template>
  <RouterLink class="ProfileCombo">
    <span class="ProfileCombo__UserName">{{
      false ? user.nickname : "게스트"
    }}</span>
    <ProfileImg class="ProfileCombo__Profile" />
  </RouterLink>
</template>

<script setup>
// import { computed } from "vue";
// import { useStore } from "vuex";

import ProfileImg from "./ProfileImg.vue";

// const store = useStore();
// const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.ProfileCombo {
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 9999px;

  transition: border-color 150ms ease-out;
  &:focus-visible {
    border-color: hsl(var(--theme-500));
  }

  &__UserName {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    margin-top: 0.2rem;
  }
  &__Profile {
    width: var(--profile-size);
    height: var(--profile-size);
  }
}
</style>
