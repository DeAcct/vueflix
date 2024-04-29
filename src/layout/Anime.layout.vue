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

    <aside class="AnimeLayout__Sidebar">
      <div class="AnimeLayout__SideSticky">
        <div
          class="AnimeLayout__AsideBubble AnimeLayout__AsideBubble--Update"
          v-if="!animeInfo.isEnd"
        >
          <strong
            class="AnimeLayout__BubbleItem AnimeLayout__BubbleItem--UpdateDay"
          >
            새 에피소드는 매주 {{ updateTime }}
          </strong>
          <label
            class="AnimeLayout__BubbleItem AnimeLayout__BubbleItem--CountToggle"
            v-if="isToday(animeInfo.day)"
          >
            카운트다운 후 새 에피소드 맞이하기
            <InputBoolean
              v-model="newEpisodeFanfare"
              class="AnimeLayout__BubbleToggle"
            ></InputBoolean>
          </label>
        </div>
        <AnimeMeta
          class="AnimeLayout__AsideBubble AnimeLayout__AsideBubble--Meta"
          :anime-info
        ></AnimeMeta>
      </div>
    </aside>
    <div class="AnimeLayout__Body">
      <div class="AnimeLayout__TabSelector inner" ref="$TabSelector">
        <RouterLink
          replace
          v-for="({ name, tabName }, index) in children"
          :key="name"
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
      <Transition name="anime-layout">
        <component
          :is="children[routeIndex].component"
          :anime-info="
            children[routeIndex].name === 'episodes' ? animeInfo : undefined
          "
          @open-login-modal="openLoginModal"
          :key="children[routeIndex].name"
          :sort-base="
            children[routeIndex].name === 'episodes' ? sortBase : undefined
          "
          @toggle-sort="toggleSort"
        ></component>
      </Transition>
    </div>
    <FanfareCount
      :count="FANFARE_COUNT_SEC"
      class="AnimeLayout__Fanfare"
      v-if="fanfareVisible"
    ></FanfareCount>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { onSnapshot, doc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import { isToday } from "../enums/Days";

import { useScroll } from "@/composables/scroll";
import { useIndicatorAnimation } from "@/composables/indicator";
import { useTime2Next } from "../composables/time";

import Episodes from "@/views/Episodes.vue";
import Reviews from "@/views/Reviews.vue";

import AnimeItemHead from "@/components/AnimeItemHead.vue";
import AnimeMeta from "@/components/AnimeMeta.vue";
import InputBoolean from "@/components/InputBoolean.vue";
import FanfareCount from "@/components/FanfareCount.vue";

const props = defineProps({
  animeInfo: {
    type: Object,
  },
  syncFunction: {
    type: Function,
    default: () => {},
  },
});

const { state: scrollState } = useScroll();

function openLoginModal(e) {
  loginModal.text = e;
  loginModal.open = true;
}

async function removeWatchHistory() {
  // store.commit("auth/clearMaraton", route.params.title);
  await clearMaratonByTitle(route.query.modal);
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
const routeIndex = computed(() =>
  children.findIndex(({ name }) => name === route.query.route)
);
const {
  selector: $TabSelector,
  items: $Tab,
  to: indicatorTo,
  move: indicatorMove,
} = useIndicatorAnimation(routeIndex.value);

const FANFARE_COUNT_SEC = 5;
const newEpisodeFanfare = ref(false);
const fanfareVisible = ref(false);
let timer = null;
function fanfareToggle(_effect) {
  if (_effect) {
    const lastTime =
      useTime2Next(props.animeInfo.day, props.animeInfo.updateTime) -
      FANFARE_COUNT_SEC * 1000;
    sortBase.value = "desc";
    timer = setTimeout(() => {
      fanfareVisible.value = true;
    }, lastTime);
    return;
  }
  if (timer) {
    clearTimeout(timer);
  }
  sortBase.value = "asc";
}
watch(newEpisodeFanfare, fanfareToggle);
const updateTime = computed(() => {
  const [hh, mm] = props.animeInfo.updateTime.split(":");
  return `${props.animeInfo.day}요일 ${hh}:${mm}`;
});

const sortBase = ref("asc");
function toggleSort() {
  sortBase.value = sortBase.value === "asc" ? "desc" : "asc";
}

let cleanup;
onMounted(() => {
  cleanup = onSnapshot(doc(db, "anime", route.query.modal), (doc) => {
    props.syncFunction(doc.data());
  });
});
onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
</script>

<style lang="scss" scoped>
.AnimeLayout {
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 1px * 90);
  padding-bottom: 2rem;
  position: relative;
  &__Fanfare {
    position: absolute;
    inset: 0;
    z-index: calc(var(--z-index-overay-1) + 1);
    --fanfare-counter-top: 50%;
    --fanfare-counter-left: 50%;
    --fanfare-counter-translate: -50% -50%;
    --fanfare-counter-width: 6rem;
    --fanfare-counter-height: 6rem;
    --fanfare-counter-bg: hsl(var(--bg-100));
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
  }

  &__Head {
    width: 100%;
    min-height: 55vh;
  }
  &__AsideBubble {
    &--Update {
      width: calc(100% - 4rem);
      background-color: hsl(var(--text-800) / 0.2);
      border-radius: var(--global-radius);
      margin: 1rem auto 2.4rem;
      font-size: 1.4rem;
      font-weight: 300;
    }
    &--Meta {
      margin-bottom: 2rem;
      &:first-of-type {
        margin-top: 2rem;
      }
    }
  }
  &__BubbleItem {
    display: flex;
    align-items: center;
    padding: 2rem var(--inner-padding);
    &--CountToggle {
      gap: 0.8rem;
      // justify-content: space-between;
    }
    & + & {
      border-top: 1px solid hsl(var(--text-800) / 0.2);
    }
  }
  &__BubbleToggle {
    margin-left: auto;
  }

  &__Body {
    border-radius: calc(var(--global-radius) * 6);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: var(--anime-layout-episodes);
    padding-bottom: 2rem;
    --episodes-sticky-top: var(--header-height);
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

.anime-layout-enter-active,
.anime-layout-leave-active {
  transition: opacity 300ms;
}
.anime-layout-leave-active {
  display: none;
}
.anime-layout-enter-from,
.anime-layout-leave-to {
  opacity: 0;
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

    &__Sidebar {
      grid-area: 2 / 3 / 3 / 4;
    }
    &__SideSticky {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: sticky;
      top: 8rem;
      z-index: calc(var(--z-index-overay-100) + 1);
    }
    &__AsideBubble {
      background-color: var(--anime-layout-episodes);
      border-radius: calc(var(--global-radius) * 6);
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
      &--Meta {
        margin-bottom: 0;
        &:first-of-type {
          margin-top: 0;
        }
      }
    }
    &__BubbleItem {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      justify-content: space-between;
      padding: 2rem;
      &--CountToggle {
        width: 100%;
        margin: 0;
        background-color: transparent;
        border-radius: 0;
      }
      & + & {
        border-top: 1px solid hsl(var(--bg-300));
      }
    }
    &__StickyChild:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-300));
    }

    &__Body {
      height: max(35rem, 100%);
      --episodes-sticky-top: 8rem;
      --episodes-action-width: calc(100% - 4rem);
      background-color: var(--anime-layout-episodes);
      box-shadow: none;
      grid-area: 2 / 2 / 3 / 3;
    }
    &__TabSelector {
      padding: 0 2rem;
      a {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
