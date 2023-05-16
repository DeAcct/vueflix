<template>
  <router-view v-slot="{ Component }">
    <h1 class="blind">뷰플릭스</h1>
    <vueflix-header v-if="route.meta.appBar" :is-touch-device="isTouchDevice" />
    <bottom-tab-menu v-if="route.meta.bottomTabMenu && isTouchDevice" />
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component"></component>
    </transition>
    <toast-renderer />
  </router-view>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VueflixHeader from "./components/VueflixHeader.vue";
import BottomTabMenu from "./components/BottomTabMenu.vue";
import { useStore } from "vuex";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ToastRenderer from "./components/ToastRenderer.vue";
import { useRoute } from "vue-router";
import { computed, ref, onMounted } from "vue";

const route = useRoute();
const store = useStore();

function setUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = doc(getFirestore(), "user", user.uid);
      const userSnap = await getDoc(userRef);
      store.commit("auth/setUser", userSnap.data());
    } else {
      store.commit("auth/setUser", undefined);
    }
  });
}

function changeTitle() {
  document.title = route.meta.title || import.meta.env.VITE_KR_NAME;
}

const theme = computed(() => store.state.theme);

function setTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    store.commit("theme/setTheme", currentTheme);
  } else {
    const deviceTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    store.commit("theme/setTheme", deviceTheme);
  }
  const $app = document.getElementById("app");
  $app.dataset.theme = theme.value.theme;
}

const touchDeviceQuery = window.matchMedia(
  "(hover: none) and (pointer: coarse)"
);
const isTouchDevice = ref(touchDeviceQuery.matches);
function setDeviceInfo() {
  touchDeviceQuery.addEventListener("change", (e) => {
    isTouchDevice.value = e.matches;
  });
}

function setViewPort() {
  document.documentElement.style.setProperty("--vw", window.innerWidth / 100);
  document.documentElement.style.setProperty("--vh", window.innerHeight / 100);
}

onMounted(() => {
  setUser();
  changeTitle();
  setDeviceInfo();
  setTheme();
  setViewPort();
});
</script>
