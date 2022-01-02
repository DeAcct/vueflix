<template>
  <ul class="basket-tab-menu inner">
    <li
      v-for="tabItem in tabItems"
      :key="tabItem.text"
      :class="[{ 'tab-item--selected': tabItem.selected }, 'tab-item']"
    >
      <vueflix-btn @click="changeSelected" bg="transparent" component="button">
        <template v-slot:text>{{ tabItem.text }}</template>
      </vueflix-btn>
    </li>
  </ul>
</template>
<script>
import VueflixBtn from "./VueflixBtn.vue";
export default {
  components: {
    VueflixBtn,
  },
  data() {
    return {
      tabItems: [
        { text: "최근 본", type: "recent", selected: true },
        { text: "보고싶다", type: "wanna", selected: false },
        { text: "다운로드", type: "downloaded", selected: false },
        { text: "구매한", type: "purchase", selected: false },
        { text: "관심없음", type: "not-interested", selected: false },
      ],
      selectedTab: undefined,
    };
  },
  methods: {
    changeSelected(e) {
      this.tabItems = this.tabItems.map((tabItem) => ({
        ...tabItem,
        selected: tabItem.text === e.currentTarget.textContent,
      }));
      this.selectedTab = this.tabItems.filter((tabItem) => tabItem.selected);
      this.$emit("chageSelected", this.selectedTab[0].type);
    },
  },
};
</script>

<style lang="scss" scoped>
.basket-tab-menu {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--bg-100);
  background-color: #fff;

  .tab-item {
    border-bottom: 0.1rem solid transparent;
    transition: border-bottom-color 100ms ease-out;

    .btn {
      padding: 1.5rem 0 1.4rem;
      box-shadow: none;
    }
    &--selected {
      border-bottom-color: var(--theme-500);
      .btn {
        color: var(--theme-500);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .basket-tab-menu {
    background-color: transparent;
    padding: 0;
    justify-content: space-around;
    .tab-item {
      border: none;
      border-radius: 30rem;
      transition: background-color 150ms ease-out;

      .btn {
        display: block;
        padding: 1rem 1.5rem;
        font-size: 1.8rem;
      }
      &--selected {
        background-color: var(--theme-500);
        .btn {
          color: var(--top-item);
        }
      }

      &:not(.tab-item--selected):hover {
        background-color: var(--bg-200);
      }
      &:focus {
        background-color: var(--bg-200);
      }

      .func-btn {
        padding: 1rem 1.5rem;
      }
    }
  }
}
</style>
