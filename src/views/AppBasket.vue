<template>
  <main class="basket">
    <div class="basket__button-group">
      <button
        @click="changeSelected"
        class="basket__button"
        v-for="tabItem in tabItems"
        :key="tabItem.type"
        :data-key="tabItem.type"
      >
        <span
          :class="[
            'basket__active-holder',
            { 'basket__active-holder--active': selectedTab === tabItem.type },
          ]"
        >
          {{ tabItem.text }}
        </span>
      </button>
    </div>
    <ul class="basket__list">
      <thumbnail-set
        :type="selectedTab === 'recentWatched' ? 'episode' : 'series'"
        v-for="basketItem in basketList"
        :key="basketItem.aniTitle"
        :data="basketItem"
        :progress="selectedTab === 'recentWatched'"
        class="basket__item"
      />
    </ul>
  </main>
</template>

<script>
import { mapState } from "vuex";
import ThumbnailSet from "../components/ThumbnailSet.vue";

export default {
  name: "AppBasket",
  components: { ThumbnailSet },
  data() {
    return {
      tabItems: [
        { text: "최근 본", type: "recentWatched" },
        { text: "보고싶다", type: "wannaSee" },
        { text: "구매한", type: "purchased" },
        { text: "관심없음", type: "notInterested" },
      ],
      selectedTab: "recentWatched",
    };
  },
  methods: {
    changeSelected(e) {
      this.selectedTab = e.currentTarget.dataset.key;
    },
    swipeStart(e) {
      console.log(e);
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    basketList() {
      return this.user?.[this.selectedTab];
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  padding: 6rem 0;
  &__button-group {
    display: flex;
    position: sticky;
    z-index: 10;
    top: 6rem;
    width: 100%;
    border-bottom: 1px solid var(--bg-200);
    background-color: var(--bg-100);
  }
  &__button {
    flex: 1 0;
    height: 4.8rem;
    display: flex;
    justify-content: center;
  }
  &__active-holder {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;
    height: 100%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.4rem;
      border-radius: 9999px 9999px 0 0;
    }
    &--active {
      color: var(--theme-500);
      &::after {
        background-color: var(--theme-500);
      }
    }
  }
  &__list {
    margin-top: 1.5rem;
    width: 100%;
    display: grid;
    grid: auto-flow / 1fr 1fr;
    gap: 1.5rem 1rem;
    padding: 0 2rem;
  }
  &__item {
    width: 100%;
    min-width: 0;
  }
}

.basket-move-enter-active,
.basket-move-leave-active {
  transition: all 150ms ease-out;
}
.basket-move-enter-from,
.basket-move-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* @media screen and (min-width: 1024px) {
  .basket {
    padding-top: 14rem;
    .basket-tab-menu {
      width: calc(100% - var(--inner-padding) * 2);
      left: 50%;
      transform: translateX(-50%);
      top: 8rem;
      border-bottom: none;
    }
  }
} */
</style>
