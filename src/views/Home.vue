<template>
  <div class="wrap">
    <main>
      <slide />
      <div class="contents">
        <carousel :animeList="recent" type="recent">최근 본 애니</carousel>
        <carousel type="daily">요일별 신작</carousel>
        <carousel
          v-for="recommend in recommendAnime"
          :key="recommend.recommendTitle"
          :animeList="recommend.list"
        >
          {{ recommend.recommendTitle }}
        </carousel>
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
      뷰플릭스를 더 빠르고 편리하게 이용할 수 있어요!
    </modal>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import Modal from "../components/Modal.vue";
import Carousel from "../components/Carousel.vue";
import Cookies from "js-cookie";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Slide,
    Modal,
    Carousel,
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
  computed: mapState({
    recent: (state) => state.anime.recentAnime,
    recommendAnime: (state) => state.anime.recommendAnime,
  }),
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 2.8rem 0 5.6rem;
}
@media screen and (min-width: 768px) {
  .contents {
    padding-top: 3.6rem;
  }
}
</style>
