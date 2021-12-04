<template>
  <router-view v-slot="{ Component }">
    <vueflix-header v-if="isNotAnimeView || !isMobile" />
    <bottom-tab-menu v-if="isMobile && isBottomTabVisible && isNotAnimeView" />
    <transition :name="transitionName" mode="out-in">
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
      isNotAnimeView: this.page !== "anime",
      transitionName: "fade",
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
  },
  watch: {
    $route(to) {
      this.page = this.$route.name;
      this.isBottomTabVisible = this.page !== "membership";
      document.title = this.$route.meta.title || process.env.VUE_APP_KR_NAME;
      this.isNotAnimeView = this.page !== "anime";
      if (this.isMobile && to.name === "anime") {
        this.transitionName = "anime-view";
      } else {
        this.transitionName = "fade";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("./common.scss");
.fade-enter-active,
.fade-leave-active {
  transition: all 100ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.anime-view-enter-active,
.anime-view-leave-active {
  transition: all 100ms ease-out;
}
.anime-view-enter-from {
  transform: translateX(100vw);
}
.anime-view-leave-to {
  opacity: 0;
}
</style>
