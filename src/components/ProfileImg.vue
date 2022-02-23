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
export default {
  name: "ProfileImg",
  props: {
    inputProfile: {
      type: String,
    },
  },
  data() {
    return {
      defaultProfile: require("../assets/NotFoundAqua.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  border-radius: 50%;
  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
