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
    <CurationGroup class="AppHome__Item" :list="selectedDailyAnime">
      <template #title>요일별 신작</template>
      <template #list-changer>
        <MultiSelector
          class="AppHome__DaySelector"
          v-model="selectedDay"
          :data="DAYS"
        />
      </template>
      <template #snack-bar="{ aniTitle }">
        <button
          class="AppHome__SnackBarButton AppHome__SnackBarButton--WannaSee"
          @click="onClickWannaSee(aniTitle)"
          type="button"
        >
          <WannaSeeMotion :ani-title />
        </button>
      </template>
    </CurationGroup>
    <CurationGroup
      :list="latest(6)"
      class="AppHome__Item"
      v-if="maraton.length"
    >
      <template #title>최근 본 작품</template>
      <template #snack-bar="{ aniTitle, part, index, progress }">
        <RouterLink
          :to="`/anime-play/${aniTitle}/${part}/${index}`"
          class="AppHome__SnackBarButton"
        >
          <WatchContinue :progress />
        </RouterLink>
        <button
          class="AppHome__SnackBarButton AppHome__SnackBarButton--WannaSee"
          @click="onClickWannaSee(aniTitle)"
          type="button"
        >
          <WannaSeeMotion :ani-title />
        </button>
      </template>
    </CurationGroup>
    <div v-if="!listLoading" class="AppHome__Curation">
      <CurationGroup
        class="AppHome__Item"
        v-for="{ subject, list } in curatedList"
        :key="subject"
        :list
      >
        <template #title>{{ subject }}</template>
        <template #snack-bar="{ aniTitle }">
          <button
            class="AppHome__SnackBarButton AppHome__SnackBarButton--WannaSee"
            @click="onClickWannaSee(aniTitle)"
            type="button"
          >
            <WannaSeeMotion :ani-title />
          </button>
        </template>
      </CurationGroup>
    </div>
    <button
      class="AppHome__NewCuration"
      :class="listLoading && 'AppHome__NewCuration--Loading'"
      type="button"
      @click="getCuratedList"
      :disabled="listLoading"
    >
      <Transition name="curation-button-move" mode="out-in">
        <span :key="curationButtonString" class="AppHome__NewCurationText">
          {{ curationButtonString }}
        </span>
      </Transition>
    </button>
    <Transition name="loaded-animation">
      <div class="AppHome__LoadedAnimation" v-if="loadedAnimation"></div>
    </Transition>
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
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "@/store/auth";
import { db } from "@/utility/firebase";

import { DAYS } from "@/enums/Days";
import { useMaratonData } from "@/api/maraton";
import { useWannaSee } from "@/api/wannaSee";
import { Read } from "@/api/curation";
import { useCarouselList } from "@/composables/carousel";
import { usePWA, useRandomPWAPromotionCopy } from "@/composables/pwa";

import InputBoolean from "@/components/InputBoolean.vue";
import MultiSelector from "@/components/MultiSelector.vue";

import VueflixBtn from "@/components/VueflixBtn.vue";
import NativeDialog from "@/components/NativeDialog.vue";

import TasogareSlide from "@/components/TasogareSlide.vue";
import SlideContent from "@/components/SlideContent.vue";

import IconBase from "@/components/IconBase.vue";
import IconIOSInstall from "@/components/icons/IconIOSInstall.vue";
import CurationGroup from "@/components/CurationGroup.vue";
import WatchContinue from "@/components/WatchContinue.vue";
import WannaSeeMotion from "@/components/WannaSeeMotion.vue";

const now = new Date();
const selectedDay = ref(DAYS[now.getDay()].key);
const selectedDailyAnime = ref([]);
async function getSelectedDayList() {
  const docReference = doc(db, "daily", selectedDay.value);
  const docSnap = await getDoc(docReference);
  selectedDailyAnime.value = docSnap.data().data;
}

watch(
  selectedDay,
  async () => {
    await getSelectedDayList();
  },
  {
    immediate: true,
  }
);
onMounted(() => {
  pwaCopy.value = useRandomPWAPromotionCopy();
});

const curatedList = ref([]);
const listLoading = ref(false);
const curationButtonString = ref("새로운 추천");
const LOADED_ANIMATION_DURATION = 1200;
async function getCuratedList() {
  listLoading.value = true;
  curationButtonString.value = "내 맘에 쏙 드는 리스트 가져오는 중";
  curatedList.value = await Read(3, curatedList.value);
  curationButtonString.value = "리스트를 가져왔어요!";
  listLoading.value = false;
  setTimeout(() => {
    curationButtonString.value = "새로운 추천";
  }, LOADED_ANIMATION_DURATION);
}
onMounted(getCuratedList);

const pwaCopy = ref("");
const $PWAModal = ref(null);
const { postpone, install, hideModal, isDeviceIOS } = usePWA($PWAModal);

const { latest, maraton } = useMaratonData();

const { idArray: carouselList } = useCarouselList();

const auth = useAuth();
const user = computed(() => auth.user);
const router = useRouter();
function onClickWannaSee(aniTitle) {
  if (!user.value) {
    router.push("/auth");
    return;
  }
  const { toggleWannaSee } = useWannaSee(aniTitle);
  toggleWannaSee();
}
</script>

<style lang="scss" scoped>
.AppHome {
  display: flex;
  flex-direction: column;
  padding: 0 0 calc(var(--bottom-tab-height) + var(--bottom-tab-safe-margin));
  background-color: hsl(var(--bg-100));
  gap: 3rem;
  &__Title {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
  &__DaySelector {
    width: calc(100% - var(--inner-padding) * 2);
    border-radius: 9999px;
    margin: 0 auto 1.6rem;
    --item-width: 4rem;
    --item-height: 4rem;
    font-size: 1.6rem;
    color: hsl(var(--bg-600));
  }
  &__Item {
    &:has(.AppHome__DaySelector) {
      min-height: 31rem;
    }
  }
  &__NewCuration {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    color: hsl(var(--bg-100));
    background-color: hsl(var(--theme-500));
    border-radius: calc(var(--global-radius) + 2rem);
    overflow: hidden;
    &Text {
      color: inherit;
    }
    &--Loading {
      background-color: transparent;
      background-image: linear-gradient(
        90deg,
        hsl(var(--theme-400) / 0.5),
        hsl(var(--theme-500) / 0.5),
        hsl(var(--theme-400) / 0.5)
      );
      backdrop-filter: blur(3px);
      background-size: 200% 100%;
      animation: 900ms infinite button-loading linear;
    }
  }
  &__Carousel {
    margin-top: 1.6rem;
  }
  &__Curation {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__SnackBarButton {
    width: 4.8rem;
    height: 4.8rem;
    background-color: #fff;
    border-radius: 9999px;
    --wanna-see-icon-color: var(--curation-icon);
    &--WannaSee {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.curation-list-move,
.curation-list-enter-active,
.curation-list-leave-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.curation-list-enter-from,
.curation-list-leave-to {
  opacity: 0;
}

@keyframes button-loading {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}
.curation-button-move-enter-active,
.curation-button-move-leave-active {
  transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);
}
.curation-button-move-enter-from {
  translate: 0 -200%;
  opacity: 0;
}
.curation-button-move-leave-to {
  translate: 0 200%;
  opacity: 0;
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
    border-radius: 9999px;
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
  }
}
@media screen and (min-width: 1080px) {
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
    &__Slide {
      margin-top: var(--header-height);
    }
    &__Item {
      &:has(.AppHome__DaySelector) {
        min-height: 40rem;
      }
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
