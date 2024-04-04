<template>
  <header class="AnimeItemHead">
    <h1 class="blind">데레</h1>
    <OptimizedMedia
      :src="`${animeInfo.name}/${animeInfo.poster}`"
      :alt="`${animeInfo.name} 포스터`"
      class="AnimeItemHead__BG"
    />
    <div class="AnimeItemHead__AnimeInfo">
      <OptimizedMedia
        :src="`${animeInfo.name}/${animeInfo.poster}`"
        :alt="`${animeInfo.name} 포스터`"
        class="AnimeItemHead__Poster"
        skelleton
      />
      <div
        class="col-right"
        :class="
          (!animeInfo.type || !animeInfo.rating || !animeInfo.name) &&
          'loading-target'
        "
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
          @wanna-see-toggle="toggleWannaSee"
          @purchase="purchase"
          v-show="!!animeInfo.type && !!animeInfo.rating && !!animeInfo.name"
          :disabled="{
            wanna: !!user,
            purchase: !!user,
          }"
        ></AnimeActions>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useAuth } from "@/store/auth";
import { useWannaSee } from "@/api/wannaSee";
import { useDevice } from "../composables/device";

import AnimeActions from "./AnimeActions.vue";
import OptimizedMedia from "./OptimizedMedia.vue";

const props = defineProps({
  animeInfo: Object,
});

const emit = defineEmits([
  "require-login",
  "overflow-menu-open",
  "purchase",
  "remove-watch-history",
  "handle-interest",
]);
const { isSmall } = useDevice();

const route = useRoute();
const router = useRouter();

const auth = useAuth();
const user = computed(() => auth.user);

const { wannaSee, toggleWannaSee } = useWannaSee(route.query.modal);

function purchase() {
  if (user.value) {
    emit("purchase");
  } else {
    emit("require-login", "로그인하면 애니메이션을 구매 및 소장할 수 있어요");
  }
}

// const posterURL = usePoster({
//   typeFor: "css",
//   aniTitle: props.animeInfo.name,
//   fileName: props.animeInfo.poster,
// });
const gradientPercent = computed(() => (!isSmall.value ? "90%" : "80%"));

const continueData = computed(() => {
  if (!user.value) {
    return {
      link: `/anime-play/${route.query.modal}/1기/1화`,
      text: "1화 1분 미리보기",
    };
  }
  const currentAnime = user.value.maraton.find(
    (anime) => anime.aniTitle === route.query.modal
  );

  if (!currentAnime) {
    return {
      link: `/anime-play/${route.query.modal}/1기/1화`,
      text: "정주행 시작",
    };
  }
  const latestUpdate = currentAnime.lastUpdate.toDate().getTime();
  const latestWatch = currentAnime.episodes.find(
    (log) => log.time.toDate().getTime() === latestUpdate
  );
  return {
    link: `/anime-play/${route.query.modal}/${latestWatch.part}/${latestWatch.index}`,
    text: `${latestWatch.part} ${latestWatch.index}부터 이어보기`,
  };
});

// const component = computed(() => (deviceInfo.isMobile ? "header" : "div"));
</script>

<style lang="scss" scoped>
.AnimeItemHead {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    transparent,
    var(--anime-layout-bg) v-bind(gradientPercent)
  );
  background-position: center;
  background-size: cover;
  position: relative;

  &__BG {
    position: absolute;
    inset: 0;
    z-index: -1;
    animation: none;
  }
  &__AnimeInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 15rem;
    width: min(calc(100% - 4rem), 128rem);
    margin: 0 auto;
    gap: 2rem;

    > .col-right {
      width: 100%;
      height: 12rem;
      justify-content: space-between;
      align-items: center;
      border-radius: var(--global-radius);

      &.loading-target {
        color: transparent;
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
    display: none;
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
      display: block;
      width: 20rem;
      box-shadow: hsl(var(--box-shadow));
      --aspect-ratio: calc(7 / 5 * 100 * 1%);
      flex-shrink: 0;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeItemHead {
    padding: 0 0 1px; // 그라이언트 가림용 가상요소 대비를 위한 1px의 패딩
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
</style>
