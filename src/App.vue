<template>
  <router-view v-slot="{ Component }">
    <vueflix-header v-if="headerVisible" />
    <bottom-tab-menu v-if="this.$route.meta.bottomTabMenu" />
    <component :is="Component" :key="$route.path"></component>
  </router-view>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VueflixHeader from "./components/VueflixHeader.vue";
import BottomTabMenu from "./components/BottomTabMenu.vue";
import { mapState } from "vuex";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
export default {
  name: "App",
  components: {
    VueflixHeader,
    BottomTabMenu,
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
      const userDoc = doc(db, "user", this.user.uid);
      this.unsub = onSnapshot(userDoc, function () {
        this.$store.commit("auth/setUser", userDoc.data());
      });
    }
    this.init();

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 1024;
    });
  },
  unmounted() {
    if (this.user) {
      this.unsub;
    }

    window.removeEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 1024;
    });
  },
  data() {
    return {
      headerVisible: this.$route.meta.appBar || !this.isMobile,
      isMobile: window.innerWidth <= 1024,
      isPlayer: false,
      unsub: undefined,
    };
  },
  methods: {
    init() {
      this.isPlayer = this.$route.name === "player";
      this.headerVisible =
        (this.$route.meta.appBar || !this.isMobile) && !this.isPlayer;
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
        this.$store.commit("theme/setTheme", deviceTheme);
      }
      const $app = document.getElementById("app");
      $app.dataset.theme = this.theme;
    },
  },
  watch: {
    $route() {
      this.init();
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
    user: (state) => state.auth.user,
    theme: (state) => state.theme.theme,
  }),
};
</script>

<style lang="scss">
@import "./common.scss";
@media screen and (min-width: 769px) {
  .bottom-tab-menu {
    display: none;
  }
}
</style>
