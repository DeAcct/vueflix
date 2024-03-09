<template>
  <component :is="component" class="ProfileCombo">
    <span class="ProfileCombo__UserName">{{
      store.user ? store.user.nickname : "게스트"
    }}</span>
    <OptimizedMedia
      :src="store.profileImg.name"
      :alt="`${store.user.nickname} 프로필 사진`"
      class="ProfileCombo__Profile"
      v-if="store.user"
      skelleton
    />
    <img :src="Aqua" v-else class="ProfileCombo__Profile" />
  </component>
</template>

<script setup>
import { useAuth } from "../store/auth";
import OptimizedMedia from "./OptimizedMedia.vue";

import Aqua from "@/assets/aqua.svg";

const store = useAuth();

const props = defineProps({
  component: {
    type: String,
    default: "RouterLink",
  },
});
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
    --aspect-ratio: 100%;
    --radius: 50%;
    border-radius: 50%;
  }
}
</style>
