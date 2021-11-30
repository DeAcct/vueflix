<template>
  <ul class="basket-tab-menu inner">
    <li
      v-for="tabItem in tabItems"
      :key="tabItem.text"
      :class="[{ 'tab-item--selected': tabItem.selected }, 'tab-item']"
    >
      <vueflix-func-btn @click="changeSelected" bg="transparent">
        {{ tabItem.text }}
      </vueflix-func-btn>
    </li>
  </ul>
</template>
<script>
import VueflixFuncBtn from "./VueflixFuncBtn.vue";
export default {
  components: {
    VueflixFuncBtn,
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
    &--selected {
      color: var(--theme-500);
      border-bottom-color: var(--theme-500);
    }

    .func-btn {
      padding: 1.5rem 0 1.4rem;
    }
  }
}
</style>
