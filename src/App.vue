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
    $route(to, from) {
      this.page = this.$route.name;
      this.isBottomTabVisible = this.page !== "membership";
      document.title = this.$route.meta.title || process.env.VUE_APP_KR_NAME;
      this.isNotAnimeView = this.page !== "anime";
      if (this.isMobile && to.name === "anime") {
        this.transitionName = "anime-to";
      } else if (this.isMobile && from.name === "anime") {
        this.transitionName = "anime-from";
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
.fade-leave-active,
.anime-to-enter-active,
.anime-to-leave-active,
.anime-from-enter-active,
.anime-from-leave-active {
  transition: all 100ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.anime-to-enter-from {
  transform: translateX(100vw);
}
.anime-to-leave-to {
  opacity: 0;
}

.anime-from-enter-from {
  opacity: 0;
}
.anime-from-leave-to {
  transform: translateX(100vw);
}
</style>
