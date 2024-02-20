<template>
  <main class="Basket">
    <template v-if="user">
      <div class="Basket__ActionGroup">
        <div class="Basket__Actions inner">
          <MultiSelector
            class="Basket__Tabs"
            v-model="selectedTab"
            @update:model-value="changeSelected"
            :data="basket"
          />
          <button
            class="Basket__Button Basket__Button--Toggle"
            @click="toggleEditmode"
            :disabled="selectedList.length === 0"
          >
            <IconBase>
              <IconRemove></IconRemove>
            </IconBase>
          </button>
        </div>
        <EditBar
          :editmode
          :toggle="toggleEditmode"
          :remove="remove"
          :all="all"
          class="inner Basket__EditBar"
        />
      </div>
      <template v-if="selectedList.length > 0">
        <TransitionGroup tag="ul" class="Basket__List" name="basket-move">
          <ThumbnailSet
            v-for="{
              aniTitle,
              part,
              index,
              progress,
              thumbnail,
              title,
            } in selectedList"
            :key="`${aniTitle}-${selectedTab}`"
            class="Basket__Item"
            :class="{
              'Basket__Item--Selected': editmode.selected.has(aniTitle),
            }"
            @click="editmode.on && itemToggle(aniTitle)"
          >
            <template #image>
              <RouterLink
                :to="link({ aniTitle, part, index }).picture"
                class="Basket__Image"
                :replace="editmode.on"
              >
                <OptimizedMedia
                  :src="
                    basket[selectedTab].thumbnailParser(aniTitle, thumbnail)
                  "
                  :alt="`${aniTitle} ${part} ${index} 이어보기`"
                />
                <ProgressCircle
                  v-if="selectedTab === 0"
                  class="Basket__WatchPercent"
                  :percent="`${(progress.current / progress.max) * 100}%`"
                />
              </RouterLink>
            </template>
            <template #text>
              <RouterLink
                class="Basket__TextLink"
                :to="link({ aniTitle, part, index }).text"
                :replace="editmode.on"
              >
                <span class="Basket__AniTitle">
                  {{ aniTitle }}
                </span>
                <p class="Basket__Episode">
                  <strong class="Basket__PartIndex">
                    {{ part }} {{ index }}
                  </strong>
                  {{ title }}
                </p>
              </RouterLink>
            </template>
          </ThumbnailSet>
        </TransitionGroup>
      </template>
      <template v-else>
        <div class="Basket__Alert inner">
          <img
            :src="aqua"
            class="Basket__Easter"
            alt="서럽게 우는 코노스바 아쿠아"
            fetchpriority="low"
          />
          <p class="Basket__Info">
            <strong class="Basket__Info">아직 아무것도 없네요</strong>
            원하는 애니메이션을 찾아보세요!
          </p>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="Basket__Alert inner">
        <strong class="Basket__Info">
          여기서 지금까지의 덕질을 저장해 보세요!
        </strong>
        <RouterLink to="/auth" class="Basket__LoginButton">
          로그인/회원가입
        </RouterLink>
      </div>
    </template>
  </main>
</template>

<script setup>
// v-for를 이용할 때는 key 속성을 제대로 설정하자.
// unique한 키가 아닐 경우, 같은 아이템으로 인식하여 업데이트가 이루어지지 않는다.
// 탭이 변경되었는데, 같은 인덱스에 같은 제목의 애니가 있을 경우 썸네일이 바뀌지 않는 오류가 있었다.

import { computed, ref, onMounted } from "vue";

import { useAuth } from "@/store/auth";
import { useMaratonData } from "@/composables/maraton";

import aqua from "@/assets/aqua.svg";

import EditBar from "@/components/EditBar.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";

import IconBase from "@/components/IconBase.vue";
import IconRemove from "@/components/icons/IconRemove.vue";

const { latest, removeMaraton } = useMaratonData();
// 삭제 관련 로직 미구현
const basket = [
  {
    text: "최근 본",
    key: "recent-watched",
    thumbnailParser: (aniTitle, thumbnail) => `${aniTitle}/${thumbnail}`,
    remove: removeMaraton,
  },
  {
    text: "보고싶다",
    key: "wanna-see",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
    remove: () => {},
  },
  {
    text: "구매한",
    key: "purchased",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
    remove: () => {},
  },
  {
    text: "관심없음",
    key: "not-interested",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
    remove: () => {},
  },
];
const selectedTab = ref(0);
function changeSelected(e) {
  selectedTab.value = basket.findIndex((item) => item.key === e);
  editmode.value.on = false;
  editmode.value.selected.clear();
}

function link({ aniTitle, part, index }) {
  if (editmode.value.on) {
    return {
      picture: "#none",
      text: "#none",
    };
  }
  if (selectedTab.value === 0) {
    return {
      picture: `/anime-play/${aniTitle}/${part}/${index}`,
      text: `/anime/${aniTitle}/episodes`,
    };
  }
  return {
    picture: `/anime/${aniTitle}/episodes`,
    text: `/anime/${aniTitle}/episodes`,
  };
}

const auth = useAuth();
const user = computed(() => auth.user);

const selectedList = computed(() => {
  switch (selectedTab.value) {
    case 0:
      return latest(6);
    case 1:
      return user.value.wannaSee;
    case 2:
      return user.value.purchased;
    case 3:
      return user.value.notInterested;
  }
});

const editmode = ref({
  on: false,
  selected: new Set(),
});
function toggleEditmode() {
  editmode.value.on = !editmode.value.on;
  if (!editmode.value.on) {
    editmode.value.selected.clear();
  }
}
async function remove() {
  await basket[selectedTab.value].remove(editmode.value.selected);
  toggleEditmode();
}
async function all() {
  await basket[selectedTab.value].remove("all");
  toggleEditmode();
}
function itemToggle(aniTitle) {
  if (editmode.value.selected.has(aniTitle)) {
    editmode.value.selected.delete(aniTitle);
  } else {
    editmode.value.selected.add(aniTitle);
  }
}
</script>

<style lang="scss" scoped>
.Basket {
  padding: var(--header-height) 0;

  &__ActionGroup {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    z-index: 10;
    top: var(--header-height);
    width: min(100%, 124rem);
    margin: 0 auto;
    background-color: hsl(var(--bg-100));
    border-bottom: 1px solid hsl(var(--bg-200));
  }
  &__Actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__Tabs {
    width: 30rem;
    display: flex;
    --item-width: 25%;
    --item-height: 4.8rem;
    border-radius: 9999px;
    background-color: transparent;
    padding: 0.6rem 0;
  }
  &__Button {
    height: 4.8rem;
    display: flex;
    justify-content: center;
    &--Toggle {
      width: 4.8rem;
      flex-shrink: 0;
      align-items: center;
      padding: 0;
      &:disabled {
        cursor: not-allowed;
        color: hsl(var(--text-200));
      }
    }
  }
  &__EditBar {
    width: min(100%, 124rem);
  }

  &__List {
    margin-top: 1.5rem;
    width: min(100%, 124rem);
    display: grid;
    grid: auto-flow / 1fr;
    gap: 1.5rem 1rem;
    padding: 0 2rem;
  }
  &__Item {
    width: calc(var(--thumbnail-units) * 1px * var(--vw));
    flex-direction: column;
    border: 2px solid transparent;
    transition: 150ms ease-out;
    &--Selected {
      padding: 2rem;
      border-color: hsl(var(--theme-500));
      border-radius: calc(var(--global-radius) + 2rem);
      background-color: hsl(var(--theme-100));
    }
  }
  &__Image {
    position: relative;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__WatchPercent {
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    background: linear-gradient(transparent, hsl(0 0% 0% / 0.5));
    color: #fff;
  }
  &__TextLink {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    gap: 0.8rem;
  }
  &__Episode {
    line-height: 1.3;
    text-wrap: pretty;
  }

  &__Alert {
    display: flex;
    height: calc(var(--vh) * 100px - 8rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  &__Easter {
    width: 4.8rem;
    border-radius: var(--global-radius);
    margin-top: -7rem;
  }

  &__Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.7rem;
  }
  &__LoginButton {
    width: 100%;
    padding: 2rem;
    background-color: hsl(var(--bg-200));
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.3rem;
  }
}

.basket-move-enter-active,
.basket-move-leave-active {
  transition: all 150ms ease-out;
}
.basket-move-leave-active {
  display: none;
}
.basket-move-enter-from,
.basket-move-leave-to {
  translate: 2rem 0;
  opacity: 0;
  translate: 0 -1rem 0;
}

@media screen and (min-width: 769px) {
  .Basket {
    &__Actions {
      padding: 0;
    }
    &__Tabs {
      width: 50rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &__EditBar {
      border-radius: 9999px;
      padding-right: 0.8rem;
    }
    &__List {
      --grid-repeat: 3;
      grid: auto-flow / repeat(var(--grid-repeat), 1fr);
      margin: 2rem auto;
      padding: 0;
    }
    &__WatchPercent {
      font-size: 1.4rem;
    }
  }
}

@media screen and (min-width: 1240px) {
  .Basket {
    &__ActionGroup {
      border: none;
    }
    &__button {
      height: 5.6rem;
    }
    &__ActiveHolder {
      font-size: 1.7rem;
    }
    &__List {
      gap: 3rem 1.5rem;
      --grid-repeat: 4;
      --thumbnail-bottom: 0.7rem;
    }
  }
}
// @media screen and (min-width: 1440px) {
//   .Basket {
//     &__List {
//       --grid-repeat: 5;
//     }
//   }
// }
</style>
