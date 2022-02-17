<template>
  <div class="profile">
    <img :src="inputProfile || defaultProfile" alt="프로필 사진" />
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
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
