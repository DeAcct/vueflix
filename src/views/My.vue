<template>
  <div class="wrap">
    <div class="user-info" v-if="isMyRoot">
      <profile />
      <strong class="nickname">로렘입숨사딸라</strong>
      <i>example1234@example.com</i>
      <div class="history"></div>
      <router-link to="/my/membership">
        멤버십(테스트 링크)
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
export default {
  components: {
    Profile,
  },
  data() {
    return {
      isMyRoot: this.$route.name === "my",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
  width: 100%;
}
a {
  display: block;
  margin-top: 7rem;
  font-size: 1.5rem;
}
</style>
