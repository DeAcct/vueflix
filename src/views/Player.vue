<template>
  <div class="Player">
    <!--AmbientPlayer :src="videoSrc" class="Player__Body"></AmbientPlayer-->
    <div class="Player__Video">
      <OptimizedMedia
        type="img"
        src="https://http.cat/404"
        alt="임시 고양이 이미지"
      ></OptimizedMedia>
    </div>
    <section class="Player__TitleRenderer">
      <h2
        :class="[
          'Player__AniTitle',
          'loading-target',
          { 'Player__AniTitle--Loaded': nowEpisode },
        ]"
      >
        <RouterLink :to="`/anime/${route.params.title}/episodes`">
          {{ route.params.title }}
        </RouterLink>
      </h2>
      <h3
        :class="[
          'Player__EpisodeTitle',
          'loading-target',
          { 'Player__EpisodeTitle--Loaded': nowEpisode },
        ]"
      >
        {{ route.params.part }} {{ route.params.index }} {{ nowEpisode?.title }}
      </h3>
    </section>
    <section class="Player__Parts">
      <h3 class="Player__EpisodesCounter">
        총 {{ episodeCounter }}개의 에피소드
      </h3>
      <div class="Player__ScrollContainer">
        <div class="Player__Episodes">
          <AccordionWidget
            v-for="({ part, episodes }, index) in animeInfo.parts"
            :open="index === 0"
            :key="index"
            class="Player__PartsAccordion"
          >
            <template v-slot:title>
              {{ part }}
            </template>
            <template v-slot:content>
              <VueflixCarousel
                :type="deviceInfo.isTouch ? 'arrow' : 'nobutton'"
                :length="episodes.length"
                :direction="deviceInfo.isTouch ? 'row' : 'column'"
              >
                <ThumbnailSet
                  v-for="{ title, index, thumbnail } in episodes"
                  :direction="deviceInfo.isTouch ? 'column' : 'row'"
                  :key="`${title}-${part}-${index}`"
                  :ani-title="animeInfo.name"
                  :data="{
                    thumbnail,
                    part,
                    index,
                    title,
                  }"
                  type="episode"
                  watch-percent="0%"
                ></ThumbnailSet>
              </VueflixCarousel>
            </template>
          </AccordionWidget>
        </div>
      </div>
    </section>
    <TextReview class="Player__Comments" type="comment">
      <template #title>댓글</template>
    </TextReview>
  </div>
</template>
<script setup>
// 그리드 어리어를 활용한 2차원 레이아웃

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utility/firebase";

import { reactive, onMounted, ref, computed, inject } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useAsyncState } from "@vueuse/core";

import AccordionWidget from "../components/AccordionWidget.vue";
import ThumbnailSet from "../components/ThumbnailSet.vue";
import VueflixCarousel from "../components/VueflixCarousel.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import TextReview from "@/components/TextReview.vue";

// 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
// 개발 상황에서는 httpcat 이미지를 대신 사용
// -> 파이어베이스 이용량 절약
const storage = getStorage();
const { state: videoSrc } = useAsyncState(
  getDownloadURL(fireRef(storage, "testAnime.mp4"))
);

const deviceInfo = inject("device-info");

const route = useRoute();
const animeInfo = ref({});
onMounted(async () => {
  const data = (await getDoc(doc(db, "anime", route.params.title))).data();
  animeInfo.value = data;
});

const nowEpisode = computed(() => {
  if (!animeInfo.value.parts) {
    return undefined;
  }
  const currentPart = animeInfo.value.parts.find(
    ({ part }) => part === route.params.part
  ).episodes;
  const currentEpisode = currentPart.find(
    ({ index }) => route.params.index === index
  );
  return currentEpisode;
});

const episodeCounter = computed(() => {
  if (!animeInfo.value.parts) {
    return 0;
  }
  return animeInfo.value.parts.reduce(
    (acc, cur) => acc + cur.episodes.length,
    0
  );
});

const store = useStore();
const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.Player {
  padding-top: 6rem;
  padding-bottom: 2rem;
  width: 100%;
  max-width: 132rem;
  margin: 0 auto;
  &__Ambient {
  }
  &__Video {
    aspect-ratio: 16/9;
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  &__TitleRenderer {
    padding: 2rem var(--inner-padding);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__AniTitle {
    width: var(--ani-title-width);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    color: transparent;
    transition: color 150ms ease-out;
    &--Loaded {
      color: inherit;
      background: transparent;
    }
    a {
      color: inherit;
    }
  }
  &__EpisodeTitle {
    width: var(--episode-title-width);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: transparent;
    transition: color 150ms ease-out;
    &--Loaded {
      color: inherit;
      background: transparent;
    }
  }
  &__EpisodesCounter {
    font-size: 1.5rem;
  }
  &__ScrollContainer {
    min-height: 30rem;
  }
  &__Parts {
    padding: var(--inner-padding);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    border: 1px solid hsl(var(--bg-200));
    border-radius: calc(var(--global-radius) * 4);
    margin-bottom: 2rem;
  }
  &__PartsAccordion {
    --carousel-padding: 0;
    --carousel-clip-radius: var(--global-radius);
    --thumbnail-width: 35vw;
    width: 100%;
  }
  &__Episodes {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    --accordion-sticky-top: 0;
    --accordion-direction: row;
  }
}

@media (hover: hover) and (pointer: fine) {
  .Player {
    &__PartsAccordion {
      --thumbnail-width: 23vw;
    }
    &__ScrollContainer {
      overflow: scroll;
      border-radius: var(--global-radius);
    }
  }
}

@media screen and (min-width: 1080px) {
  .Player {
    display: grid;
    padding: 9.2rem 2rem;
    // 좌 - 우 공간너비 지정
    grid-template-columns: auto 44rem;
    // 상 - 하 공간높이 지정
    grid-template-rows: repeat(3, auto);
    grid-auto-rows: minmax(0px, auto);
    column-gap: 2rem;

    &__TitleRenderer {
      padding: {
        left: 0;
        right: 0;
      }
      grid-area: 2 / 1 / 3 / 2;
    }
    &__AniTitle {
      font-size: 1.5rem;
    }

    &__Parts {
      grid-area: 1 / 2 / 2 / 3;
      gap: 2rem;
      padding: 2rem;
      overflow: hidden;
      display: flex;
      --carousel-overflow: scroll;
      margin-bottom: 0;
    }
    &__EpisodeTitle {
      font-size: 2rem;
    }
    &__PartsAccordion {
      width: 100%;
      --episode-gap: 1.6rem;
      --thumbnail-width: 14rem;
      --open-top-padding: 1.6rem;
      --open-bottom-padding: 0.8rem;
      gap: 1.2rem;
    }
    &__EpisodesCounter {
      font-size: 1.7rem;
      position: sticky;
      z-index: 2;
      top: 0;
      height: 2rem;
      display: flex;
      align-items: center;
    }
    &__ScrollContainer {
      width: 40rem;
      min-height: auto;
      flex-grow: 1;
      position: relative;
    }
    &__Episodes {
      width: 40rem;
      gap: 1.2rem;
      position: absolute;
      --accordion-direction: column;
    }

    &__Comments {
      grid-area: 3 / 1 / 4 / 2;
    }
  }
}
</style>
