<template>
  <component :is="component" class="AnimeItemHead">
    <h1 class="blind">뷰플릭스</h1>
    <div class="AnimeItemHead__Navigation">
      <div class="wrap">
        <div class="col-left">
          <a class="back" @click="goBack">
            <icon-base icon-name="뒤로가기">
              <icon-arrow-prev />
            </icon-base>
          </a>
          <strong
            :class="[
              'AnimeItemHead__ScrollTitle',
              { 'AnimeItemHead__ScrollTitle--Scrolled': isScroll },
            ]"
          >
            {{ animeInfo.name }}
          </strong>
        </div>
        <div class="col-right">
          <button class="AnimeItemHead__ShareBtn" @click="openSystemShare">
            <icon-base icon-name="공유">
              <icon-share />
            </icon-base>
          </button>
          <div class="AnimeItemHead__OverflowBtn">
            <button class="icon" @click="actionSheetToggle">
              <icon-base>
                <icon-overflow />
              </icon-base>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="AnimeItemHead__AnimeInfo">
      <div
        :class="[
          'AnimeItemHead__Poster',
          'loading-target',
          { 'AnimeItemHead__Poster--Loaded': animeInfo.poster },
        ]"
        v-if="!deviceInfo.isMobile"
      >
        <img :src="animeInfo.poster" :alt="`${animeInfo.name} 포스터`" />
      </div>
      <div
        :class="[
          'col-right',
          'loading-target',
          {
            'col-right--Loaded':
              animeInfo.type && animeInfo.rating && animeInfo.name,
          },
        ]"
      >
        <div class="row-top">
          <h2 class="AnimeItemHead__Title">{{ animeInfo.name }}</h2>
          <p class="AnimeItemHead__SubInfo">
            {{ animeInfo.type }}
            &middot;
            {{ animeInfo.rating }}
            &middot;
            {{ animeInfo.isEnd ? "완결" : "방영중" }}
          </p>
        </div>
        <AnimeActions
          v-bind="{
            continueData,
            wannaSee,
          }"
          @wanna-see-toggle="wannaSeeToggle"
          @purchase="purchase"
          v-show="!!animeInfo.type && !!animeInfo.rating && !!animeInfo.name"
        ></AnimeActions>
      </div>
    </div>
  </component>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { setDoc, doc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconBase from "./IconBase.vue";
import IconShare from "./icons/IconShare.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import AnimeActions from "./AnimeActions.vue";

const props = defineProps({
  isScroll: Boolean,
});

const emit = defineEmits([
  "require-login",
  "overflow-menu-open",
  "purchase",
  "remove-watch-history",
  "handle-interest",
]);
const deviceInfo = inject("device-info");

const route = useRoute();
const router = useRouter();
function goBack() {
  if (window.history.state.back === null) {
    router.push({ path: "/" });
    return;
  }
  router.back();
}

const store = useStore();
const wannaSee = computed(
  () =>
    !!user.value?.wannaSee.find((item) => item.aniTitle === route.params.title)
);
async function wannaSeeToggle() {
  if (!user.value) {
    emit("require-login", "로그인해야 '보고싶다'를 체크할 수 있어요");
    return;
  }
  const aniTitle = route.params.title;
  if (wannaSee.value) {
    store.commit("auth/deleteWannaSee", aniTitle);
  } else {
    const time = new Date();
    store.commit("auth/updateWannaSee", {
      aniTitle,
      time,
    });
  }
  await setDoc(doc(db, "user", user.value.uid), {
    ...user.value,
  });
}

const user = computed(() => store.state.auth.user);

async function openSystemShare() {
  const shareData = {
    title: `뷰플릭스에서 ${route.params.title} 다시보기`,
    url: window.location.href,
  };
  await navigator.share(shareData);
}

function purchase() {
  console.log(user.value);
  if (user.value) {
    emit("purchase");
  } else {
    emit("require-login", "로그인하면 애니메이션을 구매 및 소장할 수 있어요");
  }
}

const animeInfo = inject("anime-info");
const bgURL = computed(() => `url(${animeInfo.value.poster})`);
const gradientPercent = computed(() => (!deviceInfo.isMobile ? "90%" : "80%"));

const continueData = computed(() => {
  if (!user.value) {
    return {
      link: `/player/${route.params.title}/1기/1화`,
      text: "가입하고 정주행 시작",
    };
  }
  const last = user.value.recentWatched.find(
    (anime) => anime.aniTitle === route.params.title
  );

  if (last) {
    return {
      link: `/player/${route.params.title}/${last.part}/${last.index}`,
      text: `${last.part} ${last.index}부터 이어보기`,
    };
  }
  return {
    link: `/player/${route.params.title}/1기/1화`,
    text: "정주행 시작",
  };
});

const component = computed(() => (deviceInfo.isMobile ? "header" : "div"));
</script>

<style lang="scss" scoped>
.AnimeItemHead {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
      transparent,
      var(--anime-layout-bg) v-bind(gradientPercent)
    ),
    v-bind(bgURL);
  background-position: center;
  background-size: cover;
  &__Navigation {
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    padding: 2rem 0 6rem;
    transition: 150ms ease-out;
    background: linear-gradient(var(--anime-layout-bg), transparent);
    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: min(calc(100% - 4rem), 128rem);
    }
    .col-left {
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 2.4rem;
    }
    .col-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .back,
  &__OverflowBtn,
  &__ShareBtn {
    color: var(--anime-layout-text);
    width: 2.4rem;
    height: 2.4rem;
  }

  &__ScrollTitle {
    margin-left: 0.5rem;
    font-size: 1.7rem;
    height: 2.4rem;
    color: var(--anime-layout-text);
    opacity: 0;
    transform: translateX(2rem);
    transition: transform 150ms ease-out, opacity 150ms ease-out;
    //말줄임표 처리
    width: 60%;
    line-height: 2.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &--Scrolled {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &__AnimeInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 15rem;
    width: min(calc(100% - 4rem), 128rem);
    margin: 0 auto 2rem;
    gap: 2rem;

    > .col-right {
      width: 100%;
      height: 12rem;
      justify-content: space-between;
      align-items: center;
      color: transparent;
      border-radius: var(--global-radius);
      background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / 0.3),
        rgb(255 255 255 / 0.2)
      );

      &--Loaded {
        width: 100%;
        height: auto;
        color: var(--anime-layout-text);
        background: transparent;
        animation: none;
      }
      .row-top {
        color: inherit;
        transition: 150ms ease-out;
        margin-bottom: 1.5rem;
      }

      .row-bottom {
        display: flex;
        color: inherit;
      }
    }
  }

  &__Poster {
    width: 20rem;
    height: calc(20rem / 5 * 7);
    box-shadow: hsl(var(--box-shadow));
    border-radius: var(--global-radius);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      font-size: 0.1rem;
      opacity: 0;
      border-radius: var(--global-radius);
      transition: opacity 150ms ease-out;
    }
    &--Loaded {
      animation: none;
      img {
        opacity: 1;
      }
    }
  }
  &__Title {
    color: inherit;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }
  &__SubInfo {
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 1.2rem;
    font-weight: 400;
  }
}

@media screen and (min-width: 768px) {
  .AnimeItemHead {
    &__AnimeInfo {
      height: auto;
      flex-direction: row;
      justify-content: unset;
      align-items: flex-end;
    }
    &__Poster {
      flex-shrink: 0;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeItemHead {
    padding: 0 calc((100% - 128rem) / 2) 1px; // 그라이언트 가림용 가상요소 대비를 위한 1px의 패딩
    &__Navigation {
      width: 100%;
      .col-left {
        flex-shrink: 1;
        flex-grow: 0;
      }
    }
    &__ScrollTitle {
      width: 100%;
      font-size: 2rem;
    }
    &__OverflowBtn {
      position: relative;
    }
    .action-sheet {
      right: 0;
    }

    &__AnimeInfo {
      position: relative;
      flex-direction: row;
      align-items: flex-end;
      margin-bottom: 0;

      .col-right {
        flex: 1;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .row-top {
          .genres .genre {
            font-size: 1.5rem;
          }

          .AnimeItemHead__SubInfo {
            font-size: 1.5rem;
          }
        }
        &--Loaded {
          width: auto;
        }
      }
    }
    &__Title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
  }
}

@media screen and (min-width: 1300px) {
  .AnimeItemHead {
    &__AnimeInfo {
      width: 100%;
    }
  }
}
</style>
