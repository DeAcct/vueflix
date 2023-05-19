<template>
  <div class="anime-view">
    <anime-item-head
      :is-scroll="isScroll"
      @overflow-menu-open="actionSheetOpen"
      @require-login="openLoginModal"
      @purchase="openPurchaseModal"
      @remove-watch-history="removeWatchHistory"
      @handle-interest="handleInterest"
      class="anime-view__head"
    />
    <main class="anime-view__main">
      <anime-meta class="anime-view__meta" :anime-info="animeInfo"></anime-meta>
      <div class="anime-view__tab-view">
        <div class="anime-view__tab-selector inner">
          <router-link to="./episodes" replace>에피소드</router-link>
          <router-link to="./reviews" replace>리뷰</router-link>
        </div>
        <router-view v-slot="{ Component }">
          <component
            :is="Component"
            @open-login-modal="openLoginModal"
          ></component>
        </router-view>
      </div>

      <button
        :class="[
          'anime-view__top-btn',
          { 'anime-view__top-btn--scrolled': isScroll },
        ]"
        @click="toTop"
      >
        <i class="anime-view__top-icon">
          <icon-base>
            <icon-arrow-prev />
          </icon-base>
        </i>
        <span class="anime-view__top-text">맨 위로</span>
      </button>
    </main>
    <vueflix-modal
      title="로그인 필요 알림"
      type="yes-no"
      :yesFunc="gotoLogin"
      :noFunc="closeLoginModal"
      v-if="loginModal.open"
      :class="[{ show: loginModal.open }, 'optional-show']"
    >
      <template v-slot:title>로그인 필요</template>
      <template v-slot:description>
        {{ loginModal.text }}
      </template>
      <template v-slot:no-string>나중에</template>
      <template v-slot:yes-string>로그인</template>
    </vueflix-modal>
    <!--purchase-modal
      :anime-info="animeInfo"
      v-if="isPurchaseModalOpen"
      @close-purchase-modal="closePurchaseModal"
    >
      <template v-slot:title>구매 및 소장</template>
      <template v-slot:description>
        소장하면 판권이 만료되더라도 두고두고 볼 수 있어요
      </template>
    </purchase-modal-->
    <action-sheet
      v-if="isActionSheetOpened"
      @overflow-menu-close="actionSheetClose"
      :action-origin="actions"
    />
  </div>
</template>
<script setup>
//todo: composition api 전환, 탭(에피소드<->리뷰) ui 마무리
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
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

import AnimeItemHead from "../components/AnimeItemHead.vue";
import AnimeMeta from "../components/AnimeMeta.vue";
import VueflixModal from "../components/VueflixModal.vue";
import IconBase from "../components/IconBase.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";
import ActionSheet from "../components/ActionSheet.vue";
import PurchaseModal from "../components/PurchaseModal.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const user = computed(() => store.state.auth.user);
async function getRawData() {
  try {
    const db = getFirestore();
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
async function animeInit() {
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
}

let isScroll = ref(0 < Math.round(window.scrollY));
function handleScroll() {
  isScroll.value = 0 < Math.round(window.scrollY);
}

onMounted(async () => {
  await animeInit();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const isActionSheetOpened = ref(false);
function actionSheetOpen() {
  isActionSheetOpened.value = true;
}
function actionSheetClose() {
  isActionSheetOpened.value = false;
}

async function removeWatchHistory() {
  store.commit("auth/clearMaraton", route.params.title);
  const db = getFirestore();
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
function closeLoginModal() {
  loginModal.open = false;
}

const isPurchaseModalOpen = ref(false);
function openPurchaseModal() {
  isPurchaseModalOpen.value = true;
}
function closePurchaseModal() {
  isPurchaseModalOpen.value = false;
}

function gotoLogin() {
  router.push("/auth");
}

function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const actions = [
  {
    text: "시청기록 초기화",
    method: removeWatchHistory,
  },
  {
    text: "관심없음",
    method: handleInterest,
  },
];
</script>

<style lang="scss" scoped>
.anime-view {
  display: flex;
  flex-direction: column;
  &__head {
    width: 100%;
    min-height: 55vh;
    padding-bottom: 1px;
  }
  &__main {
    // anime-item-head는 포스터이미지 + 그라디언트로 이루어져 있다.
    // 그라디언트가 끝까지 차지 않고 약간의 여백이 있는 이슈를 개선하기 위해 nagative margin을 적용했다.
    margin-top: -1px;
    padding-top: 2rem;
    background-color: var(--anime-layout-bg);
  }
  &__meta {
    margin-bottom: 2rem;
  }
  &__tab-view {
    border-radius: 0.9rem 0.9rem 0 0;
    background-color: var(--anime-layout-parts);
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
  }
  &__tab-selector {
    display: flex;
    gap: 1.5rem;
    a {
      font-size: 1.5rem;
      font-weight: 500;
      padding: 1.5rem 0;
      display: flex;
      align-items: center;
      border-bottom: 0.2rem solid transparent;

      &.vueflix-active-link {
        color: hsl(var(--theme-500));
        border-bottom-color: hsl(var(--theme-500));
      }
    }
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

  &__top-btn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    bottom: 2rem;
    left: 50%;
    z-index: 100;
    background-color: hsl(var(--theme-500));
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    color: #fff;
    transform: translate(-50%, 10rem);
    transition: 150ms ease-out;

    &--scrolled {
      transform: translate(-50%, 0);
    }
  }
  &__top-icon {
    color: #fff;
    transform: rotate(90deg);
    margin-right: 1rem;
  }
  &__top-text {
    color: #fff;
    font-weight: 700;
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
@media screen and (min-width: 1024px) {
  .anime-view {
    &__head {
      min-height: 50vh;
      border-radius: 0;
      padding-top: 8rem;
    }
    &__meta {
      margin: 0;
      flex-grow: 1;
    }
    &__main {
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
    &__tab-view {
      border-radius: 0.9rem;
      width: 67%;
    }
    &__tab-selector {
      padding: 0 2rem;
      a {
        font-size: 1.7rem;
      }
    }
    &__top-btn {
      left: auto;
      right: calc((100% - 118rem) / 2);
      transform: translateY(10rem);
      &--scrolled {
        transform: none;
      }
    }
  }
}
</style>
