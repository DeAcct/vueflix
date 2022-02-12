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
      type="yes-no"
      :yesFunc="install"
      :noFunc="dismiss"
      :class="{ show: isModalOpened }"
      v-if="isModalOpened"
    >
      <template v-slot:title>뷰플릭스 앱 써보실래요?</template>
      <template v-slot:description>
        홈 화면에서 더 빠르게 만나볼 수 있어요
      </template>
      <template v-slot:no-string>나중에</template>
      <template v-slot:yes-string>설치</template>
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
      isModalOpened: false,
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
  background-color: var(--bg-100);
}
.modal {
  transition: 150ms ease-out;
  transform: translateY(100vh);
  bottom: 5.6rem;
  &.show {
    transform: translateY(0);
  }
}
@media screen and (min-width: 768px) {
  .contents {
    padding-top: 3.6rem;
  }
  .modal {
    top: 0;
    bottom: auto;
    transform: none;
    transition: 150ms ease-out;
  }
}
</style>
