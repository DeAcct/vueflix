<template>
  <div class="app-home">
    <main>
      <banner-slide />
      <div class="app-home__curated">
        <div class="app-home__curated-item" v-if="auth">
          <h2 class="app-home__curated-title inner">최근 본 애니</h2>
          <vueflix-carousel
            :length="auth?.recentWatched.length"
            class="app-home__carousel"
          >
            <thumbnail-set
              type="episode"
              v-for="anime in auth?.recentWatched"
              :key="anime"
              :ani-title="anime.aniTitle"
              :part="anime.part"
              :index="anime.index"
              :watched-percent="anime.watchedPercent"
              :short-title="anime.shortTitle"
            />
          </vueflix-carousel>
        </div>
        <div class="app-home__curated-item">
          <h2 class="app-home__curated-title inner">요일별 신작</h2>
          <day-selector
            class="app-home__day-select inner"
            :selected="selectedDay"
            @day-change="onDayChange"
          ></day-selector>
          <vueflix-carousel
            :length="selectedDailyAnime.length"
            class="app-home__carousel"
          >
            <thumbnail-set
              type="series"
              v-for="anime in selectedDailyAnime"
              :key="anime"
              :ani-title="anime"
            />
          </vueflix-carousel>
        </div>
        <div
          class="app-home__curated-item"
          v-for="recommended in recommendedAnime"
        >
          <h2 class="app-home__curated-title inner">
            {{ recommended.subject }}
          </h2>
          <vueflix-carousel
            :length="recommended.list.length"
            class="app-home__carousel"
          >
            <thumbnail-set
              type="series"
              v-for="anime in recommended.list"
              :key="anime"
              :ani-title="anime"
            />
          </vueflix-carousel>
        </div>
      </div>
    </main>
    <vueflix-modal
      class="app-home__modal"
      type="yes-no"
      :yes-func="PWAinstall"
      :no-func="PWAdismiss"
      :class="{ 'app-home__modal--show': isModalOpened }"
      v-if="isModalOpened"
    >
      <template v-slot:title>뷰플릭스 앱 써보실래요?</template>
      <template v-slot:description>
        홈 화면에서 더 빠르게 만나볼 수 있어요
      </template>
      <template v-slot:no-string>나중에</template>
      <template v-slot:yes-string>설치</template>
    </vueflix-modal>
  </div>
</template>

<script setup>
import { DAYS } from "@/enums/Days";

import BannerSlide from "@/components/BannerSlide.vue";
import DaySelector from "@/components/DaySelector.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixModal from "@/components/VueflixModal.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import Cookies from "js-cookie";
import { useStore } from "vuex";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const selectedDay = ref();
const selectedDailyAnime = ref([]);
async function getSelectedDayList() {
  const db = getFirestore();
  const docReference = doc(db, "daily", selectedDay.value);
  const docSnap = await getDoc(docReference);
  selectedDailyAnime.value = docSnap.data().data;
}
onMounted(async () => {
  const now = new Date();
  selectedDay.value = DAYS.map(({ key }) => key)[now.getDay()];
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
  const db = getFirestore();
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
.app-home {
  &__curated {
    display: flex;
    flex-direction: column;
    padding: 3.2rem 0 calc(var(--bottom-tab-height) + 3.2rem);
    background-color: hsl(var(--bg-100));
    gap: 3rem;
  }
  &__curated-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &__day-select {
    margin-bottom: 1.5rem;
  }
  &__modal {
    transition: 150ms ease-out;
    transform: translateY(100vh);
    bottom: 6rem;
    &--show {
      transform: translateY(0);
    }
  }
}
@media screen and (min-width: 768px) {
  .app-home {
    &__curated {
      padding-top: 3.6rem;
    }
    &__curated-title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    &__curated-item {
      &:not(:last-child) {
        margin-bottom: 4.5rem;
      }
    }
    &__modal {
      top: 0;
      bottom: auto;
      transform: none;
      transition: 150ms ease-out;
    }
  }
}
@media screen and (min-width: 1024px) {
  .app-home {
    &__curated-title {
      font-size: 3rem;
    }
  }
}
</style>
