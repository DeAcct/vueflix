<template>
  <div class="AnimeLayout">
    <AnimeItemHead
      :is-scroll="scrollBehavior !== 'top'"
      @overflow-menu-open="actionSheetOpen"
      @require-login="openLoginModal"
      @remove-watch-history="removeWatchHistory"
      @handle-interest="handleInterest"
      class="AnimeLayout__Head"
    />
    <main class="AnimeLayout__Main">
      <AnimeMeta class="AnimeLayout__Meta" :anime-info="animeInfo"></AnimeMeta>
      <div class="AnimeLayout__TabView">
        <div class="AnimeLayout__TabSelector inner">
          <RouterLink
            to="./episodes"
            replace
            class="AnimeLayout__Tab"
            exact-active-class="AnimeLayout__Tab--Active"
            >에피소드</RouterLink
          >
          <RouterLink
            to="./reviews"
            replace
            class="AnimeLayout__Tab"
            exact-active-class="AnimeLayout__Tab--Active"
          >
            사용자 평
            <span class="AnimeLayout__Counter">
              {{ animeInfo.reviews ? animeInfo.reviews.length : 0 }}
            </span>
          </RouterLink>
        </div>
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            @open-login-modal="openLoginModal"
          ></component>
        </RouterView>
      </div>
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
import { db } from "../utility/firebase";
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
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useScroll } from "@/composables/scroll";

import AnimeItemHead from "@/components/AnimeItemHead.vue";
import AnimeMeta from "@/components/AnimeMeta.vue";
import ToTop from "@/components/ToTop.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const user = computed(() => store.state.auth.user);
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
</script>

<style lang="scss" scoped>
.AnimeLayout {
  display: flex;
  flex-direction: column;
  height: calc(var(--vh) * 1px * 100);
  &__Head {
    width: 100%;
    min-height: 55vh;
    padding-bottom: 1px;
  }
  &__Main {
    // anime-item-head는 포스터이미지 + 그라디언트로 이루어져 있다.
    // 그라디언트가 끝까지 차지 않고 약간의 여백이 있는 이슈를 개선하기 위해 nagative margin을 적용했다.
    margin-top: -1px;
    padding-top: 2rem;
    background-color: var(--anime-layout-bg);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  &__Meta {
    margin-bottom: 2rem;
  }
  &__TabView {
    border-radius: 0.9rem 0.9rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    flex-grow: 1;
    background-color: var(--anime-layout-episodes);
    padding-bottom: 8.5rem;
  }
  &__TabSelector {
    display: flex;
    gap: 1.5rem;
  }
  &__Tab {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.5rem 0;
    display: flex;
    align-items: last baseline;
    gap: 0.4rem;
    border-bottom: 0.2rem solid transparent;

    &--Active {
      color: hsl(var(--theme-500));
      border-bottom-color: hsl(var(--theme-500));
    }
  }
  &__Counter {
    color: inherit;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .optional-show {
    opacity: 0;
    bottom: 0;
    transform: translateY(100vh);
    transition: all 150ms ease-out;
    &.show {
      opacity: 1;
      transform: translateY(0);
    }
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

.action-sheet {
  position: fixed;
  top: 0;
  z-index: 100;
}
.purchase-modal {
  position: fixed;
  top: 0;
  z-index: 110;
}
@media screen and (min-width: 1080px) {
  .AnimeLayout {
    &__Head {
      min-height: 50vh;
      border-radius: 0;
      padding-top: 8rem;
    }
    &__Meta {
      margin: 0;
      flex-grow: 1;
    }
    &__Main {
      padding: 3.5rem calc((100% - 118rem) / 2) 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row-reverse;
      gap: 1.5rem;
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
      width: 67%;
      min-height: 100%;
      background-color: var(--anime-layout-episodes);
      box-shadow: none;
      padding-bottom: 2rem;
    }
    &__TabSelector {
      padding: 0 2rem;
      a {
        font-size: 1.7rem;
      }
    }
    &__ToTop {
      left: auto;
      right: calc((100% - 118rem) / 2);
      transform: translateY(10rem);
      &--Show {
        transform: none;
      }
    }
  }
}
</style>
