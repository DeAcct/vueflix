<template>
  <router-view v-slot="{ Component }">
    <vueflix-header v-if="isNotAnimeView || !isMobile" />
    <bottom-tab-menu v-if="isMobile && isBottomTabVisible && isNotAnimeView" />
    <transition :name="transitionName">
      <component :is="Component" :key="$route.path"></component>
    </transition>
    <transition name="toast-show">
      <toast v-if="toastShown">{{ toastText }}</toast>
    </transition>
  </router-view>
</template>

<script>
import VueflixHeader from "./components/VueflixHeader.vue";
import BottomTabMenu from "./components/BottomTabMenu.vue";
import Toast from "./components/Toast.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    VueflixHeader,
    BottomTabMenu,
    Toast,
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
  computed: mapState({
    toastText: (state) => state.toast.text,
    toastShown: (state) => state.toast.isShown,
  }),
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
  transition: all 150ms ease-out;
  transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.anime-to-enter-from {
  transform: translateY(-5rem);
  opacity: 0;
}
.anime-to-leave-to {
  opacity: 0;
}

.anime-from-enter-from {
  opacity: 0;
}
.anime-from-leave-to {
  opacity: 0;
  transform: translateY(-5rem);
}

.toast {
  position: fixed;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
}

.toast-show-enter-active .toast-show-leave-active {
  transition: all 150ms ease-out cubic-bezier(0.5, 0, 0.5, 1.3);
}

.toast-show-enter-from,
.toast-show-leave-to {
  transform: translateY(5rem);
  opacity: 0;
}
</style>
