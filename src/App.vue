<template>
  <router-view v-slot="{ Component }">
    <vueflix-header />
    <bottom-tab-menu v-if="isMobile && isBottomTabVisible" />
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<script>
import VueflixHeader from "./components/VueflixHeader.vue";
import BottomTabMenu from "./components/BottomTabMenu.vue";
export default {
  name: "App",
  components: {
    VueflixHeader,
    BottomTabMenu,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768,
      isBottomTabVisible: this.page !== "membership",
      page: this.$route.name,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
  },
  watch: {
    $route() {
      this.page = this.$route.name;
      this.isBottomTabVisible = this.page !== "membership";
      this.headerVisible = this.page !== "my";
    },
  },
};
</script>

<style lang="scss">
@import url("./common.scss");
.fade-enter-active,
.fade-leave-active {
  transition: all 100ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
