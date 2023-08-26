<template>
  <img
    :src="user?.profileImgSrc || NotFoundAqua"
    alt="프로필 사진"
    class="ProfileImg"
  />
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
.ProfileImg {
  border-radius: 50%;
  object-fit: cover;
}
</style>
