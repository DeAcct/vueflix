<template>
  <main class="basket">
    <template v-if="user">
      <div class="basket__button-group inner">
        <div class="basket__tabs">
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
                {
                  'basket__active-holder--active': selectedTab === tabItem.type,
                },
              ]"
            >
              {{ tabItem.text }}
            </span>
          </button>
        </div>
        <button class="basket__remove">
          <icon-base>
            <icon-remove></icon-remove>
          </icon-base>
        </button>
      </div>
      <ul class="basket__list">
        <thumbnail-set
          :type="selectedTab === 'recentWatched' ? 'episode' : 'series'"
          v-for="basketItem in basketList"
          :key="`${selectedTab}-${basketItem.aniTitle}`"
          :data="basketItem"
          class="basket__item"
        />
      </ul>
    </template>
    <template v-else>
      <div class="basket__require-login inner">
        <strong class="basket__login-title">
          여기서 지금까지의 덕질을 저장해 보세요!
        </strong>
        <router-link to="/auth" class="basket__login-button">
          로그인/회원가입
        </router-link>
      </div>
    </template>
  </main>
</template>

<script setup>
// v-for를 이용할 때는 key 속성을 제대로 설정하자.
// unique한 키가 아닐 경우, 같은 아이템으로 인식하여 업데이트가 이루어지지 않는다.
// 탭이 변경되었는데, 같은 인덱스에 같은 제목의 애니가 있을 경우 썸네일이 바뀌지 않는 오류가 있었다.

import { useStore } from "vuex";
import { computed, ref } from "vue";
import ThumbnailSet from "../components/ThumbnailSet.vue";
import IconBase from "../components/IconBase.vue";
import IconRemove from "../components/icons/IconRemove.vue";

const tabItems = [
  { text: "최근 본", type: "recentWatched" },
  { text: "보고싶다", type: "wannaSee" },
  { text: "구매한", type: "purchased" },
  { text: "관심없음", type: "notInterested" },
];
const selectedTab = ref("recentWatched");
function changeSelected(e) {
  selectedTab.value = e.currentTarget.dataset.key;
}
const store = useStore();
const user = computed(() => store.state.auth.user);
const basketList = computed(() => user.value[selectedTab.value]);

// export default {
//   name: "AppBasket",
//   components: { ThumbnailSet, IconBase, IconRemove },
//   data() {
//     return {
//       tabItems: [
//         { text: "최근 본", type: "recentWatched" },
//         { text: "보고싶다", type: "wannaSee" },
//         { text: "구매한", type: "purchased" },
//         { text: "관심없음", type: "notInterested" },
//       ],
//       selectedTab: "recentWatched",
//     };
//   },
//   methods: {
//     changeSelected(e) {
//       this.selectedTab = e.currentTarget.dataset.key;
//     },
//   },
//   computed: {
//     ...mapState({
//       user: (state) => state.auth.user,
//     }),
//     basketList() {
//       return this.user?.[this.selectedTab];
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.basket {
  padding: 6rem 0;
  &__button-group {
    display: flex;
    justify-content: space-between;
    position: sticky;
    z-index: 10;
    top: 6rem;
    width: 100%;
    border-bottom: 1px solid hsl(var(--bg-200));
    background-color: hsl(var(--bg-100));
  }
  &__tabs {
    display: flex;
    flex-grow: 1;
    max-width: 70vw;
    justify-content: space-between;
  }
  &__button {
    height: 4.8rem;
    display: flex;
    justify-content: center;
  }
  &__active-holder {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
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
      color: hsl(var(--theme-500));
      &::after {
        background-color: hsl(var(--theme-500));
      }
    }
  }
  &__list {
    margin-top: 1.5rem;
    width: 100%;
    display: grid;
    grid: auto-flow / 1fr;
    gap: 1.5rem 1rem;
    padding: 0 2rem;
  }
  &__item {
    width: 100%;
    min-height: 25.5rem;
  }

  &__require-login {
    display: flex;
    height: calc(var(--vh) * 100px - 16rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  &__login-title {
    font-size: 1.7rem;
  }
  &__login-button {
    width: 100%;
    padding: 2rem;
    background-color: hsl(var(--bg-200));
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.3rem;
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

@media screen and (min-width: 769px) {
  .basket {
    &__list {
      grid: auto-flow / 1fr 1fr;
    }
  }
}

@media screen and (min-width: 1240px) {
  .basket {
    width: 1240px;
    margin: 0 auto;
    &__button-group {
      border: none;
    }
    &__button {
      height: 5.6rem;
    }
    &__active-holder {
      font-size: 1.7rem;
    }
    &__list {
      gap: 3rem 1.5rem;
      padding: 0;
      grid: auto-flow / 1fr 1fr 1fr;
      --thumbnail-bottom: 0.7rem;
    }
  }
}
</style>
