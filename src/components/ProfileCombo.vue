<template>
  <component :is="component" class="ProfileCombo">
    <!-- <span class="blind">{{ store.user ? store.user.nickname : "게스트" }}</span> -->
    <slot name="text" v-bind="nickname"></slot>
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
import { computed } from "vue";

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

const nickname = computed(() => (store.user ? store.user.nickname : "게스트"));
</script>

<style lang="scss" scoped>
.ProfileCombo {
  display: flex;
  align-items: center;
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
    border: var(--profile-border);
  }
}
</style>
