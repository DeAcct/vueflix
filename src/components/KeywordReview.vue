<template>
  <section
    :class="['keyword-review', 'inner', { 'keyword-review--open': isOpen }]"
  >
    <h2 class="title">키워드 리뷰</h2>
    <p class="description">짧게 평가할 수 있어요! (중복 선택 가능)</p>
    <form class="keyword-items">
      <div
        v-for="(keywordItem, index) in keywordItems"
        :key="keywordItem.text"
        class="keyword-block"
      >
        <input
          type="checkbox"
          name="keyword"
          class="blind keyword-skell"
          :id="`keyword-${index}`"
          @change="onKeywordChange(index, $event)"
          :disabled="!isLoggedIn"
        />
        <label class="keyword-item" :for="`keyword-${index}`">
          <span class="keyword-text">
            <i class="icon">{{ keywordItem.icon }} </i>
            {{ keywordItem.text }}
          </span>
          <span class="keyword-number">{{ keywordItem.graphNumber }}명</span>
          <div
            class="graph-bar"
            :style="`width: ${
              (keywordItem.graphNumber / graphNumberSum) * 100
            }%;`"
          ></div>
        </label>
      </div>
    </form>
    <vueflix-btn @click="moreKeyword" component="button">
      <template v-slot:text>
        {{ moreBtnText }}
      </template>
    </vueflix-btn>
  </section>
</template>

<script>
import VueflixBtn from "./VueflixBtn.vue";
export default {
  name: "KeyworkReview",
  components: {
    VueflixBtn,
  },
  props: {
    isLoggedIn: {
      type: [Boolean, Object],
    },
  },
  data() {
    return {
      keywordItems: [
        {
          icon: "😍",
          text: "눈이 즐거워요",
          graphNumber: 0,
        },
        {
          icon: "🎶",
          text: "노래가 좋아요",
          graphNumber: 0,
        },
        {
          icon: "🤣",
          text: "내용이 웃겨요",
          graphNumber: 0,
        },
        {
          icon: "😢",
          text: "감동적이에요",
          graphNumber: 0,
        },
        {
          icon: "🥰",
          text: "캐릭터가 매력적이에요",
          graphNumber: 0,
        },
        {
          icon: "🏭",
          text: "양산형 같아요",
          graphNumber: 0,
        },
        {
          icon: "😥",
          text: "내용 전개가 이상해요",
          graphNumber: 0,
        },
      ],
      isOpen: false,
      moreBtnText: "더보기",
    };
  },
  computed: {
    graphNumberSum() {
      const getGraphNumber = (origin) => {
        return origin.graphNumber;
      };
      const graphReducer = (prev, current) => prev + current;
      const sum = this.keywordItems.map(getGraphNumber).reduce(graphReducer);
      return sum;
    },
  },
  methods: {
    onKeywordChange(index, event) {
      if (event.currentTarget.checked) {
        this.keywordItems[index].graphNumber++;
      } else {
        this.keywordItems[index].graphNumber--;
      }
    },
    moreKeyword() {
      this.isOpen = !this.isOpen;
      this.moreBtnText = this.isOpen ? "닫기" : "더보기";
    },
  },
};
</script>

<style lang="scss" scoped>
.keyword-review {
  width: 100%;
  max-width: 1080px;
  position: relative;
  box-shadow: var(--box-shadow);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  height: 23.5rem;
  overflow: hidden;
  padding: {
    top: 1.8rem;
    bottom: 6.3rem;
  }
  &::after {
    content: "";
    width: 100%;
    height: 50%;
    background: linear-gradient(transparent, var(--overflow-gradient-100));
    position: absolute;
    z-index: 10;
    bottom: 0;
  }
  .btn {
    position: absolute;
    z-index: 15;
    left: 50%;
    bottom: 1.8rem;
    transform: translateX(-50%);
    background-color: var(--theme-500);
    color: #fff;
    border-radius: 2rem;
  }
  &--open {
    height: auto;
    &::after {
      content: none;
    }
  }
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  .description {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  .keyword-items {
    display: flex;
    flex-direction: column;
    .keyword-block {
      input[type="checkbox"]:checked + .keyword-item {
        background-color: var(--theme-100);
        .graph-bar {
          background-color: var(--theme-300);
        }
      }
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    .keyword-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 4rem;
      border-radius: 2rem;
      overflow: hidden;
      background-color: var(--bg-100);
      transition: 150ms ease-out;
      span {
        position: absolute;
      }

      .keyword-text {
        display: flex;
        align-items: center;
        left: 1.5rem;
        font-size: 1.3rem;
        font-weight: 900;
        .icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      }
      .keyword-number {
        right: 1.5rem;
        font-size: 1.3rem;
        font-weight: 500;
      }
      .graph-bar {
        height: 4rem;
        border-radius: 2rem;
        background-color: var(--bg-300);
        transition: background-color 150ms ease-out, width 300ms ease-out;
      }
    }
  }
}
</style>
