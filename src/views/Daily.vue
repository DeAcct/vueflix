<template>
  <div class="wrap">
    <main>
      <service-noti-box :notiItems="NotiItems" />
      <div class="inner">
        <div class="day-selector-holder">
          <day-selector @todayString="initAnimeList" />
        </div>
        <h3 class="blind">애니 목록</h3>
        <div class="daily-new-content">
          <ul class="daily-contents">
            <vertical-card-item
              v-for="anime in filteredList"
              :key="anime.title"
              :title="anime.title"
              :img="anime.img"
              :url="anime.url"
              :genre="anime.genre"
            />
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ServiceNotiBox from "../components/ServiceNotiBox.vue";
import DaySelector from "../components/DaySelector.vue";
import VerticalCardItem from "../components/VerticalCardItem.vue";
export default {
  name: "Daily",
  components: {
    ServiceNotiBox,
    DaySelector,
    VerticalCardItem,
  },
  data() {
    return {
      NotiItems: [
        {
          type: "업로드 지연",
          noti:
            "<러브 라이브! 슈퍼스타!!> 6화는 일본 현지 방영 일정으로 인해 휴방되었습니다. 서비스 이용에 참고 부탁드리겠습니다.",
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
              genre: "액션 / 드라마",
            },
            {
              title: "사신 도련님과 검은 메이드",
              img: require("../assets/carousel_thumbnail_blackmaid.webp"),
              url: "#none",
              genre: "로맨스 / 개그",
            },
            {
              title: "아이돌리쉬 세븐 Third BEAT!",
              img: require("../assets/carousel_thumbnail_idolish.webp"),
              url: "#none",
              genre: "아이돌 / 음악",
            },
            {
              title: "디사이드 트로이메라이",
              img: require("../assets/carousel_thumbnail_decide.webp"),
              url: "#none",
              genre: "판타지 / 액션",
            },
            {
              title: "드래곤 퀘스트 : 다이의대모험 part 4",
              img: require("../assets/carousel_thumbnail_dragonquest.webp"),
              url: "#none",
              genre: "판타지 / 액션",
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
              genre: "개그",
            },
            {
              title: "우리들의 리메이크",
              img: require("../assets/carousel_thumbnail_bokutachi.webp"),
              url: "#none",
              genre: "로맨스",
            },
            {
              title: "아라카와 언더 더 브리지",
              img: require("../assets/carousel_thumbnail_arakawa.webp"),
              url: "#none",
              genre: "SF / 드라마",
            },
            {
              title: "RE-MAIN",
              img: require("../assets/carousel_thumbnail_RE-MAIN.webp"),
              url: "#none",
              genre: "스포츠 / 치유",
            },
            {
              title: "현실주의 용사의 왕국 재건기",
              img: require("../assets/carousel_thumbnail_realism.webp"),
              url: "#none",
              genre: "판타지",
            },
            {
              title: "마기아 레코드 : 마법소녀 마도카★마기카 외전 세컨드 시즌",
              img: require("../assets/carousel_thumbnail_madoka.webp"),
              url: "#none",
              genre: "판타지 / 액션",
            },
            {
              title: "쓰르라미 울 적에 졸",
              img: require("../assets/carousel_thumbnail_sururami.webp"),
              url: "#none",
              genre: "공포",
            },
            {
              title: "만난 지 5초만에 배틀",
              img: require("../assets/carousel_thumbnail_5seconds.webp"),
              url: "#none",
              genre: "액션 / 판타지",
            },
            {
              title: "킹덤 3기 part 2",
              img: require("../assets/carousel_thumbnail_kingdom3.webp"),
              url: "#none",
              genre: "액션 / 시대극",
            },
            {
              title: "겟타 로보 아크",
              img: require("../assets/carousel_thumbnail_getta.webp"),
              url: "#none",
              genre: "액션 / SF",
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
              genre: "판타지 / 액션",
            },
            {
              title: "탐정은 이미 죽었다.",
              img: require("../assets/carousel_thumbnail_shindeiru.webp"),
              url: "#none",
              genre: "판타지 / 로맨스",
            },
            {
              title: "그녀도 여친",
              img: require("../assets/carousel_thumbnail_kanokano.webp"),
              url: "#none",
              genre: "개그 / 로맨스",
            },
            {
              title: "BLUE REFLECTION RAY part 2",
              img: require("../assets/carousel_thumbnail_reflection.webp"),
              url: "#none",
              genre: "판타지 / 액션",
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
              genre: "일상 / 개그",
            },
            {
              title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
              img: require("../assets/carousel_thumbnail_tenslime2_title.webp"),
              url: "#none",
              genre: "판타지 / 액션",
            },
            {
              title: "불멸의 그대에게 part 2",
              img: require("../assets/carousel_thumbnail_infinite_part2.webp"),
              url: "#none",
              genre: "판타지 / 드라마",
            },
            {
              title: "러브 라이브! 슈퍼스타!!",
              img: require("../assets/carousel_thumbnail_lovelivesuperstar.webp"),
              url: "#none",
              genre: "음악 / 아이돌",
            },
            {
              title: "가극 소녀!!",
              img: require("../assets/carousel_thumbnail_gaguksonyeo.webp"),
              url: "#none",
              genre: "드라마 / 음악",
            },
            {
              title: "NIGHT HEAD 2041",
              img: require("../assets/carousel_thumbnail_nighthead2041.webp"),
              url: "#none",
              genre: "SF / 액션",
            },
            {
              title: "치트 약사의 슬로 라이프 -이세계에 만들자 드러그 스토어-",
              img: require("../assets/carousel_thumbnail_drugstore.webp"),
              url: "#none",
              genre: "판타지 / 치유",
            },
          ],
        },
        {
          day: "금",
          animes: [
            {
              title: "달이 이끄는 이세계 여행",
              img: require("../assets/carousel_thumbnail_tsukimichi.webp"),
              url: "#none",
              genre: "판타지",
            },
            {
              title: "하얀 모래의 아쿠아톱",
              img: require("../assets/carousel_thumbnail_aquatop.webp"),
              url: "#none",
              genre: "드라마",
            },
            {
              title: "Sonny Boy",
              img: require("../assets/carousel_thumbnail_sonnyboy.webp"),
              url: "#none",
              genre: "SF / 판타지",
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
              genre: "판타지",
            },
            {
              title: "마이코네 행복한 밥상",
              img: require("../assets/carousel_thumbnail_maiko.webp"),
              url: "#none",
              genre: "치유 / 일상",
            },
            {
              title: "피치 보이 리버사이드",
              img: require("../assets/carousel_thumbnail_peachriver.webp"),
              url: "#none",
              genre: "액션 / 판타지",
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
              genre: "판타지 / 개그",
            },
            {
              title: "쟈히님은 기죽지 않아!",
              img: require("../assets/carousel_thumbnail_jahisama_title.webp"),
              url: "#none",
              genre: "판타지 / 개그",
            },
            {
              title: "달의 요정 세일러 문 SuperS",
              img: require("../assets/carousel_thumbnail_sailormoonsupers.webp"),
              url: "#none",
              genre: "판타지 / 액션",
            },
            {
              title: "나는 100만명의 목숨 위에 서 있다 2기",
              img: require("../assets/carousel_thumbnail_standing2.webp"),
              url: "#none",
              genre: "판타지 / 성인",
            },
          ],
        },
      ],
      filteredList: [],
    };
  },
  methods: {
    initAnimeList(val) {
      const filteredList = this.dailyAnime.filter(
        (animes) => animes.day === val
      );
      this.filteredList = filteredList[0].animes;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 9rem 0 8.6rem;
  background-color: var(--bg-100);
  min-height: 100vh;
  .day-selector-holder {
    position: sticky;
    display: flex;
    top: 6rem;
    padding: 1.5rem 0;
    background-color: var(--bg-100);
  }
  .day-selector {
    width: 100%;
    margin: 0;
  }
  .daily-contents {
    display: flex;
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 769px) {
  main {
    .day-selector-holder {
      justify-content: center;
      padding: 2rem 0;
    }
    .day-selector {
      width: 50%;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 1300px) {
  .inner {
    width: 1300px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1920px) {
  main .day-selector {
    width: 30%;
  }
}
</style>
