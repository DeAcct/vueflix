<template>
  <li class="episode-card">
    <component
      :is="user ? 'router-link' : 'div'"
      :to="user ? link : undefined"
      class="episode-card__thumbnail"
      @click="loginRequire"
    >
      <optimized-image :src="thumbnailURL"></optimized-image>
    </component>
    <component
      :is="user ? 'router-link' : 'div'"
      :to="user ? link : undefined"
      class="episode-card__text-wrap"
      @click="loginRequire"
    >
      <p class="episode-card__title">
        <em class="episode-card__index"
          ><slot name="index"></slot> &middot;
          <span class="episode-card__date">{{ data.date }}</span></em
        >
        {{ data.title }}
      </p>
      <div class="col-bottom">
        <progress-widget
          class="episode-card__watched-percent"
          :percent="progress"
          v-if="progress"
        ></progress-widget>
        <span class="episode-card__purchased" v-if="isPurchased">소장함</span>
      </div>
    </component>
  </li>
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

import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import OptimizedImage from "./OptimizedImage.vue";
import ProgressWidget from "./ProgressWidget.vue";

const props = defineProps({
  part: String,
  isLoggedin: Boolean,
  price: Number,
  data: Object,
  link: String,
});

onMounted(async () => {
  await getPosterURL();
});
const route = useRoute();
const thumbnailURL = ref("");
async function getPosterURL() {
  const storage = getStorage();
  const thumbnailRef = fireRef(
    storage,
    `${route.params.title}/${props.data.thumbnail}`
  );
  const URL = await getDownloadURL(thumbnailRef);
  thumbnailURL.value = URL;
}

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
  const anime = user.value.maratonWatch.find(
    (anime) => anime.aniTitle === this.$route.params.title
  );
  const episodeTarget = anime?.items.find(
    (episode) =>
      episode.index === props.data.index &&
      episode.part === Number(props.part.slice(0, -1))
  );
  return episodeTarget ? episodeTarget.episodePercent : 0;
});

// export default {
//   data() {
//     return {
//       checked: false,
//     };
//   },
//   computed:
//     progress() {
//       const anime = this.auth?.maratonWatch.find(
//         (anime) => anime.aniTitle === this.$route.params.title
//       );
//       const episodeTarget = anime?.items.find(
//         (episode) =>
//           episode.index === this.data.index &&
//           episode.part === Number(this.part.slice(0, -1))
//       );
//       return episodeTarget ? episodeTarget.episodePercent : 0;
//     },
//   },
//   watch: {
//     checked() {
//       if (this.checked) {
//         this.$emit("added", {
//           title: this.title,
//           part: this.part,
//           index: this.index,
//           thumbnail: this.thumbnail,
//         });
//       } else {
//         this.$emit("deleted", { title: this.title, date: this.date });
//       }
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.episode-card {
  display: flex;
  gap: 1rem;
  &__thumbnail {
    width: 12rem;
    flex-shrink: 0;
  }
  &__text-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__index {
    // 화수 + 날짜 뒤에 줄바꿈이 일어나도록
    display: block;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  &__date {
    display: inline-block;
  }
  &__title {
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
  &__watched-percent {
    --position: static;
    --gap: 0.5rem;
    --font-size: 1.2rem;
    height: 2.4rem;
  }
  &__purchased {
    font-size: 1.2rem;
    font-weight: 500;
    color: hsl(var(--theme-500));
  }
}

@media screen and (min-width: 1080px) {
  .episode-card {
    gap: 2rem;
    &__thumbnail {
      width: 20rem;
    }
    &__title {
      font-size: 1.7rem;
    }
    &__index {
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: block;
    }
    &__purchased {
      font-size: 1.4rem;
      color: hsl(var(--theme-500));
    }
  }
}
</style>
