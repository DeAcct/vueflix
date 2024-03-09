<template>
  <div class="AnimeLayout">
    <AnimeItemHead
      :is-scroll="scrollState !== 'top'"
      :anime-info
      @require-login="openLoginModal"
      @remove-watch-history="removeWatchHistory"
      @handle-interest="handleInterest"
      class="AnimeLayout__Head"
    />
    <AnimeMeta class="AnimeLayout__Meta" :anime-info></AnimeMeta>
    <main class="AnimeLayout__TabView">
      <div class="AnimeLayout__TabSelector inner" ref="$TabSelector">
        <RouterLink
          replace
          v-for="({ name, tabName }, index) in children"
          :to="{ query: { ...route.query, route: name } }"
          v-slot="{ href, navigate }"
          custom
        >
          <h3>
            <a
              v-bind="$attrs"
              :href="href"
              @click="
                (e) => {
                  e.preventDefault();
                  navigate();
                  indicatorMove(index);
                }
              "
              @focus="indicatorMove(index)"
              ref="$Tab"
              class="AnimeLayout__Tab"
              :class="name === route.query.route && 'AnimeLayout__Tab--Active'"
            >
              {{ tabName }}
            </a>
          </h3>
        </RouterLink>
        <div class="AnimeLayout__TabIndicator"></div>
      </div>
      <!-- <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          @open-login-modal="openLoginModal"
          ></component>
        </RouterView> -->
      <Transition name="anime-layout">
        <component
          :is="children[routeIndex].component"
          :anime-info
          @open-login-modal="openLoginModal"
        ></component>
      </Transition>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import { useScroll } from "@/composables/scroll";
import { useIndicatorAnimation } from "@/composables/indicator";

import Episodes from "@/views/Episodes.vue";
import Reviews from "@/views/Reviews.vue";

import AnimeItemHead from "@/components/AnimeItemHead.vue";
import AnimeMeta from "@/components/AnimeMeta.vue";

const props = defineProps({
  animeInfo: Object,
});

const { state: scrollState } = useScroll();

function openLoginModal(e) {
  loginModal.text = e;
  loginModal.open = true;
}

async function removeWatchHistory() {
  // store.commit("auth/clearMaraton", route.params.title);
  await clearMaratonByTitle(route.params.title);
}

function handleInterest() {
  console.log("취향에 반영했어요");
}

const route = useRoute();
const children = [
  {
    name: "episodes",
    tabName: "에피소드",
    component: Episodes,
  },
  {
    name: "reviews",
    tabName: "사용자 평",
    component: Reviews,
  },
];
const routeIndex = children.findIndex(({ name }) => name === route.query.route);
const {
  selector: $TabSelector,
  items: $Tab,
  to: indicatorTo,
  move: indicatorMove,
} = useIndicatorAnimation(routeIndex);
</script>

<style lang="scss" scoped>
.AnimeLayout {
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 1px * 90);
  &__Head {
    width: 100%;
    min-height: 55vh;
    position: relative;
    &::after {
      // negative margin 기법보다 더 직관적으로...
      // 높이가 정말 작은 가상 요소로 덮어 그라디언트가 어색한 부분을 가리는 방법을 사용했다.
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--anime-layout-bg);
      z-index: 1;
    }
  }
  &__Meta {
    margin-bottom: 2rem;
  }
  &__TabView {
    border-radius: calc(var(--global-radius) * 6) calc(var(--global-radius) * 6)
      0 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: var(--anime-layout-episodes);
    padding-bottom: 8.5rem;
  }
  &__TabSelector {
    display: flex;
    gap: 1.5rem;
    position: relative;
  }
  &__Tab {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.6rem 0 1.2rem;
    display: flex;
    align-items: last baseline;
    gap: 0.4rem;
    border-bottom: 0.2rem solid transparent;

    &--Active {
      color: hsl(var(--theme-500));
    }
  }

  &__TabIndicator {
    width: calc(v-bind("indicatorTo.width") * 1px);
    height: 0.2rem;
    background-color: hsl(var(--theme-500));
    position: absolute;
    bottom: 0;
    transform: translateX(calc(v-bind("indicatorTo.x") * 1px - 2rem));
    transition: 150ms ease-out;
  }

  &__Counter {
    color: inherit;
    font-size: 1.2rem;
    font-weight: 500;
  }
}

@media screen and (min-width: 1080px) {
  .AnimeLayout {
    display: grid;
    // 좌 - 우 공간너비 지정
    grid-template-columns: 0 auto 35rem calc((100% - 128rem - 4rem) / 2);
    // 상 - 하 공간높이 지정
    grid-template-rows: 50vh auto;
    row-gap: 3.2rem;
    column-gap: 2rem;
    &__Head {
      height: 50vh;
      border-radius: 0;
      padding-top: 8rem;
      min-height: unset;
      grid-area: 1 / 1 / 2 / 5;
    }
    &__Meta {
      grid-area: 2 / 3 / 3 / 4;
      width: 100%;
    }
    .optional-show {
      display: none;
      transform: none;
      transition: 150ms ease-out;
      &.show {
        display: block;
      }
    }
    &__TabView {
      height: max(35rem, 100%);
      background-color: var(--anime-layout-episodes);
      box-shadow: none;
      grid-area: 2 / 2 / 3 / 3;
      border-radius: calc(var(--global-radius) * 6);
    }
    &__TabSelector {
      padding: 0 2rem;
      a {
        font-size: 1.7rem;
      }
    }
  }
}
</style>
