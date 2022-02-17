<template>
  <div class="wrap">
    <main>
      <tag-controller />
      <div class="inner">
        <p class="result-text">
          총 <strong>{{ formatResult }}</strong
          >개의 작품이 검색되었어요!
        </p>
        <label for="sort-order" class="sort-order">
          정렬 순서
          <select name="sort-order" id="sort-order">
            <option value="ranking">뷰플릭스 랭킹</option>
            <option value="ranking">이름</option>
            <option value="ranking">최신</option>
            <option value="ranking">평가 많은</option>
            <option value="ranking">평점 높은</option>
          </select>
        </label>
        <h3 class="blind">검색 결과</h3>
        <poster-list :list="posterList" />
      </div>
    </main>
  </div>
</template>

<script>
import PosterList from "../components/PosterList.vue";
import TagController from "../components/TagController.vue";
export default {
  name: "TagSearch",
  components: {
    PosterList,
    TagController,
  },
  data() {
    return {
      resultCount: 29,
      posterList: [
        {
          title: "호리미야",
          img: undefined,
          isAdult: false,
        },
        {
          title: "4월은 너의 거짓말",
          img: undefined,
          isAdult: false,
        },
        {
          title: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
          img: undefined,
          isAdult: false,
        },
        {
          title: "목소리의 형태",
          img: undefined,
          isAdult: false,
        },
        {
          title: "청춘 돼지는 꿈꾸는 소녀의 꿈을 꾸지 않는다",
          img: undefined,
          isAdult: false,
        },
        {
          title: "역시 내 청춘 러브코메디는 잘못됐다. 완",
          img: undefined,
          isAdult: false,
        },
        {
          title: "역시 내 청춘 러브코메디는 잘못됐다.",
          img: undefined,
          isAdult: false,
        },
        {
          title: "역시 내 청춘 러브코메디는 잘못됐다. 속",
          img: undefined,
          isAdult: false,
        },
        {
          title: "너의 췌장을 먹고싶어",
          img: undefined,
          isAdult: false,
        },
        {
          title: "도메스틱한 그녀",
          img: undefined,
          isAdult: true,
        },
        {
          title: "클라나드 에프터 스토리",
          img: undefined,
          isAdult: false,
        },
        {
          title: "(자막) 바이올렛 에버가든 : 영원과 자동 수기인형",
          img: undefined,
          isAdult: false,
        },
        {
          title: "클라나드 1기",
          img: undefined,
          isAdult: false,
        },
        {
          title: "그 남자, 그 여자의 사정",
          img: undefined,
          isAdult: false,
        },
        {
          title: "이 게임 폐인이 사는 법",
          img: undefined,
          isAdult: false,
        },
        {
          title: "치하야후루 3기",
          img: undefined,
          isAdult: false,
        },
        {
          title: "치하야후루 1기",
          img: undefined,
          isAdult: false,
        },
        {
          title: "리라이프",
          img: undefined,
          isAdult: false,
        },
        {
          title: "언제나 우리의 사랑은 10cm였다.",
          img: undefined,
          isAdult: false,
        },
        {
          title: "치하야후루 2기",
          img: undefined,
          isAdult: false,
        },
        {
          title: "약캐 토모자키 군",
          img: undefined,
          isAdult: false,
        },
        {
          title: "러브 앤 프로듀서",
          img: undefined,
          isAdult: false,
        },
        {
          title: "언덕길의 아폴론",
          img: undefined,
          isAdult: false,
        },
        {
          title: "(더빙) 바이올렛 에버가든 : 영원과 자동 수기 인형",
          img: undefined,
          isAdult: false,
        },
        {
          title: "리라이프 FINAL ARC",
          img: undefined,
          isAdult: false,
        },
        {
          title: "아라카와 언더 더 브리지 1기",
          img: undefined,
          isAdult: false,
        },
        {
          title: "그 여름",
          img: undefined,
          isAdult: false,
        },
        {
          title: "카시카",
          img: undefined,
          isAdult: false,
        },
        {
          title: "어떻게든 되는 나날",
          img: undefined,
          isAdult: false,
        },
      ],
    };
  },
  computed: {
    formatResult() {
      return this.resultCount.toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 8rem 0 15.4rem;
  background-color: var(--bg-100);
  .inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .result-text {
      font-size: 1.5rem;
      font-weight: 700;
      strong {
        color: var(--theme-500);
      }
    }
    .sort-order {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.3rem;
      font-weight: 700;
      select {
        font-weight: 500;
        background: transparent;
        border: 1px solid transparent;
        option {
          font-weight: inherit;
        }
        &:focus {
          border: 1px solid var(--theme-500);
        }
      }
    }
  }
  .controller {
    position: fixed;
    z-index: 10;
  }
}

@media screen and (min-width: 768px) {
  main .inner .result-text {
    font-size: 1.8rem;
  }
}
@media screen and (min-width: 769px) {
  main {
    display: flex;
    padding: 0;
    margin-top: 6rem;
    background-color: var(--bg-200);
    .controller {
      position: static;
      width: 400px;
      border-radius: 0;
      height: calc(100vh - 6rem);
      max-height: none;
      animation: none;
      background-color: var(--top-item);
    }
    .inner {
      flex: 2;
      height: calc(100vh - 6rem);
      overflow-y: scroll;
      padding: 3rem 4.5rem;
    }
  }
}
</style>
