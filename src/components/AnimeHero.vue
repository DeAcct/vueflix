<template>
  <header class="AnimeHero">
    <OptimizedMedia
      :src="`/anime/${animeInfo.name}/${animeInfo.poster}`"
      :alt="`${animeInfo.name} 포스터`"
      class="AnimeHero__BG"
    />
    <div class="AnimeHero__Content">
      <OptimizedMedia
        :src="`/anime/${animeInfo.name}/${animeInfo.poster}`"
        :alt="`${animeInfo.name} 포스터`"
        class="AnimeHero__Poster"
        skelleton
      />
      <div class="AnimeHero__Info">
        <h2 class="AnimeHero__Title">{{ animeInfo.name }}</h2>
        <p class="AnimeHero__SubInfo">
          {{ animeInfo.type }}
          &middot;
          {{ animeInfo.rating }}
          &middot;
          {{ animeInfo.isEnd ? "완결" : "방영중" }}
        </p>
        <AnimeActions v-bind="continueData" @purchase="purchase"></AnimeActions>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";
import { useMediaQuery } from "@/composables/device";

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
const isSmall = useMediaQuery("(max-width: 1080px)");

const route = useRoute();

const auth = useAuth();
const user = computed(() => auth.user);

function purchase() {
  if (user.value) {
    emit("purchase");
  } else {
    emit("require-login", "로그인하면 애니메이션을 구매 및 소장할 수 있어요");
  }
}

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
  const { part, index, progress } = currentAnime.episodes.find(
    (log) => log.time.toDate().getTime() === latestUpdate
  );
  return {
    link: `/anime-play/${route.query.modal}/${part}/${index}`,
    text: `${part} ${index}부터 이어보기`,
    progress,
  };
});

// const component = computed(() => (deviceInfo.isMobile ? "header" : "div"));
</script>

<style lang="scss" scoped>
.AnimeHero {
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
  &__Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 15rem;
    width: min(calc(100% - 4rem), 128rem);
    margin: 0 auto;
    gap: 2rem;
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
    margin-bottom: 2rem;
  }
}

@media screen and (min-width: 768px) {
  .AnimeHero {
    &__Content {
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
    &__Info {
      flex-grow: 1;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeHero {
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

    &__Content {
      position: relative;
      flex-direction: row;
      align-items: flex-end;
      margin-bottom: 0;
    }
    &__Title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
