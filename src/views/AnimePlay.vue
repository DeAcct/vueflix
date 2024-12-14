<template>
  <div class="AnimePlay">
    <div
      class="AnimePlay__Frame"
      :class="mode === 'theater' && 'AnimePlay__Frame--Theater'"
    >
      <AmbientPlayer
        class="AnimePlay__Video"
        @toggle-theater="toggleTheater"
        @time-update="updateTime"
        :src="videoSrc"
        :time
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
        <RouterLink
          class="AnimePlay__AniTitle loading-target"
          :class="nowEpisode && 'AnimePlay__AniTitle--Loaded'"
          :to="{
            name: 'home',
            query: {
              modal: route.params.title,
              route: 'episodes',
            },
          }"
          >{{ route.params.title }}</RouterLink
        >
        <h2
          class="AnimePlay__EpisodeTitle loading-target"
          :class="nowEpisode && 'AnimePlay__EpisodeTitle--Loaded'"
        >
          {{ route.params.part }} {{ route.params.index }}
          {{ nowEpisode?.title }}
        </h2>
      </div>
      <button @click="openSystemShare" type="button">
        <IconBase>
          <IconShare />
        </IconBase>
      </button>
    </section>
    <section
      class="AnimePlay__Parts"
      :class="mode === 'theater' && 'AnimePlay__Parts--Theater'"
    >
      <h3 class="AnimePlay__EpisodesCounter">
        {{ episodeCounter }}개의 에피소드
      </h3>
      <div class="AnimePlay__ScrollContainer">
        <Episodes
          :anime-info
          class="AnimePlay__Episodes"
          :sort-base
          @toggle-sort="toggleSort"
        />
      </div>
    </section>
    <ReactionCombo
      class="AnimePlay__Comments"
      type="comment"
      title-tag="h3"
      :parent="{
        title: route.params.title,
        part: route.params.part,
        index: route.params.index,
      }"
      @interact="setInteract"
      @request-teleport="onRequestTeleport"
      track-target
      :time
    >
      <template #title>댓글</template>
      <template #description>
        <div class="AnimePlay__StickyPrevent">
          <AccordionGroup open class="AnimePlay__Description">
            <template #title>댓글 안내</template>
            <template #content>
              <p class="AnimePlay__DescText">
                댓글은 에피소드를 보고 의견을 자유롭게 나누는 공간이에요.
              </p>
              <ul class="AnimePlay__DescList">
                <li class="AnimePlay__DescText">
                  서로의 취향을 존중해 주세요.
                </li>
                <li class="AnimePlay__DescText">
                  스포일러가 포함된 댓글은 스포일러 버튼을 활성화해 주세요.
                </li>
                <li class="AnimePlay__DescText">
                  시간:분:초 혹은 분:초 형식으로 작성하면 애니 시간을 첨부할 수
                  있어요.
                </li>
                <li class="AnimePlay__DescText">
                  '재생 위치 추가'를 누르면 지금 재생중인 위치를 현재 커서
                  위치에 넣을 수 있어요.
                </li>
              </ul>
            </template>
          </AccordionGroup>
        </div>
      </template>
    </ReactionCombo>
    <ToTop
      class="AnimePlay__ToTop"
      :class="scrollState !== 'top' && 'AnimePlay__ToTop--Show'"
    ></ToTop>
  </div>
</template>

<script setup>
// 그리드 어리어를 활용한 2차원 레이아웃

import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";

import { onMounted, onUnmounted, ref, computed } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useAuth } from "@/store/auth";

import { useMaratonData } from "@/api/maraton";
import { useScroll } from "@/composables/scroll";
import { useEpisode } from "@/composables/episode";
import { useHead } from "@/composables/head";

import AmbientPlayer from "@/components/AmbientPlayer.vue";
import Episodes from "@/views/Episodes.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";
import ToTop from "@/components/ToTop.vue";

import IconBase from "@/components/IconBase.vue";
import IconShare from "@/components/icons/IconShare.vue";
import AccordionGroup from "../components/AccordionGroup.vue";

const mode = ref("normal");
const area = computed(() => {
  if (mode.value === "normal") {
    return {
      video: "1 / 1 / 2 / 2",
      parts: "1 / 2 / 2 / 3",
      title: "2 / 1 / 3 / 2",
      comments: "3 / 1 / 4 / 2",
    };
  }
  return {
    video: "1 / 1 / 2 / 3",
    parts: "2 / 2 / 4 / 3",
    title: "2 / 1 / 3 / 2",
    comments: "3 / 1 / 4 / 2",
  };
});
function toggleTheater() {
  mode.value = mode.value === "normal" ? "theater" : "normal";
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
    description: `놓친 ${route.params.title}는 역시 데레에서!`,
    "og:description": `놓친 ${route.params.title}는 역시 데레에서!`,
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
  time.value = e;
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
const sortBase = ref("asc");
function toggleSort() {
  sortBase.value = sortBase.value === "asc" ? "desc" : "asc";
}

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
    time.value = Number(query.time);
    $player.value.$video.currentTime = Number(query.time);
    $player.value.$video.play();
    return;
  }
  $player.value.$video.currentTime = getEpisodeProgress(
    route.params.title,
    route.params.part,
    route.params.index
  ).current;
});
const saveAndCleanUp = router.beforeEach(async (to, from) => {
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

async function openSystemShare() {
  console.log(window.location);
  const { origin, pathname } = window.location;
  const shareData = {
    title: `${route.params.title} ${route.params.part} ${route.params.index}`,
    text: "애니를 당당하게 즐기세요!",
    url: `${origin}${pathname}?time=${Math.floor(time.value)}`,
  };
  await navigator.share(shareData);
}

const { state: scrollState } = useScroll();
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
    color: #fff;
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
  &__Episodes {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    --accordion-sticky-top: 0;
    --episodes-z-index: var(--z-index-s1);
    --episodes-width: 100%;
    --episodes-action-width: 100%;
    margin-top: 0;
  }

  &__Comments {
    z-index: 6;
    font-size: 1.6rem;
    max-width: unset;
    margin: 0 auto;
  }
  &__Description {
    --accordion-bg: transparent;
    --accordion-sticky-top: 0;
    --accordion-title-weight: 700;
    // --accordion-title-padding: 1.2rem 0;
    background-color: hsl(var(--bg-200));
  }
  &__DescList {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 2rem 2rem;
  }
  &__DescText {
    font-size: 1.4rem;
    list-style: disc;
    margin-left: 2rem;
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
      --accordion-sticky-top: 0;
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
    &__LimitTitle {
      font-size: 2rem;
    }
    &__LimitExplain {
      color: #000;
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    &__CTA {
      background-color: hsl(var(--theme-500));
      padding: 0.8rem 1.2rem;
      font-size: 1.4rem;
      border-radius: var(--global-radius);
      color: #fff;
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
    &__EpisodeTitle {
      font-size: 2rem;
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

    &__Comments {
      grid-area: v-bind("area.comments");
      padding: 0;
      --reaction-combo-title-padding: 0;
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
