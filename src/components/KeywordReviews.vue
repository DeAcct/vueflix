<template>
  <form class="keyword-review inner">
    <fieldset>
      <legend class="title">키워드 리뷰</legend>
      <span class="description">눌러서 평가해 보세요! (중복 선택 가능)</span>
      <div class="keyword-items">
        <label
          class="keyword-item"
          v-for="(keywordItem, index) in keywordItems"
          :key="keywordItem.text"
        >
          <input
            type="checkbox"
            name="keyword"
            :checked="keywordItem.checked"
            class="blind"
            @change="onKeywordChange(index, $event)"
          />
          <span class="keyword-text">
            <i class="icon">{{ keywordItem.icon }} </i>
            {{ keywordItem.text }}
          </span>
          <span class="keyword-number">{{ keywordItem.graphNumber }}</span>
          <div
            class="graph-bar"
            :style="`width: ${
              (keywordItem.graphNumber / graphNumberSum) * 100
            }%; --i: ${index};`"
          ></div>
        </label>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "KeyworkReviews",
  data() {
    return {
      keywordItems: [
        {
          icon: "👍",
          text: "작화 따봉",
          checked: false,
          graphNumber: 0,
        },
        {
          icon: "🎶",
          text: "명곡 제조기",
          checked: false,
          graphNumber: 0,
        },
        {
          icon: "🤣",
          text: "웃겨요",
          checked: false,
          graphNumber: 0,
        },
        {
          icon: "📺",
          text: "어디서 본 듯이 익숙",
          checked: false,
          graphNumber: 0,
        },
      ],
    };
  },
  computed: {
    graphNumberSum() {
      const getGraphNumber = (origin) => {
        return origin.graphNumber;
      };
      const graphReducer = (prev, current) => prev + current;
      const sum = this.keywordItems.map(getGraphNumber).reduce(graphReducer);
      console.log(sum);
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
  },
};
</script>

<style lang="scss" scoped>
.keyword-review {
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  padding: {
    top: 1.8rem;
    bottom: 1.8rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  .description {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .keyword-items {
    display: flex;
    flex-direction: column;
    .keyword-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 4rem;
      border-radius: 2rem;
      overflow: hidden;
      background-color: var(--theme-100);
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
      }
      .graph-bar {
        height: 4rem;
        border-radius: 2rem;
        background-color: var(--theme-300);
        transition: width 300ms ease-out;
        animation: 750ms guide-motion ease-in-out;
        animation-delay: calc(var(--i) * 100ms);
      }

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
}

@keyframes guide-motion {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  75% {
    width: 25%;
  }
  87% {
    width: 75%;
  }
  90% {
    width: 90%;
  }
  100% {
    width: 0%;
  }
}
</style>
