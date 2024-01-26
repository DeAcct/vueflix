<template>
  <div class="AnimePlay">
    <div
      :class="[
        'AnimePlay__Frame',
        { 'AnimePlay__Frame--Theater': mode === 'theater' },
      ]"
    >
      <AmbientPlayer
        class="AnimePlay__Video"
        @toggle-theater="toggleTheater"
        @time-update="updateTime"
        :src="videoSrc"
        :time="time"
        :next-episode="nextEpisode"
        :prev-episode="prevEpisode"
        :ambient="mode !== 'theater'"
        :prevent-key-binding="isInteracting"
        :meta="{
          episode: `${route.params.title} ${route.params.part} ${route.params.index}`,
          title: nowEpisode?.title,
        }"
        ref="$player"
      >
        <template #time-limit>
          <Transition name="limit-fade">
            <div class="AnimePlay__TimeLimit" v-if="showLimitAlert">
              <strong class="AnimePlay__LimitTitle"
                >1분 미리보기가 끝났어요ㅠㅠ</strong
              >
              <p class="AnimePlay__LimitExplain">
                더 보고싶다면 로그인해주세요!
              </p>
              <RouterLink to="/auth" class="AnimePlay__CTA">로그인</RouterLink>
            </div>
          </Transition>
        </template>
      </AmbientPlayer>
    </div>
    <section class="AnimePlay__TitleRenderer">
      <div class="AnimePlay__Titles">
        <h2
          :class="[
            'AnimePlay__AniTitle',
            'loading-target',
            { 'AnimePlay__AniTitle--Loaded': nowEpisode },
          ]"
        >
          <RouterLink :to="`/anime/${route.params.title}/episodes`" replace>
            {{ route.params.title }}
          </RouterLink>
        </h2>
        <h3
          :class="[
            'AnimePlay__EpisodeTitle',
            'loading-target',
            { 'AnimePlay__EpisodeTitle--Loaded': nowEpisode },
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
    <section
      :class="[
        'AnimePlay__Parts',
        { 'AnimePlay__Parts--Theater': mode === 'theater' },
      ]"
    >
      <h3 class="AnimePlay__EpisodesCounter">
        {{ episodeCounter }}개의 에피소드
      </h3>
      <div class="AnimePlay__ScrollContainer">
        <div class="AnimePlay__Episodes">
          <AccordionWidget
            v-for="({ part, episodes }, iterateParts) in animeInfo.parts"
            :open="iterateParts === 0"
            :key="iterateParts"
            class="AnimePlay__PartsAccordion"
          >
            <template v-slot:title>
              {{ part }}
            </template>
            <template v-slot:content>
              <VueflixCarousel
                :type="deviceInfo.isTouch ? 'arrow' : 'nobutton'"
                :length="episodes.length"
                :direction="deviceInfo.isTouch ? 'row' : 'column'"
                class="AnimePlay__EpisodesCarousel"
              >
                <ThumbnailSet
                  v-for="{ title, index, thumbnail } in episodes"
                  :key="`${title}-${part}-${index}`"
                  class="AnimePlay__EpisodeItem"
                >
                  <template #image>
                    <RouterLink
                      :to="`/anime-play/${route.params.title}/${part}/${index}`"
                      class="AnimePlay__Thumbnail"
                      exact-active-class="AnimePlay__Thumbnail--Selected"
                    >
                      <OptimizedMedia
                        class="AnimePlay__ThumbnailImage"
                        :src="`${route.params.title}/${thumbnail}`"
                        :alt="`${route.params.title} ${part} ${index} 미리보기 이미지`"
                      />
                      <ProgressCircle
                        v-if="
                          getEpisodeProgress(route.params.title, part, index)
                            .percent !== '0%'
                        "
                        class="AnimePlay__WatchPercent"
                        :percent="
                          getEpisodeProgress(route.params.title, part, index)
                            .percent
                        "
                      />
                    </RouterLink>
                  </template>
                  <template #text>
                    <RouterLink
                      class="AnimePlay__TextLink"
                      :to="`/anime-play/${animeInfo.name}/${part}/${index}`"
                    >
                      <strong class="AnimePlay__PartIndex">
                        {{ part }} {{ index }}
                      </strong>
                      <span class="AnimePlay__ThumbnailTitle">{{ title }}</span>
                    </RouterLink>
                  </template>
                </ThumbnailSet>
              </VueflixCarousel>
            </template>
          </AccordionWidget>
        </div>
      </div>
    </section>
    <ReactionCombo
      class="AnimePlay__Comments"
      type="comment"
      title-tag="h4"
      :parent="`${route.params.title} ${route.params.part} ${route.params.index}`"
      @interact="setInteract"
      @request-teleport="onRequestTeleport"
    >
      <template #title>댓글</template>
    </ReactionCombo>
    <ToTop
      :class="[
        'AnimePlay__ToTop',
        { 'AnimePlay__ToTop--Show': scrollBehavior !== 'top' },
      ]"
    ></ToTop>
  </div>
</template>

<script setup>
// 그리드 어리어를 활용한 2차원 레이아웃

import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";

import { onMounted, onUnmounted, ref, computed, inject, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuth } from "@/store/auth";

import { useMaratonData } from "@/composables/maraton";
import { useScroll } from "@/composables/scroll";
import { useEpisode } from "@/composables/episode";
import { useHead } from "@/composables/head";

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import AccordionWidget from "@/components/AccordionWidget.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import ToTop from "@/components/ToTop.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";

import IconBase from "@/components/IconBase.vue";
import IconShare from "@/components/icons/IconShare.vue";

const mode = ref("normal");
const area = reactive({
  video: "1 / 1 / 2 / 2",
  parts: "1 / 2 / 2 / 3",
  partsTop: "0px",
  title: "2 / 1 / 3 / 2",
  comments: "3 / 1 / 4 / 2",
});
function toggleTheater() {
  if (mode.value === "normal") {
    mode.value = "theater";
    area.video = "1 / 1 / 2 / 3";
    area.parts = "2 / 2 / 4 / 3";
    area.title = "2 / 1 / 3 / 2";
    area.comments = "3 / 1 / 4 / 2";
    return;
  }
  mode.value = "normal";
  area.video = "1 / 1 / 2 / 2";
  area.parts = "1 / 2 / 2 / 3";
  area.partsTop = "0px";
  area.title = "2 / 1 / 3 / 2";
  area.comments = "3 / 1 / 4 / 2";
}
// 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
const storage = getStorage();
const videoSrc = ref("");

const router = useRouter();
const route = useRoute();
useHead({
  title: `${route.params.title} ${route.params.part} ${route.params.index} 다시보기`,
  meta: {
    description: `놓친 애니는 역시 데레에서!`,
    "og:description": `놓친 애니는 역시 데레에서!`,
  },
});

const auth = useAuth();
const user = computed(() => auth.user);

const { getEpisodeProgress, updateMaraton } = useMaratonData(
  route.params.title
);

const TRIAL_TIME_LIMIT = 60;
const time = ref(0);
const $player = ref(null);
const showLimitAlert = ref(false);
function updateTime(e) {
  showLimitAlert.value = e > TRIAL_TIME_LIMIT && !user.value;
  if (showLimitAlert.value) {
    $player.value.$video.pause();
  }
}

const {
  animeInfo,
  getAnimeData,
  nowEpisode,
  nextEpisode,
  prevEpisode,
  episodeCounter,
} = useEpisode({
  aniTitle: route.params.title,
  part: route.params.part,
  index: route.params.index,
});

async function getVideoUrl() {
  if (import.meta.env.DEV) {
    // 개발 시 임시로 사용할 동영상(요청량 절약)
    const TestAnime = new URL("../assets/TestAnime2.webm", import.meta.url)
      .href;
    videoSrc.value = TestAnime;
    return;
  }
  // videoSrc.value = await getDownloadURL(fireRef(storage, `${animationName}/${part}/${index}`.webm"));
  videoSrc.value = await getDownloadURL(fireRef(storage, "TestAnime2.webm"));
}

onMounted(async () => {
  await getVideoUrl();
  const query = route.query;
  // 마라톤(시청기록)보다 쿼리스트링을 우선시한다.
  // 쿼리스트링은 공유 URL을 통해 접근한 것을 대응한 것이다.
  if (query.time) {
    $player.value.$video.currentTime = Number(query.time);
    return;
  }
  $player.value.$video.currentTime = getEpisodeProgress(
    route.params.title,
    route.params.part,
    route.params.index
  ).current;
});
const saveAndCleanUp = router.afterEach(async (to, from) => {
  if (to.path === from.path) {
    return;
  }
  if (to.name === "anime-play") {
    await getAnimeData();
  }
  await updateMaraton({
    part: from.params.part,
    index: from.params.index,
    aniTitle: from.params.title,
    progress: {
      current: $player.value.$video.currentTime,
      max: $player.value.$video.duration,
    },
    thumbnail: nowEpisode.value.thumbnail,
    title: nowEpisode.value.title,
  });
});
onUnmounted(async () => {
  saveAndCleanUp();
});
function onRequestTeleport(e) {
  $player.value.$video.currentTime = e;
}

const isInteracting = ref(false);
function setInteract(e) {
  isInteracting.value = e;
}

const deviceInfo = inject("device-info");

async function openSystemShare() {
  const shareData = {
    title: `${route.params.title} ${route.params.part} ${route.params.index}`,
    text: "애니를 당당하게 즐기세요!",
    url: window.location.href,
  };
  await navigator.share(shareData);
}

const { scrollBehavior } = useScroll();
</script>

<style lang="scss" scoped>
.AnimePlay {
  padding-top: 6rem;
  padding-bottom: 2rem;
  width: 100%;
  margin: 0 auto;
  &__Frame {
    position: sticky;
    top: 6rem;
    z-index: 100;
  }
  &__TimeLimit {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(10px);
    background-color: hsl(0 0% 100% / 0.5);
    display: flex;
    flex-direction: column;
    padding: var(--inner-padding);
    justify-content: center;
    align-items: flex-start;
  }
  &__LimitTitle {
    color: #000;
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  &__LimitExplain {
    color: #000;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  &__CTA {
    background-color: hsl(var(--theme-500));
    padding: 0.8rem 1.2rem;
    font-size: 1.5rem;
    border-radius: var(--global-radius);
  }

  &__TitleRenderer {
    z-index: 4;
    padding: 2rem var(--inner-padding) 0;
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
  }
  &__Titles {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__AniTitle {
    font-size: 1.2rem;
    font-weight: 500;
    color: transparent;
    transition: 150ms ease-out;
    &--Loaded {
      color: inherit;
      background: transparent;
    }
    a {
      line-height: 1.5;
      display: block;
      color: inherit;
    }

    &:hover,
    &:focus {
      color: hsl(var(--theme-500));
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
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: calc(var(--global-radius) * 4);
    margin-bottom: 4rem;
  }
  &__EpisodesCounter {
    font-size: 1.6rem;
  }
  &__ScrollContainer {
    overflow: scroll;
    border-radius: var(--global-radius);
    height: 30rem;
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
  &__EpisodeItem {
    --thumbnail-units: 33;
    width: calc(var(--thumbnail-units) * 1px * var(--vw));
    flex-direction: column;
  }
  &__Thumbnail {
    width: calc(var(--thumbnail-units) * 1px * var(--vw));
    position: relative;
    overflow: hidden;
    border-radius: var(--global-radius);
  }
  &__WatchPercent {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0.8rem;
    background: linear-gradient(transparent, hsl(0 0% 0% / 0.5));
  }
  &__TextLink {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  &__PartIndex {
    font-size: 1.4rem;
  }
  &__ThumbnailTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.3;
  }

  &__Comments {
    z-index: 6;
    padding: 0 2rem;
    font-size: 1.6rem;
    max-width: unset;
    width: 100%;
  }

  &__ToTop {
    width: 4.8rem;
    height: 4.8rem;
    position: fixed;
    bottom: 1.2rem;
    left: 50%;
    transform: translate(-50%);
    background-color: hsl(var(--theme-500));
    z-index: 100;
  }
}

.limit-fade-enter-active,
.limit-fade-leave-active {
  transition: opacity 150ms ease;
}

.limit-fade-enter-from,
.limit-fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .AnimePlay {
    &__EpisodeItem {
      --thumbnail-units: 20;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .AnimePlay {
    &__EpisodeItem {
      --thumbnail-units: 15;
      width: 100%;
      flex-direction: row;
    }
    &__TextLink {
      flex-grow: 1;
      width: 100%;
    }
  }
}

@media screen and (min-width: 1025px) {
  .AnimePlay {
    display: grid;
    padding: 9.2rem 2rem 2rem;
    max-width: 192rem;
    // 좌 - 우 공간너비 지정
    grid-template-columns: auto 44rem;
    // 상 - 하 공간높이 지정
    grid-template-rows: repeat(3, auto);
    grid-auto-rows: minmax(0px, auto);
    column-gap: 2rem;

    &__Frame {
      position: relative;
      z-index: 1;
      top: unset;
      grid-area: v-bind("area.video");
      &--Theater {
        height: 56.25vw;
        max-height: 80vh;
        margin-top: -2rem;
      }
    }
    &__Frame--Theater &__Video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100%;
    }

    &__TitleRenderer {
      padding: {
        left: 0;
        right: 0;
      }
      grid-area: v-bind("area.title");
    }
    &__AniTitle {
      font-size: 1.5rem;
    }

    &__Parts {
      grid-area: v-bind("area.parts");
      gap: 2rem;
      padding: 0;
      display: flex;
      --carousel-overflow: scroll;
      margin-bottom: 0;
      &--Theater {
        margin-top: 2rem;
      }
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
      width: 100%;
      flex-grow: 1;
      position: relative;
    }
    &__Episodes {
      width: 100%;
      gap: 1.2rem;
      position: absolute;
      --accordion-direction: column;
    }
    &__Thumbnail {
      width: 25rem;
      position: relative;
    }

    &__Comments {
      grid-area: v-bind("area.comments");
      padding: 0;
    }

    &__ToTop {
      left: auto;
      right: max(calc((100% - 1920px) / 2), 2rem);
      transform: translateY(10rem);
      &--Show {
        transform: none;
      }
    }
  }
}
</style>
