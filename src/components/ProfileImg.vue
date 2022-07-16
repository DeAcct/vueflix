<template>
  <div class="profile">
    <img
      :src="inputProfile || defaultProfile"
      alt="프로필 사진"
      class="profile__img"
    />
  </div>
</template>

<script>
import NotFoundAqua from "../assets/NotFoundAqua.svg";

export default {
  name: "ProfileImg",
  props: {
    inputProfile: {
      type: String,
    },
  },
  data() {
    return {
      defaultProfile: NotFoundAqua,
    };
  },
};
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
