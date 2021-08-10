<template>
  <div class="wrap">
    <main>
      <slide />
      <div class="contents">
        <carousel :animeList="recentAnime" type="recent" title="최근 본 작품" />
        <carousel :animeList="dailyAnime" title="요일별 신작">
          <day-selector />
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
      써보면 압니다. 인생의 절반을 손해본 그 느낌...
    </modal>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import Modal from "../components/Modal.vue";
import Carousel from "../components/Carousel.vue";
import Cookies from "js-cookie";
import DaySelector from "../components/DaySelector.vue";
export default {
  name: "Home",
  components: {
    Slide,
    Modal,
    Carousel,
    DaySelector,
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
              img: "",
              url: "#none",
            },
            {
              title: "사신 도련님과 검은 메이드",
              img: "",
              url: "#none",
            },
            {
              title: "아이돌리쉬 세븐 Third BEAT!",
              img: "",
              url: "#none",
            },
            {
              title: "디사이드 트로이메라이",
              img: "",
              url: "#none",
            },
            {
              title: "드래곤 퀘스트 : 다이의대모험 part 4",
              img: "",
              url: "#none",
            },
          ],
        },
        {
          day: "화",
          animes: [
            {
              title: "우라미치 선생님",
              img: "",
              url: "#none",
            },
            {
              title: "우리들의 리메이크",
              img: "",
              url: "#none",
            },
            {
              title: "아라카와 언더 더 브리지",
              img: "",
              url: "#none",
            },
            {
              title: "RE-MAIN",
              img: "",
              url: "#none",
            },
            {
              title: "현실주의 용사의 왕국 재건기",
              img: "",
              url: "#none",
            },
            {
              title:
                "마기아 레코드 : 마법소녀 마도카&star;마기카 외전 세컨드 시즌",
              img: "",
              url: "#none",
            },
            {
              title: "쓰르라미 울 적에 졸",
              img: "",
              url: "#none",
            },
            {
              title: "만난 지 5초만에 배틀",
              img: "",
              url: "#none",
            },
            {
              title: "킹덤 3기 part 2",
              img: "",
              url: "#none",
            },
            {
              title: "겟타 로보 아크",
              img: "",
              url: "#none",
            },
          ],
        },
        {
          day: "수",
          animes: [
            {
              title: "나의 히어로 아카데미아 5기",
              img: "",
              url: "#none",
            },
            {
              title: "탐정은 이미 죽었다.",
              img: "",
              url: "#none",
            },
            {
              title: "그녀도 여친",
              img: "",
              url: "#none",
            },
            {
              title: "뉴 꾸러기 닌자 토리 리턴즈",
              img: "",
              url: "#none",
            },
            {
              title: "BLUE REFLECTION RAY part 2",
              img: "",
              url: "#none",
            },
          ],
        },
        {
          day: "목",
          animes: [
            {
              title: "코바야시네 메이드래곤 S",
              img: "",
              url: "#none",
            },
            {
              title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
              img: "",
              url: "#none",
            },
            {
              title: "불멸의 그대에게 part 2",
              img: "",
              url: "#none",
            },
            {
              title: "(자막) 환상게임",
              img: "",
              url: "#none",
            },
            {
              title: "러브 라이브! 슈퍼스타!!",
              img: "",
              url: "#none",
            },
            {
              title: "가극 소녀!!",
              img: "",
              url: "#none",
            },
            {
              title: "여신 기숙사의 사감군",
              img: "",
              url: "#none",
            },
            {
              title: "NIGHT HEAD 2041",
              img: "",
              url: "#none",
            },
            {
              title: "치트 약사의 슬로 라이프 -이세계에 만들자 드러그 스토어-",
              img: "",
              url: "#none",
            },
            {
              title: "도깨비 언덕에 왜 왔니?",
              img: "",
              url: "#none",
            },
            {
              title: "(더빙) 요리왕 비룡 더 마스터 part 2",
              img: "",
              url: "#none",
            },
            {
              title: "모여라! 고마짱 시즌 4",
              img: "",
              url: "#none",
            },
          ],
        },
        {
          day: "금",
          animes: [
            {
              title: "은혼 1기",
              img: "",
              url: "#none",
            },
            {
              title: "후르츠 바스켓 더 파이널",
              img: "",
              url: "#none",
            },
            {
              title: "달이 이끄는 이세계 여행",
              img: "",
              url: "#none",
            },
            {
              title: "하얀 모래의 아쿠아톱",
              img: "",
              url: "#none",
            },
            {
              title: "Sonny Boy",
              img: "",
              url: "#none",
            },
          ],
        },
        {
          day: "토",
          animes: [
            {
              title: "바니타스의 수기",
              img: "",
              url: "#none",
            },
            {
              title: "(자막) 명탐정 코난 2021",
              img: "",
              url: "#none",
            },
            {
              title: "(더빙) 토리코 1기 part 1",
              img: "",
              url: "#none",
            },
            {
              title: "마이코네 행복한 밥상",
              img: "",
              url: "#none",
            },
            {
              title: "피치 보이 리버사이드",
              img: "",
              url: "#none",
            },
            {
              title: "삶은 아이돌",
              img: "",
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
              img: "",
              url: "#none",
            },
            {
              title: "쟈히님은 기죽지 않아!",
              img: "",
              url: "#none",
            },
            {
              title: "달의 요정 세일러 문 SuperS",
              img: "",
              url: "#none",
            },
            {
              title: "나는 100만명의 목숨 위에 서 있다 2기",
              img: "",
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
