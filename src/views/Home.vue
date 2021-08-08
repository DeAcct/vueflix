<template>
  <div class="wrap">
    <main>
      <slide />
      <div class="contents">
        <carousel :animeList="recentAnime" type="recent"></carousel>
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
import Carousel from "../components/Carousel.vue";
import Cookies from "js-cookie";
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
      recentAnime: [
        {
          title: "쟈히님은 기죽지 않아",
          episode: "1화",
          img: require("../assets/carousel_thumbnail_jahisama.jpg"),
          url: "#none",
          isMovie: false,
          progress: "100%",
        },
        {
          title: "그날 본 꽃의 이름을 우리는 아직 모른다",
          episode: "11화",
          img: require("../assets/carousel_thumbnail_anohana.jpg"),
          url: "#none",
          isMovie: false,
          progress: "90%",
        },
        {
          title: "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ 2기",
          episode: "12화",
          img: require("../assets/carousel_thumbnail_kaguya.jpg"),
          url: "#none",
          isMovie: false,
          progress: "50%",
        },
        {
          title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
          episode: "1화",
          img: require("../assets/carousel_thumbnail_tenslime.webp"),
          url: "#none",
          isMovie: false,
          progress: "30%",
        },
        {
          title: "이 멋진 세계에 축복을! 붉은 전설",
          episode: "없음",
          img: require("../assets/carousel_thumbnail_konosubaRed.jpg"),
          url: "#none",
          isMovie: true,
          progress: "10%",
        },
        {
          title: "역시 내 청춘 러브코메디는 잘못됐다.",
          episode: "1화",
          img: require("../assets/carousel_thumbnail_necheongko.webp"),
          url: "#none",
          isMovie: false,
          progress: "95%",
        },
      ],
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
  padding: 2.8rem 0;
}
@media screen and (min-width: 768px) {
  .contents {
    padding: 3.5rem 0;
  }
}
</style>
