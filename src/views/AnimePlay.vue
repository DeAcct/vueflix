<template>
  <div class="AnimePlay">
    <div
      :class="[
        'AnimePlay__Frame',
        { 'AnimePlay__Frame--Theater': mode === 'theater' },
      ]"
    >
      <AmbientPlayer
        class="Player__Video"
        @toggle-theater="toggleTheater"
        @save-point="savePoint"
        :src="videoSrc"
        :time="time"
        :next-episode="nextEpisode"
        :prev-episode="prevEpisode"
        :ambient="mode !== 'theater'"
        :prevent-key-binding="isInteracting"
      />
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
          <RouterLink :to="`/anime/${route.params.title}/episodes`">
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
              >
                <ThumbnailSet
                  v-for="{ title, index, thumbnail } in episodes"
                  :link="`/anime-play/${animeInfo.name}/${part}/${index}`"
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
                  :watch-percent="getEpisodePercent(part, index)"
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
    <ReactionCombo
      class="AnimePlay__Comments"
      type="comment"
      title-tag="h4"
      @interact="setInteract"
      :parent="`${route.params.title} ${route.params.part} ${route.params.index}`"
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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/utility/firebase";

import { onMounted, ref, computed, inject, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import { useMaratonData } from "@/composables/maraton";
import { useScroll } from "@/composables/scroll";

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import AccordionWidget from "@/components/AccordionWidget.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import ToTop from "../components/ToTop.vue";

import IconBase from "@/components/IconBase.vue";
import IconShare from "@/components/icons/IconShare.vue";

// 개발 시 임시로 사용할 동영상(요청량 절약)
// import TestAnime from "@/assets/TestAnime.mp4";

// 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
const storage = getStorage();
const videoSrc = ref("");
onMounted(getVideoUrl);
async function getVideoUrl() {
  videoSrc.value = await getDownloadURL(fireRef(storage, "testAnime.mp4"));
}
const router = useRouter();
router.afterEach(async () => {
  await getVideoUrl();
});
const store = useStore();
const recentWatched = computed(() => store.state.auth.user.recentWatched);
const maratonWatch = computed(() => store.state.auth.user.maratonWatch);
async function savePoint(e) {
  const newData = {
    aniTitle: route.params.title,
    title: nowEpisode.value.title,
    thumbnail: nowEpisode.value.thumbnail,
    part: route.params.part,
    index: route.params.index,
    time: e,
    watchedPoint: new Date(),
    maratonMax: episodeCounter.value,
  };
  store.commit("auth/updateRecentWatched", newData);
  store.commit("auth/updateMaratonWatch", newData);
  await setDoc(
    doc(db, "user", session.uid),
    { recentWatched: recentWatched.value, maratonWatch: maratonWatch.value },
    { merge: true }
  );
}

const { getEpisodePercent } = useMaratonData();
// const teleportTime = computed(() => {
//   const target = maratonWatch.value.find(
//     (anime) => anime.aniTitle === route.params.title
//   );
//   // 현재 애니가 정주행 목록에 존재하지 않으면(처음 보는 애니면) 0 반환(처음부터 재생)
//   if (!target) {
//     return 0;
//   }

//   const log = target.list.find(
//     (log) => log.part === route.params.part && log.index === route.params.index
//   );
//   return log.time.current;
// });
const time = ref(0);
onMounted(() => {
  const target = maratonWatch.value.find(
    (anime) => anime.aniTitle === route.params.title
  );
  // 현재 애니가 정주행 목록에 존재하지 않으면(처음 보는 애니면) 0 반환(처음부터 재생)
  if (!target) {
    time.value = 0;
  }

  const log = target.list.find(
    (log) => log.part === route.params.part && log.index === route.params.index
  );
  time.value = log.time.current;
});
function onRequestTeleport(e) {
  time.value = e;
}

const isInteracting = ref(false);
function setInteract(e) {
  isInteracting.value = e;
}

const deviceInfo = inject("device-info");

const route = useRoute();
const animeInfo = ref({});
onMounted(async () => {
  if (!session) {
    router.replace(`/anime/${route.params.title}/episodes`);
  }
  const data = (await getDoc(doc(db, "anime", route.params.title))).data();
  animeInfo.value = data;
});

const session = getAuth().currentUser;

const nowEpisode = computed(() => {
  if (!animeInfo.value.parts) {
    return undefined;
  }
  const currentPart = animeInfo.value.parts.find(
    ({ part }) => part === route.params.part
  ).episodes;
  return currentPart.find(({ index }) => route.params.index === index);
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

const nextEpisode = computed(() => {
  if (!animeInfo.value.parts) {
    return undefined;
  }
  const lastEpisode = animeInfo.value.parts
    .find(({ part }) => part === route.params.part)
    .episodes.at(-1);
  const lastPart = animeInfo.value.parts.at(-1);

  // 현재 에피소드로 초기화한 후 작업
  let nextPart = animeInfo.value.parts.findIndex(
    ({ part }) => part === route.params.part
  );
  let nextIndex = animeInfo.value.parts[nextPart].episodes.findIndex(
    ({ index }) => route.params.index === index
  );

  if (
    lastPart.part === route.params.part &&
    lastEpisode.index === route.params.index
  ) {
    return "다음 화 없음";
  }
  if (lastEpisode.index === route.params.index) {
    nextIndex = 0;
    nextPart++;
  } else {
    nextIndex++;
  }

  const { part, episodes } = animeInfo.value.parts[nextPart];
  return {
    part,
    ...episodes[nextIndex],
  };
});

const prevEpisode = computed(() => {
  if (!animeInfo.value.parts) {
    return undefined;
  }
  const firstEpisode = animeInfo.value.parts
    .find(({ part }) => part === route.params.part)
    .episodes.at(0);
  const firstPart = animeInfo.value.parts.at(0);

  // 현재 에피소드로 초기화한 후 작업
  let prevPart = animeInfo.value.parts.findIndex(
    ({ part }) => part === route.params.part
  );
  let prevIndex = animeInfo.value.parts[prevPart].episodes.findIndex(
    ({ index }) => route.params.index === index
  );

  if (
    firstPart.part === route.params.part &&
    firstEpisode.index === route.params.index
  ) {
    return "이전 화 없음";
  }
  if (firstEpisode.index === route.params.index) {
    prevIndex = animeInfo.value.parts.find(
      ({ part }) => part === route.params.part
    ).episodes.length;
    prevPart--;
  } else {
    prevIndex--;
  }

  const { part, episodes } = animeInfo.value.parts[prevPart];
  return {
    part,
    ...episodes[prevIndex],
  };
});

async function openSystemShare() {
  const shareData = {
    title: `${route.params.title} ${route.params.part} ${route.params.index}`,
    text: "애니를 당당하게 즐기세요!",
    url: window.location.href,
  };
  await navigator.share(shareData);
}

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

  &__TitleRenderer {
    z-index: 4;
    padding: 2rem var(--inner-padding) 0;
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
    margin-bottom: 3rem;
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
    color: transparent;
    transition: 150ms ease-out;
    min-width: 0;
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

@media (hover: hover) and (pointer: fine) {
  .AnimePlay {
    &__PartsAccordion {
      --thumbnail-width: 15rem;
    }
  }
}

@media screen and (min-width: 1080px) {
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
      top: 0;
      grid-area: v-bind("area.video");
      &--Theater {
        margin-top: -5.2rem;
        height: 56.25vw;
        max-height: 80vh;
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
      grid-area: v-bind("area.comments");
      padding: 0;
    }
  }
}
</style>
