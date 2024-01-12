<template>
  <div class="AnimeLayout">
    <AnimeItemHead
      :is-scroll="scrollBehavior !== 'top'"
      @require-login="openLoginModal"
      @remove-watch-history="removeWatchHistory"
      @handle-interest="handleInterest"
      class="AnimeLayout__Head"
    />
    <AnimeMeta class="AnimeLayout__Meta" :anime-info="animeInfo"></AnimeMeta>
    <main class="AnimeLayout__TabView">
      <div class="AnimeLayout__TabSelector inner" ref="$TabSelector">
        <RouterLink
          :to="`./${name}`"
          replace
          v-for="({ name, tabName }, index) in children"
          v-slot="{ isActive, href, navigate }"
          custom
          ><h3>
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
              :class="[
                { 'AnimeLayout__Tab--Active': isActive },
                'AnimeLayout__Tab',
              ]"
            >
              {{ tabName }}
            </a>
          </h3></RouterLink
        >
        <div class="AnimeLayout__TabIndicator"></div>
      </div>
      <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          @open-login-modal="openLoginModal"
        ></component>
      </RouterView>
    </main>
    <ToTop
      :class="[
        'AnimeLayout__ToTop',
        { 'AnimeLayout__ToTop--Show': scrollBehavior !== 'top' },
      ]"
    />
  </div>
</template>
<script setup>
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/utility/firebase";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import {
  onMounted,
  onUnmounted,
  computed,
  ref,
  reactive,
  provide,
  readonly,
} from "vue";
// import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useScroll } from "@/composables/scroll";
import { useAuth } from "@/store/auth";

import AnimeItemHead from "@/components/AnimeItemHead.vue";
import AnimeMeta from "@/components/AnimeMeta.vue";
import ToTop from "@/components/ToTop.vue";
import { useIndicatorAnimation } from "@/composables/indicator";

// const store = useStore();
const router = useRouter();
const route = useRoute();

const auth = useAuth();
const user = computed(() => auth.user);
async function getRawData() {
  try {
    const animeRef = collection(db, "anime");
    const q = query(animeRef, where("name", "==", route.params.title));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length !== 0) {
      const rawData = querySnapshot.docs[0].data();
      return rawData;
    }
  } catch {
    router.replace("/isekai-404");
  }
}
const animeInfo = ref({});
provide("anime-info", readonly(animeInfo));

const { scrollBehavior } = useScroll();

onMounted(async () => {
  try {
    const storage = getStorage();
    const rawData = await getRawData();
    const posterRef = fireRef(
      storage,
      `${route.params.title}/${rawData.poster}`
    );
    const posterURL = await getDownloadURL(posterRef);
    animeInfo.value = {
      ...rawData,
      poster: posterURL,
      posterOrigin: rawData.poster,
    };
  } catch {
    router.replace("/isekai-404");
  }
});

async function removeWatchHistory() {
  store.commit("auth/clearMaraton", route.params.title);
  await setDoc(doc(db, "user", user.value.uid), {
    ...user.value,
  });
}

function handleInterest() {
  console.log("취향에 반영했어요");
}

const loginModal = reactive({
  text: "",
  open: false,
});
function openLoginModal(e) {
  loginModal.text = e;
  loginModal.open = true;
}

const $app = ref(document.querySelector("#app"));
onMounted(() => {
  $app.value.style.backgroundColor = "var(--anime-layout-bg)";
});
onUnmounted(() => {
  $app.value.style.backgroundColor = "hsl(var(--bg-100))";
});

const { children } = route.matched[0];
const initIndex = children.findIndex((child) => child.name === route.name);
const {
  selector: $TabSelector,
  items: $Tab,
  to: indicatorTo,
  move: indicatorMove,
} = useIndicatorAnimation(initIndex);
</script>

<style lang="scss" scoped>
.AnimeLayout {
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 1px * 100);
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
    transform: translateX(calc(v-bind("indicatorTo.x") * 1px));
    transition: 150ms ease-out;
  }
  &__Counter {
    color: inherit;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &__ToTop {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    z-index: 100;
    background-color: hsl(var(--theme-500));
    transform: translate(-50%, 10rem);
    transition: 150ms ease-out;
    box-shadow: var(--box-shadow);
    width: 4.8rem;
    height: 4.8rem;

    &--Show {
      transform: translate(-50%, 0);
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeLayout {
    display: grid;
    // 좌 - 우 공간너비 지정
    grid-template-columns: calc((100% - 128rem - 4rem) / 2) auto 50rem calc(
        (100% - 128rem - 4rem) / 2
      );
    // 상 - 하 공간높이 지정
    grid-template-rows: 50vh auto;
    grid-auto-rows: minmax(0px, auto);
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
      height: 100%;
      background-color: var(--anime-layout-episodes);
      box-shadow: none;
      grid-area: 2 / 2 / 3 / 3;
    }
    &__TabSelector {
      padding: 0 2rem;
      a {
        font-size: 1.7rem;
      }
    }
    &__ToTop {
      left: auto;
      right: max(calc((100% - 128rem) / 2), 2rem);
      transform: translateY(10rem);
      &--Show {
        transform: none;
      }
    }
  }
}
</style>
