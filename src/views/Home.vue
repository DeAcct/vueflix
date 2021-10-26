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
      recommendAnime: [
        {
          recommendTitle: "방황하는 이 시대의 청춘들에게 바칩니다",
          list: [
            {
              title: "4월은 너의 거짓말",
              img: require("../assets/carousel_thumbnail_kimiuso.jpg"),
              url: "#none",
            },
            {
              title: "SHIROBAKO",
              img: require("../assets/carousel_thumbnail_shirobako.jpg"),
              url: "#none",
            },
            {
              title: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
              img: require("../assets/carousel_thumbnail_butayarou.jpg"),
              url: "#none",
            },
            {
              title: "역시 내 청춘 러브코미디는 잘못됐다",
              img: require("../assets/carousel_thumbnail_necheongko_title.jpg"),
              url: "#none",
            },
            {
              title: "후르츠 바스켓 1기",
              img: require("../assets/carousel_thumbnail_fruitbasket.webp"),
              url: "#none",
            },
            {
              title: "바라카몬",
              img: require("../assets/carousel_thumbnail_barakamon.webp"),
              url: "#none",
            },
          ],
        },
        {
          recommendTitle: "가슴이 웅장해지는 메카닉",
          list: [
            {
              title: "SSSS.GRIDMAN",
              img: require("../assets/carousel_thumbnail_gridman.webp"),
              url: "#none",
            },
            {
              title: "플래닛 위드",
              img: require("../assets/carousel_thumbnail_planetwith.webp"),
              url: "#none",
            },
            {
              title: "기동전사 건담 디 오리진 1 : 푸른 눈의 캬스발",
              img: require("../assets/carousel_thumbnail_gundam.webp"),
              url: "#none",
            },
            {
              title: "달링 인 더 프랑키스",
              img: require("../assets/carousel_thumbnail_dalinginthefranxx.webp"),
              url: "#none",
            },
            {
              title: "(무삭제) 미소의 대가",
              img: require("../assets/carousel_thumbnail_smile.webp"),
              url: "#none",
            },
          ],
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
  computed: mapState({
    recent: (state) => state.anime.recentAnime,
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
