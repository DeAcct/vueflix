<template>
  <div class="wrap">
    <main>
      <slide />
      <div class="contents">
        <recent-carousel></recent-carousel>
      </div>
    </main>
    <modal
      label="vueflix-app-info"
      description="vueflix-app-description"
      title="뷰플릭스 앱 써보실래요?"
      yes="설치"
      no="다음에"
      :yesFunc="install"
      :noFunc="dismiss"
      v-if="isModalOpened"
    >
      써보면 압니다. 인생의 절반을 손해본 그 느낌...
    </modal>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import Modal from "../components/Modal.vue";
import RecentCarousel from "../components/RecentCarousel.vue";
import Cookies from "js-cookie";
export default {
  name: "Home",
  components: {
    Slide,
    Modal,
    RecentCarousel,
  },
  data() {
    return {
      isModalOpened: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.isModalOpened = e;
      }
    });
    window.addEventListener("appinstalled", () => {
      this.isModalOpened = null;
    });
  },
  methods: {
    async dismiss() {
      Cookies.set("add-to-home-screen", null, { expires: 15 });
      this.isModalOpened = null;
    },
    async install() {
      this.isModalOpened.prompt();
    },
  },
};
</script>

<style lang="scss">
.contents {
  padding-top: 3.5rem;
}
</style>
