<template>
  <div class="profile">
    <img
      :src="user?.profileImgSrc || NotFoundAqua"
      alt="프로필 사진"
      class="profile__img"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import NotFoundAqua from "../assets/NotFoundAqua.svg";

defineProps({
  inputProfile: {
    type: String,
  },
});

const store = useStore();
const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
