<template>
  <div class="Player">
    <!--AmbientPlayer :src="videoSrc" class="Player__Body"></AmbientPlayer-->
    <div class="Player__Video">
      <img src="https://http.cat/403" />
    </div>
    <div class="Player__TitleRenderer">
      <h2 class="Player__AniTitle">
        <RouterLink :to="`/anime/${route.params.title}/episodes`">
          {{ route.params.title }}
        </RouterLink>
      </h2>
      <h3 class="Player__EpisodeTitle">
        {{ nowEpisode.index }} {{ nowEpisode.title }}
      </h3>
    </div>
    <div class="Player__Parts">
      <strong class="Player__EpisodesCounter"
        >총 {{ episodeCounter }}개의 에피소드</strong
      >
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
              type="nobutton"
              :length="episodes.length"
              :direction="deviceInfo.isMobile ? 'row' : 'column'"
            >
              <ThumbnailSet
                v-for="{ title, index, thumbnail } in episodes"
                :direction="deviceInfo.isMobile ? 'column' : 'row'"
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
  </div>
</template>
<script setup>
// 그리드 어리어를 활용한 2차원 레이아웃

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { useAsyncState } from "@vueuse/core";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utility/firebase";
import { reactive, onMounted, ref, computed, inject } from "vue";
import AccordionWidget from "../components/AccordionWidget.vue";
import ThumbnailSet from "../components/ThumbnailSet.vue";
import VueflixCarousel from "../components/VueflixCarousel.vue";

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
    return "";
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
</script>

<style lang="scss" scoped>
.Player {
  padding-top: 6rem;
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  &__Ambient {
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
    gap: 0.8rem;
  }
  &__AniTitle {
    font-size: 1.3rem;
    font-weight: 500;
  }
  &__EpisodeTitle {
    font-size: 1.5rem;
    font-weight: 700;
  }
  &__EpisodesCounter {
    font-size: 1.5rem;
  }
  &__Parts {
    padding: var(--inner-padding);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    border: 1px solid hsl(var(--bg-200));
    border-radius: calc(var(--global-radius) * 4);
  }
  &__PartsAccordion {
    --accordion-sticky-top: 0;
    --carousel-padding: 0;
    --thumbnail-width: 35vw;
    width: 100%;
  }
  &__Episodes {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    --accordion-direction: row;
  }
}

@media screen and (min-width: 1080px) {
  .Player {
    display: grid;
    padding-top: 9.2rem;
    // 좌 - 우 공간너비 지정
    grid-template-columns: auto 40rem;
    // 상 - 하 공간높이 지정
    grid-template-rows: repeat(3, auto);
    grid-auto-rows: minmax(0px, auto);
    column-gap: 2rem;

    &__TitleRenderer {
      grid-area: 2 / 1 / 3 / 2;
    }
    &__Parts {
      grid-area: 1 / 2 / 2 / 3;
      gap: 2rem;
      padding: 2rem;
      overflow: hidden;
    }
    &__PartsAccordion {
      width: 100%;
      --episode-gap: 1.6rem;
      --thumbnail-width: 14rem;
      gap: 1.2rem;
    }
    &__EpisodesCounter {
      font-size: 1.7rem;
    }
    &__Episodes {
      gap: 1.2rem;
      height: 40rem;
      overflow-y: scroll;
      --accordion-direction: column;
    }
  }
}
</style>
