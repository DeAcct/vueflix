<template>
  <main class="basket">
    <basket-tab-menu @chageSelected="changeSelected" />
    <transition name="fade" mode="out-in">
      <component :is="selectedTab" />
    </transition>
  </main>
</template>

<script>
import BasketTabMenu from "../components/BasketTabMenu.vue";
import BasketTabRecent from "../components/BasketTabRecent.vue";
import BasketTabWanna from "../components/BasketTabWanna.vue";
import BasketTabDownloaded from "../components/BasketTabDownloaded.vue";
import BasketTabPurchase from "../components/BasketTabPurchase.vue";
import BasketTabNotInterested from "../components/BasketTabNotInterested.vue";

export default {
  name: "Basket",
  components: {
    BasketTabMenu,
    BasketTabRecent,
    BasketTabWanna,
    BasketTabDownloaded,
    BasketTabPurchase,
    BasketTabNotInterested,
  },
  data() {
    return {
      currentTab: "recent",
    };
  },
  methods: {
    changeSelected(e) {
      this.currentTab = e;
    },
  },
  computed: {
    selectedTab() {
      return `basket-tab-${this.currentTab}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  padding: 12rem 0 6rem;
  .basket-tab-menu {
    position: fixed;
    z-index: 25;
    top: 6rem;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 100ms ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-2rem);
  }
}
</style>
