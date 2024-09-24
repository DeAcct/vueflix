<template>
  <main class="AppHome">
    <TasogareSlide class="AppHome__Slide" autoplay>
      <template #items>
        <SlideContent
          v-for="animeId in carouselList"
          :anime-id
          :key="animeId"
        />
      </template>
    </TasogareSlide>
    <div class="AppHome__Curator">
      <div class="AppHome__Item" v-if="latest(6).length">
        <h2 class="AppHome__Title inner">최근 본 애니</h2>
        <VueflixCarousel
          :length="latest(6).length"
          class="AppHome__Carousel"
          type="arrow"
        >
          <ThumbnailSet
            v-for="{ aniTitle, part, index, progress, thumbnail } in latest(6)"
            :key="aniTitle"
            class="AppHome__CurationItem"
          >
            <template #image>
              <RouterLink
                :to="`/anime-play/${aniTitle}/${part}/${index}`"
                class="AppHome__Image"
                exact-active-class="AppHome__Image--Selected"
              >
                <OptimizedMedia
                  :src="`/anime/${aniTitle}/${thumbnail}`"
                  :alt="`${aniTitle} ${part} ${index} 이어보기`"
                  skelleton
                />
                <ProgressCircle
                  class="AppHome__WatchPercent"
                  :percent="`${(progress.current / progress.max) * 100}%`"
                />
              </RouterLink>
            </template>
            <template #text>
              <RouterLink
                class="AppHome__TextLink"
                :to="{
                  query: {
                    modal: aniTitle,
                    route: 'episodes',
                  },
                }"
              >
                <span class="AppHome__AniTitle">
                  {{ aniTitle }}
                </span>
                <p class="AppHome__Episode">
                  <strong class="AppHome__PartIndex">
                    {{ part }} {{ index }}
                  </strong>
                </p>
              </RouterLink>
            </template>
          </ThumbnailSet>
        </VueflixCarousel>
      </div>
      <div class="AppHome__Item">
        <h2 class="AppHome__Title inner">요일별 신작</h2>
        <MultiSelector
          class="AppHome__DaySelector"
          v-model="selectedDay"
          @update:model-value="onDayChange"
          :data="DAYS"
        ></MultiSelector>
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
                :to="{
                  query: { modal: anime, route: 'episodes' },
                }"
                class="AppHome__Image"
                exact-active-class="AppHome__Image--Selected"
              >
                <OptimizedMedia
                  :src="`/anime/${escaper(anime)}/${escaper(anime)}.webp`"
                  :alt="`${anime} 포스터`"
                  skelleton
                />
              </RouterLink>
            </template>
            <template #text>
              <RouterLink
                :to="{
                  query: { modal: anime, route: 'episodes' },
                }"
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
      <div
        class="AppHome__Item"
        v-for="recommended in recommendedAnime"
        :key="recommended.subject"
      >
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
                :to="{
                  query: { modal: anime, route: 'episodes' },
                }"
                class="AppHome__Image"
                exact-active-class="AppHome__Image--Selected"
              >
                <OptimizedMedia
                  :src="`/anime/${escaper(anime)}/${escaper(anime)}.webp`"
                  :alt="`${anime} 포스터`"
                  skelleton
                />
              </RouterLink>
            </template>
            <template #text>
              <RouterLink
                :to="{
                  query: { modal: anime, route: 'episodes' },
                }"
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
    <NativeDialog ref="$PWAModal" class="PWAModal" shade>
      <template #title>
        <strong class="PWAModal__Title">
          {{ pwaCopy }}
        </strong>
      </template>
      <template #content>
        <p class="PWAModal__Introduce">
          나에게 딱 맞게 설계된 앱을 사용할 수 있어요!
          <i class="PWAModal__HowTo">
            <template v-if="isDeviceIOS">
              애플 기기를 사용하시네요! 하단의
              <IconBase class="PWAModal__IOSIcon"> <IconIOSInstall /> </IconBase
              >을 누르면 앱을 설치할 수 있어요!
            </template>
            <template v-else>앱을 설치해보실래요?</template>
          </i>
        </p>
      </template>
      <template #control>
        <div class="PWAModal__Control">
          <label class="PWAModal__Postpone">
            <InputBoolean
              v-model="hideModal"
              type="checkbox"
              class="PWAModal__Checkbox"
            />
            30일 동안 보지 않음
          </label>
          <VueflixBtn
            type="submit"
            component="button"
            @click="install"
            class="PWAModal__Button PWAModal__Button--Install"
            v-if="!isDeviceIOS"
          >
            <template #text>앱 설치</template>
          </VueflixBtn>
          <VueflixBtn
            type="submit"
            component="button"
            @click="postpone"
            class="PWAModal__Button PWAModal__Button--Dismiss"
          >
            <template #text>닫기</template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import { DAYS } from "@/enums/Days";
import { useMaratonData } from "@/api/maraton";
import { usePWA, useRandomPWAPromotionCopy } from "@/composables/pwa";
import { useCarouselList } from "@/composables/carousel";

import InputBoolean from "@/components/InputBoolean.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import NativeDialog from "@/components/NativeDialog.vue";

import TasogareSlide from "@/components/TasogareSlide.vue";
import SlideContent from "@/components/SlideContent.vue";

import IconBase from "@/components/IconBase.vue";
import IconIOSInstall from "@/components/icons/IconIOSInstall.vue";

const now = new Date();
const selectedDay = ref(now.getDay());
const selectedDailyAnime = ref([]);
async function getSelectedDayList() {
  const docReference = doc(db, "daily", DAYS[selectedDay.value].key);
  const docSnap = await getDoc(docReference);
  selectedDailyAnime.value = docSnap.data().data;
}
onMounted(async () => {
  await getSelectedDayList();
});
function onDayChange(e) {
  selectedDay.value = DAYS.map(({ key }) => key).findIndex(
    (item) => item === e
  );
}
watch(selectedDay, async () => {
  await getSelectedDayList();
});

const recommendedAnime = ref({});
onMounted(async () => {
  pwaCopy.value = useRandomPWAPromotionCopy();
  const qSnapshot = await getDocs(collection(db, "recommend"));
  const data = qSnapshot.docs.map((doc) => doc.data());
  recommendedAnime.value = data;
});

const pwaCopy = ref("");
const $PWAModal = ref(null);
const { postpone, install, hideModal, isDeviceIOS } = usePWA($PWAModal);

function escaper(str) {
  return str.replaceAll(/:|\./g, "_").replaceAll(/\?/g, "");
}

const { latest } = useMaratonData();

const { idArray: carouselList } = useCarouselList();
</script>

<style lang="scss" scoped>
.AppHome {
  &__Curator {
    display: flex;
    flex-direction: column;
    padding: 3.2rem 0
      calc(var(--bottom-tab-height) + var(--bottom-tab-safe-margin));
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
    --item-width: 4rem;
    --item-height: 4rem;
  }
  &__Item {
    &:has(.AppHome__DaySelector) {
      min-height: 31rem;
    }
  }
  &__Carousel {
    margin-top: 1.6rem;
  }
  &__CurationItem {
    flex-direction: column;
    width: var(--thumbnail-width, 55vw);
    &:has(:focus-visible),
    &:has(:hover) {
      --curation-accent: hsl(var(--theme-500));
      --curation-accent-translate: 0.5rem 0.5rem;
    }
  }
  &__Image {
    position: relative;
    flex-shrink: 0;
    --radius: var(--global-radius);
    --aspect-ratio: calc(9 / 16 * 100%);
    &::after {
      transition: 150ms ease-in-out;
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: var(--global-radius);
      background-color: var(--curation-accent);
      translate: var(--curation-accent-translate);
    }
  }
  &__WatchPercent {
    position: absolute;
    z-index: var(--z-index-s2);
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
    &:focus-visible {
      color: var(--curation-accent);
    }
  }
  &__AniTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    --episode-title-width: 20ch;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 600;
    color: inherit;
  }
  &__PartIndex {
    font-size: 1.4rem;
    color: inherit;
  }
}

.PWAModal {
  --dialog-max-width: 100%;
  --dialog-translate: 0;
  --dialog-inset: auto auto 0 auto;
  --dialog-starting-translate: 0 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  --dialog-z-index: var(--z-index-overay-2);
  &__Title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    text-wrap: pretty;
    line-height: 1.3;
  }
  &__Introduce {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-wrap: pretty;
  }
  &__HowTo {
    display: inline-block;
    font-weight: 700;
    line-height: 1.5;
    color: hsl(var(--theme-500));
  }
  &__IOSIcon {
    vertical-align: text-bottom;
    width: 2rem;
    height: 2rem;
  }
  &__Control {
    display: flex;
  }
  &__Postpone {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: auto;
  }
  &__Button {
    border-radius: var(--global-radius);
    font-size: 1.4rem;
    box-shadow: none;
    &--Install {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
  }
}
@media (display-mode: standalone) {
  .PWAModal {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .AppHome {
    &__Curator {
      padding-top: 3.6rem;
    }
    &__AniTitle {
      font-size: 1.6rem;
    }
    &__PartIndex {
      font-size: 1.6rem;
    }
    &__Title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    &__Item {
      &:has(.AppHome__DaySelector) {
        min-height: 33.5rem;
      }
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
@media screen and (min-width: 1024px) {
  .AppHome {
    &__Item {
      &:has(.AppHome__DaySelector) {
        min-height: 37rem;
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
    &__CurationItem {
      width: var(--thumbnail-width, 28vw);
    }
    &__Slide {
      margin-top: var(--header-height);
    }
  }
  .PWAModal {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
    --dialog-padding: 3rem;
    --dialog-max-width: 50rem;
  }
}
@media screen and (min-width: 1920px) {
  .AppHome {
    &__AniTitle {
      font-size: 2rem;
    }
    &__PartIndex {
      font-size: 2rem;
    }
    &__CurationItem {
      width: var(--thumbnail-width, 15vw);
    }
    &__Item {
      &:has(.AppHome__DaySelector) {
        min-height: 42rem;
      }
    }
  }
}

// @media (display-mode: window-controls-overlay) and (max-width: 1080px) {
//   .AppHome {
//     &__Slide {
//       margin-top: calc(var(--header-height) + env(safe-area-inset-top));
//     }
//   }
// }
@media (display-mode: window-controls-overlay) and (max-width: 1080px) {
  .AppHome {
    &__Slide {
      margin-top: calc(var(--header-height) + env(safe-area-inset-top));
    }
  }
}
</style>
