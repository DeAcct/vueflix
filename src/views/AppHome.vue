<template>
  <div class="AppHome">
    <main>
      <BannerSlide />
      <div class="AppHome__Curator">
        <div class="AppHome__Item" v-if="auth?.recentWatched.length">
          <h2 class="AppHome__Title inner">최근 본 애니</h2>
          <VueflixCarousel
            :length="auth?.recentWatched.length"
            class="AppHome__Carousel"
            type="arrow"
          >
            <ThumbnailSet
              v-for="{
                aniTitle,
                part,
                index,
                time,
                thumbnail,
                title,
              } in auth?.recentWatched"
              type="episode"
              :link="`/player/${aniTitle}/${part}/${index}`"
              :sub-link="`/anime/${aniTitle}/episodes`"
              :ani-title="aniTitle"
              :data="{
                part,
                index,
                thumbnail,
                title,
              }"
              :watch-percent="`${(time.current / time.max) * 100}%`"
              :key="aniTitle"
              :replace="{
                main: false,
                sub: false,
              }"
            />
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
              type="series"
              :link="`/anime/${anime}/episodes`"
              :ani-title="anime"
              :key="anime"
              :replace="{
                main: false,
                sub: false,
              }"
            />
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
              type="series"
              :link="`/anime/${anime}/episodes`"
              :ani-title="anime"
              :key="anime"
              :replace="{
                main: false,
                sub: false,
              }"
            />
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
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import Cookies from "js-cookie";
import { useStore } from "vuex";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

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
    e.preventDefault();
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
  const data = qSnapshot.docs
    .map((doc) => doc.data())
    .map((lists) => ({
      ...lists,
      list: lists.list.sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      }),
    }));
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

const store = useStore();
const auth = computed(() => store.state.auth.user);
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
  }
  &__DaySelector {
    width: calc(100% - var(--inner-padding) * 2);
    border-radius: 9999px;
    margin: 0 auto;
  }
  &__Carousel {
    margin-top: 1.6rem;
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
  }
}
</style>
