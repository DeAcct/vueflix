<template>
  <router-view v-slot="{ Component }">
    <vueflix-header v-if="headerVisible" :is-mobile="isMobile" />
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
    this.init();
  },
  data() {
    return {
      isMobile: false,
      isPlayer: false,
      unsub: undefined,
    };
  },
  methods: {
    setUser() {
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
    },
    init() {
      this.setUser();
      this.isPlayer = this.$route.name === "player";
      if (!this.isPlayer && this.$route.name !== "anime") {
        this.clearStoredAnimeData();
      }
      this.changeTitle();
      this.setTheme();
    },
    changeTitle() {
      document.title = this.$route.meta.title || import.meta.env.VITE_KR_NAME;
    },
    clearStoredAnimeData() {
      this.$store.commit("currentAnimeInfo/setCurrentAnimeInfo", undefined);
    },
    setTheme() {
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
      this.isPlayer = this.$route.name === "player";
    },
    theme() {
      const $app = document.getElementById("app");
      $app.dataset.theme = this.theme;
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      theme: (state) => state.theme.theme,
    }),
    headerVisible() {
      return (this.$route.meta.appBar || !this.isMobile) && !this.isPlayer;
    },
    isMobile() {
      const deviceQuery = window.matchMedia(
        "(hover: none) and (pointer: coarse), screen and (max-width: 820px)"
      ).matches;
      return deviceQuery;
    },
  },
};
</script>

<style lang="scss">
@import "./common.scss";
@media (hover: hover) and (pointer: fine), screen and (min-width: 821px) {
  .bottom-tab-menu {
    display: none;
  }
}
</style>
