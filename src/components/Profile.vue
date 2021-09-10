<template>
  <div class="profile">
    <img :src="src" alt="프로필 사진" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      src: require("../assets/NotFoundAqua.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 50%;
  overflow: hidden;
}
</style>
