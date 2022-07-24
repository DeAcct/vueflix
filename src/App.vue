<template>
  <router-view v-slot="{ Component }">
    <vueflix-header
      v-if="headerVisible"
      :is-mobile-size="isMobileSize"
      :is-touch-device="isTouchDevice"
    />
    <bottom-tab-menu v-if="$route.meta.bottomTabMenu && isMobileSize" />
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
    const screenSizeQuery = window.matchMedia("screen and (max-width: 820px)");
    const touchDeviceQuery = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    );
    return {
      isPlayer: false,
      screenSizeQuery,
      touchDeviceQuery,
      isMobileSize: screenSizeQuery.matches,
      isTouchDevice: touchDeviceQuery.matches,
    };
  },
  methods: {
    setUser() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userRef = doc(this.db, "user", user.uid);
          const userSnap = await getDoc(userRef);
          this.$store.commit("auth/setUser", userSnap.data());
        } else {
          this.$store.commit("auth/setUser", undefined);
        }
      });
      if (this.user) {
        const userDoc = doc(this.db, "user", this.user.uid);
        onSnapshot(userDoc, async () => {
          const userSnap = await getDoc(userDoc);
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
      this.setDeviceInfo();
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
    setDeviceInfo() {
      this.screenSizeQuery.addEventListener("change", (e) => {
        this.isMobileSize = e.matches;
      });
      this.touchDeviceQuery.addEventListener("change", (e) => {
        this.isTouchDevice = e.matches;
      });
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
      return this.$route.meta.appBar && !this.isPlayer;
    },
    db: () => getFirestore(),
  },
};
</script>

<style lang="scss">
@import "./common.scss";
</style>
