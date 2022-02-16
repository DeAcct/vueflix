<template>
  <router-view v-slot="{ Component }">
    <vueflix-header v-if="headerVisible" />
    <bottom-tab-menu v-if="bottomTabMenuVisible" />
    <transition name="fade">
      <component :is="Component" :key="$route.path"></component>
    </transition>
    <transition name="toast-show">
      <toast v-if="toastShown">{{ toastText }}</toast>
    </transition>
  </router-view>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VueflixHeader from "./components/VueflixHeader.vue";
import BottomTabMenu from "./components/BottomTabMenu.vue";
import Toast from "./components/Toast.vue";
import { mapState } from "vuex";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
export default {
  name: "App",
  components: {
    VueflixHeader,
    BottomTabMenu,
    Toast,
  },
  mounted() {
    const auth = getAuth();
    const db = getFirestore();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, "user", user.uid);
        const userSnap = await getDoc(userRef);
        this.$store.commit("auth/setUser", userSnap.data());
      } else {
        this.$store.commit("auth/setUser", undefined);
      }
    });
    if (this.user) {
      this.unsub = onSnapshot(doc(db, "user", this.user.uid), function (doc) {
        this.$store.commit("auth/setUser", doc.data());
      });
    }
    this.init();

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
  },
  unmounted() {
    if (this.user) {
      this.unsub();
    }

    window.removeEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
  },
  data() {
    return {
      headerVisible: this.$route.meta.appBar || !this.isMobile,
      bottomTabMenuVisible: this.$route.meta.bottomTabMenu && this.isMobile,
      isMobile: window.innerWidth <= 768,
      isPlayer: false,
      unsub: undefined,
    };
  },
  methods: {
    init() {
      this.isPlayer = this.$route.name === "player";
      this.headerVisible =
        (this.$route.meta.appBar || !this.isMobile) && !this.isPlayer;
      this.bottomTabMenuVisible =
        this.$route.meta.bottomTabMenu && this.isMobile;
      document.title = this.$route.meta.title || process.env.VUE_APP_KR_NAME;
      if (!this.isPlayer && this.$route.name !== "anime") {
        this.$store.commit("currentAnimeInfo/setCurrentAnimeInfo", undefined);
      }

      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
        this.$store.commit("theme/setTheme", currentTheme);
      } else {
        const deviceTheme = window.matchMedia("(prefers-color-scheme:dark)")
          .matches
          ? "dark"
          : "light";
        console.log(deviceTheme);
        this.$store.commit("theme/setTheme", deviceTheme);
      }
      const $app = document.getElementById("app");
      $app.dataset.theme = this.theme;
    },
  },
  watch: {
    $route(to, from) {
      this.init();
      if (this.isMobile && to.name === "anime") {
        this.transitionName = "anime-to";
      } else if (this.isMobile && from.name === "anime") {
        this.transitionName = "anime-from";
      } else {
        this.transitionName = "fade";
      }
    },
    isMobile() {
      this.init();
    },
    theme() {
      const $app = document.getElementById("app");
      $app.dataset.theme = this.theme;
    },
  },
  computed: mapState({
    toastText: (state) => state.toast.text,
    toastShown: (state) => state.toast.isShown,
    user: (state) => state.auth.user,
    theme: (state) => state.theme.theme,
  }),
};
</script>

<style lang="scss">
@import "./common.scss";
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
