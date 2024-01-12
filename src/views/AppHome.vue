<template>
  <div class="AppHome">
    <main>
      <BannerSlide />
      <div class="AppHome__Curator">
        <div class="AppHome__Item" v-if="store.user?.recentWatched.length">
          <h2 class="AppHome__Title inner">최근 본 애니</h2>
          <VueflixCarousel
            :length="store.user?.recentWatched.length"
            class="AppHome__Carousel"
            type="arrow"
          >
            <ThumbnailSet
              v-for="{ aniTitle, part, index, time, thumbnail } in store.user
                .recentWatched"
              :is-loading="false"
              :key="aniTitle"
              direction="row"
              class="AppHome__CurationItem"
            >
              <template #image>
                <RouterLink
                  :to="`/anime-play/${aniTitle}/${part}/${index}`"
                  class="AppHome__Image"
                  exact-active-class="AppHome__Image--Selected"
                >
                  <OptimizedMedia
                    :src="`${aniTitle}/${thumbnail}`"
                    :alt="`${aniTitle} ${part} ${index} 이어보기`"
                  />
                  <ProgressCircle
                    class="AppHome__WatchPercent"
                    :percent="`${(time.current / time.max) * 100}%`"
                  />
                </RouterLink>
              </template>
              <template #text>
                <RouterLink
                  class="AppHome__TextLink"
                  :to="`/anime/${aniTitle}/episodes`"
                >
                  <span class="AppHome__AniTitle">
                    {{ aniTitle }}
                  </span>
                  <strong class="AppHome__PartIndex">
                    {{ part }} {{ index }}
                  </strong>
                  <span class="AppHome__Episode">{{ title }}</span>
                </RouterLink>
              </template>
            </ThumbnailSet>
          </VueflixCarousel>
        </div>
        <div class="AppHome__Item">
          <h2 class="AppHome__Title inner">요일별 신작</h2>
          <DaySelector
            class="AppHome__DaySelector"
            :selected="selectedDay"
            @day-change="onDayChange"
          ></DaySelector>
          <VueflixCarousel
            :length="selectedDailyAnime.length"
            class="AppHome__Carousel"
            type="arrow"
          >
            <ThumbnailSet
              v-for="anime in selectedDailyAnime"
              :key="`${selectedDay}-${anime}`"
              class="AppHome__CurationItem"
            >
              <template #image>
                <RouterLink
                  :to="`/anime/${anime}/episodes`"
                  class="AppHome__Image"
                  exact-active-class="AppHome__Image--Selected"
                >
                  <OptimizedMedia
                    :src="`${anime}/${anime.replaceAll(/:/g, '_')}.webp`"
                    :alt="`${anime} 포스터`"
                  />
                </RouterLink>
              </template>
              <template #text>
                <RouterLink
                  :to="`/anime/${anime}/episodes`"
                  class="AppHome__TextLink"
                >
                  <span class="AppHome__AniTitle">
                    {{ anime }}
                  </span>
                </RouterLink>
              </template>
            </ThumbnailSet>
          </VueflixCarousel>
        </div>
        <div class="AppHome__Item" v-for="recommended in recommendedAnime">
          <h2 class="AppHome__Title inner">
            {{ recommended.subject }}
          </h2>
          <VueflixCarousel
            :length="recommended.list.length"
            class="AppHome__Carousel"
            type="arrow"
          >
            <ThumbnailSet
              v-for="anime in recommended.list"
              class="AppHome__CurationItem"
              :key="`${recommended.subject}-${anime}`"
            >
              <template #image>
                <RouterLink
                  :to="`/anime/${anime}/episodes`"
                  class="AppHome__Image"
                  exact-active-class="AppHome__Image--Selected"
                >
                  <OptimizedMedia
                    :src="`${anime}/${anime.replaceAll(/:/g, '_')}.webp`"
                    :alt="`${anime} 포스터`"
                  />
                </RouterLink>
              </template>
              <template #text>
                <RouterLink
                  :to="`/anime/${anime}/episodes`"
                  class="AppHome__TextLink"
                >
                  <span class="AppHome__AniTitle">
                    {{ anime }}
                  </span>
                </RouterLink>
              </template>
            </ThumbnailSet>
          </VueflixCarousel>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { DAYS } from "@/enums/Days";

import BannerSlide from "@/components/BannerSlide.vue";
import DaySelector from "@/components/DaySelector.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";

import Cookies from "js-cookie";

// import { useStore } from "vuex";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useAuth } from "../store/auth";

const now = new Date();
const selectedDay = ref(DAYS.map(({ key }) => key)[now.getDay()]);
const selectedDailyAnime = ref([]);
async function getSelectedDayList() {
  const docReference = doc(db, "daily", selectedDay.value);
  const docSnap = await getDoc(docReference);
  selectedDailyAnime.value = docSnap.data().data;
}
onMounted(async () => {
  await getSelectedDayList();
});
function onDayChange(e) {
  selectedDay.value = e;
}
watch(selectedDay, async () => {
  await getSelectedDayList();
});

const isModalOpened = ref(false);
onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    if (Cookies.get("add-to-home-screen") === undefined) {
      isModalOpened.value = e;
    }
  });
  window.addEventListener("appinstalled", () => {
    isModalOpened.value = null;
  });
});
async function PWAdismiss() {
  Cookies.set("add-to-home-screen", null, { expires: 15 });
  isModalOpened.value = null;
}
async function PWAinstall() {
  isModalOpened.prompt();
}

const recommendedAnime = ref({});
onMounted(async () => {
  const qSnapshot = await getDocs(collection(db, "recommend"));
  const data = qSnapshot.docs.map((doc) => doc.data());
  recommendedAnime.value = data;
});

onUnmounted(async () => {
  window.removeEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    if (Cookies.get("remove-to-home-screen") === undefined) {
      isModalOpened.value = e;
    }
  });
  window.removeEventListener("appinstalled", () => {
    isModalOpened.value = null;
  });
});

const store = useAuth();
</script>

<style lang="scss" scoped>
.AppHome {
  &__Curator {
    display: flex;
    flex-direction: column;
    padding: 3.2rem 0
      calc(var(--bottom-tab-height) + var(--bottom-tab-safe-margin) + 3.2rem);
    background-color: hsl(var(--bg-100));
    gap: 3rem;
  }
  &__Title {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
  &__DaySelector {
    width: calc(100% - var(--inner-padding) * 2);
    border-radius: 9999px;
    margin: 0 auto;
  }
  &__Carousel {
    margin-top: 1.6rem;
  }
  &__CurationItem {
    flex-direction: column;
    width: var(--thumbnail-width, 55vw);
  }
  &__Image {
    position: relative;
    flex-shrink: 0;
    --radius: var(--global-radius);
    --aspect-ratio: calc(9 / 16 * 100%);
  }
  &__WatchPercent {
    position: absolute;
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    font-size: 1.3rem;
    left: 0;
    padding: 0.75rem;
    bottom: 0;
    color: #fff;
    background: linear-gradient(transparent, hsl(0 0% 0% / 0.5));
    border-radius: var(--global-radius);
  }
  &__TextLink {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  &__AniTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    min-height: calc(1.4rem * 1.5 * 2);
    --episode-title-width: 20ch;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 600;
  }
}
@media screen and (min-width: 768px) {
  .AppHome {
    &__Curator {
      padding-top: 3.6rem;
    }
    &__Title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    &__Item {
      &:not(:last-child) {
        margin-bottom: 4.5rem;
      }
    }
    &__CurationItem {
      width: var(--thumbnail-width, 32vw);
    }
  }
}
@media screen and (min-width: 1080px) {
  .AppHome {
    &__Title {
      font-size: 3rem;
    }
    &__DaySelector {
      width: 40rem;
      margin-left: var(--inner-padding);
    }
    &__CurationItem {
      width: var(--thumbnail-width, 28vw);
    }
  }
}
@media screen and (min-width: 1920px) {
  .AppHome {
    &__CurationItem {
      width: var(--thumbnail-width, 15vw);
    }
  }
}
</style>
