<template>
  <div class="EpisodeCard">
    <component
      :is="user ? 'router-link' : 'div'"
      :to="user ? link : undefined"
      class="EpisodeCard__Thumbnail"
      @click="loginRequire"
    >
      <OptimizedMedia :src="thumbnailURL"></OptimizedMedia>
    </component>
    <component
      :is="user ? 'router-link' : 'div'"
      :to="user ? link : undefined"
      class="EpisodeCard__TextWrap"
      @click="loginRequire"
    >
      <p class="EpisodeCard__Title">
        <em class="EpisodeCard__Index"
          ><slot name="index"></slot> &middot;
          <span class="EpisodeCard__Date">{{ data.date }}</span></em
        >
        {{ data.title }}
      </p>
      <div class="col-bottom">
        <ProgressCircle
          class="EpisodeCard__WatchedPercent"
          :percent="progress"
          v-if="progress"
        ></ProgressCircle>
        <span class="EpisodeCard__Purchased" v-if="isPurchased">소장함</span>
      </div>
    </component>
  </div>
</template>

<script setup>
/*
 * [무슨 일이 일어나고 있나?]
 *
 * /anime/[애니제목](replace)
 * /player/[애니제목]/[몇기]/[몇화](replace)
 * /anime/[애니제목]
 * 마지막 히스토리의 관점에서 두 개의 이전 히스토리가 사라졌으니
   아예 anime 들어오기 전으로 빠져나갈 수 있는 것.
 */

import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import OptimizedMedia from "./OptimizedMedia.vue";
import ProgressCircle from "./ProgressCircle.vue";
import { useFirebaseStorage } from "@/composables/firebase";

const props = defineProps({
  part: { type: String },
  isLoggedin: { type: Boolean },
  price: { type: Number },
  data: { type: Object },
  link: { type: String },
  type: {
    type: String,
    validator(value) {
      return ["li", "div"].includes(value);
    },
  },
});

const route = useRoute();

const fileName = `${route.params.title}/${props.data.thumbnail}`;
const { fileSrc: thumbnailURL } = useFirebaseStorage(fileName);

const store = useStore();
const user = computed(() => store.state.auth.user);
const emit = defineEmits(["login-require"]);
function loginRequire() {
  if (!user.value) {
    emit("login-require");
  }
}

const isPurchased = computed(() => {
  if (user.value) {
    const target = user.value.purchased.find(
      (anime) => anime.aniTitle === route.params.title
    );
    const result =
      target?.episodes.findIndex(
        (episode) => episode.index === props.data.index
      ) !== -1;
    return result;
  }
  return false;
});

const progress = computed(() => {
  const anime = user.value?.maratonWatch.find(
    (anime) => anime.aniTitle === route.params.title
  );
  const episodeTarget = anime?.items.find(
    (episode) =>
      episode.index === props.data.index &&
      episode.part === Number(props.part.slice(0, -1))
  );
  return episodeTarget ? episodeTarget.episodePercent : 0;
});
</script>

<style lang="scss" scoped>
.EpisodeCard {
  display: flex;
  gap: 1rem;
  &__Thumbnail {
    width: 12rem;
    flex-shrink: 0;
  }
  &__TextWrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__Index {
    // 화수 + 날짜 뒤에 줄바꿈이 일어나도록
    display: block;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  &__Date {
    display: inline-block;
  }
  &__Title {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .col-bottom {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__WatchedPercent {
    --position: static;
    --gap: 0.5rem;
    --font-size: 1.2rem;
    height: 2.4rem;
  }
  &__Purchased {
    font-size: 1.2rem;
    font-weight: 500;
    color: hsl(var(--theme-500));
  }
}

@media screen and (min-width: 1080px) {
  .EpisodeCard {
    gap: 2rem;
    &__Thumbnail {
      width: var(--episode-card-thumbnail-width, 20rem);
    }
    &__Title {
      font-size: 1.7rem;
    }
    &__Index {
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: block;
    }
    &__Purchased {
      font-size: 1.4rem;
      color: hsl(var(--theme-500));
    }
  }
}
</style>
