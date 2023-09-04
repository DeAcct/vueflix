<template>
  <div class="Player">
    <AmbientPlayer :src="videoSrc" class="Player__Video"></AmbientPlayer>
    <section class="Player__TitleRenderer">
      <div class="Player__Titles">
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
          {{ route.params.part }} {{ route.params.index }}
          {{ nowEpisode?.title }}
        </h3>
      </div>
      <button class="AnimeItemHead__ShareBtn" @click="openSystemShare">
        <IconBase icon-name="공유">
          <IconShare />
        </IconBase>
      </button>
    </section>
    <section class="Player__Parts">
      <h3 class="Player__EpisodesCounter">
        총 {{ episodeCounter }}개의 에피소드
      </h3>
      <div class="Player__ScrollContainer">
        <div class="Player__Episodes">
          <AccordionWidget
            v-for="({ part, episodes }, iterateParts) in animeInfo.parts"
            :open="iterateParts === 0"
            :key="iterateParts"
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
                  :link="`/player/${animeInfo.name}/${part}/${index}`"
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
                  :replace="{
                    main: true,
                    sub: true,
                  }"
                ></ThumbnailSet>
              </VueflixCarousel>
            </template>
          </AccordionWidget>
        </div>
      </div>
    </section>
    <ReactionCombo class="Player__Comments" type="comment" title-tag="h4">
      <template #title>댓글</template>
    </ReactionCombo>
  </div>
</template>
<script setup>
// 그리드 어리어를 활용한 2차원 레이아웃

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import { onMounted, ref, computed, inject } from "vue";
import { useRoute } from "vue-router";
import { useAsyncState } from "@vueuse/core";

import AccordionWidget from "@/components/AccordionWidget.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";
import IconBase from "@/components/IconBase.vue";
import IconShare from "@/components/icons/IconShare.vue";

// 개발 시 임시로 사용할 동영상(요청량 절약)
//import TestAnime from "@/assets/TestAnime.mp4";

// 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
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

async function openSystemShare() {
  const shareData = {
    title: `${route.params.title} ${route.params.part} ${route.params.index}`,
    text: "애니를 당당하게 즐기세요!",
    url: window.location.href,
  };
  await navigator.share(shareData);
}
</script>

<style lang="scss" scoped>
.Player {
  padding-top: 6rem;
  padding-bottom: 2rem;
  width: 100%;
  max-width: 170rem;
  margin: 0 auto;
  &__Video {
    position: sticky;
    top: 6rem;
    z-index: 100;
  }

  &__TitleRenderer {
    z-index: 4;
    padding: 2rem var(--inner-padding);
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
  }
  &__Titles {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.4rem;
  }
  &__AniTitle {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: transparent;
    transition: 150ms ease-out;
    min-width: 0;
    &--Loaded {
      color: inherit;
      background: transparent;
    }
    a {
      color: inherit;
    }
  }
  &__EpisodeTitle {
    min-width: 0;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    color: transparent;
    transition: color 150ms ease-out;
    &--Loaded {
      color: inherit;
      background: transparent;
    }
  }

  &__Parts {
    z-index: 5;
    padding: var(--inner-padding);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    background-color: hsl(var(--text-900) / 0.05);
    border-radius: calc(var(--global-radius) * 4);
    margin-bottom: 2rem;
  }
  &__EpisodesCounter {
    font-size: 1.6rem;
  }
  &__ScrollContainer {
    overflow: scroll;
    height: 30rem;
    border-radius: var(--global-radius);
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

  &__Comments {
    z-index: 6;
    padding: 0;
    font-size: 1.6rem;
    max-width: unset;
    width: 100%;
    --reaction-body-width: 100%;
    --body-radius: calc(var(--global-radius) * 4);
    --reaction-combo-bg: hsl(var(--text-900) / 0.05);
  }
}

@media (hover: hover) and (pointer: fine) {
  .Player {
    &__PartsAccordion {
      --thumbnail-width: 15rem;
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

    &__Video {
      position: relative;
      top: unset;
      z-index: 1;
    }

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
      --thumbnail-width: 15rem;
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
