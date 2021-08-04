<template>
  <vueflix-header currentPage="home"></vueflix-header>
  <main>
    <slide />
  </main>
  <modal
    label="vueflix-app-info"
    description="vueflix-app-description"
    title="뷰플릭스 앱 써보실래요?"
    yes="설치"
    :yesFunc="install"
    :noFunc="dismiss"
    v-if="isModalOpened"
  >
    써보면 압니다. 인생의 절반을 손해본 그 느낌...
  </modal>
</template>

<script>
import VueflixHeader from "../components/VueflixHeader.vue";
import Slide from "../components/Slide.vue";
import Modal from "../components/Modal.vue";
export default {
  name: "Home",
  components: {
    VueflixHeader,
    Slide,
    Modal,
  },
  data() {
    return {
      isModalOpened: false,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.isModalOpened = e;
      console.log("설치 준비됨");
    });
    window.addEventListener("appinstalled", () => {
      this.isModalOpened = false;
    });
  },
  methods: {
    async dismiss() {
      this.isModalOpened = false;
    },
    async install() {
      this.isModalOpened.prompt();
    },
  },
};
</script>

<style lang="scss"></style>
