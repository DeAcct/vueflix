<template>
  <div class="wrap">
    <main>
      <slide />
      <div class="contents">
        <carousel :animeList="recentAnime" type="recent">최근 본 애니</carousel>
        <carousel :animeList="dailyAnime" type="daily">요일별 신작</carousel>
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
      dailyAnime: [
        {
          day: "월",
          animes: [
            {
              title: "도쿄 리벤저스 part 2",
              img: require("../assets/carousel_thumbnail_tokyorevenger.webp"),
              url: "#none",
            },
            {
              title: "사신 도련님과 검은 메이드",
              img: require("../assets/carousel_thumbnail_blackmaid.webp"),
              url: "#none",
            },
            {
              title: "아이돌리쉬 세븐 Third BEAT!",
              img: require("../assets/carousel_thumbnail_idolish.webp"),
              url: "#none",
            },
            {
              title: "디사이드 트로이메라이",
              img: require("../assets/carousel_thumbnail_decide.webp"),
              url: "#none",
            },
            {
              title: "드래곤 퀘스트 : 다이의대모험 part 4",
              img: require("../assets/carousel_thumbnail_dragonquest.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "화",
          animes: [
            {
              title: "우라미치 선생님",
              img: require("../assets/carousel_thumbnail_uramichi.webp"),
              url: "#none",
            },
            {
              title: "우리들의 리메이크",
              img: require("../assets/carousel_thumbnail_bokutachi.webp"),
              url: "#none",
            },
            {
              title: "아라카와 언더 더 브리지",
              img: require("../assets/carousel_thumbnail_arakawa.webp"),
              url: "#none",
            },
            {
              title: "RE-MAIN",
              img: require("../assets/carousel_thumbnail_RE-MAIN.webp"),
              url: "#none",
            },
            {
              title: "현실주의 용사의 왕국 재건기",
              img: require("../assets/carousel_thumbnail_realism.webp"),
              url: "#none",
            },
            {
              title: "마기아 레코드 : 마법소녀 마도카★마기카 외전 세컨드 시즌",
              img: require("../assets/carousel_thumbnail_madoka.webp"),
              url: "#none",
            },
            {
              title: "쓰르라미 울 적에 졸",
              img: require("../assets/carousel_thumbnail_sururami.webp"),
              url: "#none",
            },
            {
              title: "만난 지 5초만에 배틀",
              img: require("../assets/carousel_thumbnail_5seconds.webp"),
              url: "#none",
            },
            {
              title: "킹덤 3기 part 2",
              img: require("../assets/carousel_thumbnail_kingdom3.webp"),
              url: "#none",
            },
            {
              title: "겟타 로보 아크",
              img: require("../assets/carousel_thumbnail_getta.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "수",
          animes: [
            {
              title: "나의 히어로 아카데미아 5기",
              img: require("../assets/carousel_thumbnail_akademia5.webp"),
              url: "#none",
            },
            {
              title: "탐정은 이미 죽었다.",
              img: require("../assets/carousel_thumbnail_shindeiru.webp"),
              url: "#none",
            },
            {
              title: "그녀도 여친",
              img: require("../assets/carousel_thumbnail_kanokano.webp"),
              url: "#none",
            },
            {
              title: "BLUE REFLECTION RAY part 2",
              img: require("../assets/carousel_thumbnail_reflection.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "목",
          animes: [
            {
              title: "코바야시네 메이드래곤 S",
              img: require("../assets/carousel_thumbnail_kobayashis.webp"),
              url: "#none",
            },
            {
              title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
              img: require("../assets/carousel_thumbnail_tenslime2_title.webp"),
              url: "#none",
            },
            {
              title: "불멸의 그대에게 part 2",
              img: require("../assets/carousel_thumbnail_infinite_part2.webp"),
              url: "#none",
            },
            {
              title: "러브 라이브! 슈퍼스타!!",
              img: require("../assets/carousel_thumbnail_lovelivesuperstar.webp"),
              url: "#none",
            },
            {
              title: "가극 소녀!!",
              img: require("../assets/carousel_thumbnail_gaguksonyeo.webp"),
              url: "#none",
            },
            {
              title: "NIGHT HEAD 2041",
              img: require("../assets/carousel_thumbnail_nighthead2041.webp"),
              url: "#none",
            },
            {
              title: "치트 약사의 슬로 라이프 -이세계에 만들자 드러그 스토어-",
              img: require("../assets/carousel_thumbnail_drugstore.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "금",
          animes: [
            {
              title: "후르츠 바스켓 더 파이널",
              img: require("../assets/carousel_thumbnail_fruitbasketfinal.webp"),
              url: "#none",
            },
            {
              title: "달이 이끄는 이세계 여행",
              img: require("../assets/carousel_thumbnail_tsukimichi.webp"),
              url: "#none",
            },
            {
              title: "하얀 모래의 아쿠아톱",
              img: require("../assets/carousel_thumbnail_aquatop.webp"),
              url: "#none",
            },
            {
              title: "Sonny Boy",
              img: require("../assets/carousel_thumbnail_sonnyboy.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "토",
          animes: [
            {
              title: "바니타스의 수기",
              img: require("../assets/carousel_thumbnail_vanitas.webp"),
              url: "#none",
            },
            {
              title: "마이코네 행복한 밥상",
              img: require("../assets/carousel_thumbnail_maiko.webp"),
              url: "#none",
            },
            {
              title: "피치 보이 리버사이드",
              img: require("../assets/carousel_thumbnail_peachriver.webp"),
              url: "#none",
            },
          ],
        },
        {
          day: "일",
          animes: [
            {
              title:
                "여성향 게임의 파멸 플래그밖에 없는 악역 영애로 환생해버렸다... X",
              img: require("../assets/carousel_thumbnail_hamehura.webp"),
              url: "#none",
            },
            {
              title: "쟈히님은 기죽지 않아!",
              img: require("../assets/carousel_thumbnail_jahisama_title.webp"),
              url: "#none",
            },
            {
              title: "달의 요정 세일러 문 SuperS",
              img: require("../assets/carousel_thumbnail_sailormoonsupers.webp"),
              url: "#none",
            },
            {
              title: "나는 100만명의 목숨 위에 서 있다 2기",
              img: require("../assets/carousel_thumbnail_standing2.webp"),
              url: "#none",
            },
          ],
        },
      ],
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
