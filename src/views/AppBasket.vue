<template>
  <main class="Basket">
    <template v-if="user">
      <div class="Basket__ButtonGroup inner">
        <MultiSelector
          class="Basket__Tabs"
          v-model="selectedTab"
          @update:model-value="changeSelected"
          :data="tabItems"
        ></MultiSelector>
        <button class="Basket__Button Basket__Button--Remove">
          <IconBase>
            <IconRemove></IconRemove>
          </IconBase>
        </button>
      </div>
      <TransitionGroup tag="ul" class="Basket__List">
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
        >
          <template #image>
            <RouterLink
              :to="`/anime-play/${aniTitle}/${part}/${index}`"
              class="Basket__Image"
              exact-active-class="Basket__Image--Selected"
            >
              <OptimizedMedia
                :src="
                  tabItems[selectedTab].thumbnailParser(aniTitle, thumbnail)
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
              :to="`/anime/${aniTitle}/episodes`"
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
      <div class="Basket__RequireLogin inner">
        <strong class="Basket__LoginTitle">
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

import { computed, ref } from "vue";

import { useAuth } from "@/store/auth";
import { useMaratonData } from "@/composables/maraton";

import MultiSelector from "@/components/MultiSelector.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";

import IconBase from "@/components/IconBase.vue";
import IconRemove from "@/components/icons/IconRemove.vue";

const tabItems = [
  {
    text: "최근 본",
    key: "recent-watched",
    thumbnailParser: (aniTitle, thumbnail) => `${aniTitle}/${thumbnail}`,
  },
  {
    text: "보고싶다",
    key: "wanna-see",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
  },
  {
    text: "구매한",
    key: "purchased",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
  },
  {
    text: "관심없음",
    key: "not-interested",
    thumbnailParser: (aniTitle) => `${aniTitle}/${aniTitle}.webp`,
  },
];
const selectedTab = ref(0);
function changeSelected(e) {
  selectedTab.value = tabItems.findIndex((item) => item.key === e);
}

const auth = useAuth();
const user = computed(() => auth.user);
// const basketList = computed(() => user.value[selectedTab.value]);
const { latest } = useMaratonData();
const wannaSee = computed(() => user.value.wannaSee);

const selectedList = computed(() => {
  switch (selectedTab.value) {
    case 0:
      return latest();
    case 1:
      return wannaSee.value;
    case 2:
      return user.value.purchased;
    case 3:
      return user.value.notInterested;
  }
});
</script>

<style lang="scss" scoped>
.Basket {
  padding: var(--header-height) 0;
  &__ButtonGroup {
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 10;
    top: var(--header-height);
    width: min(100%, 124rem);
    margin: 0 auto;
    border-bottom: 1px solid hsl(var(--bg-200));
    background-color: hsl(var(--bg-100));
    gap: 4rem;
    height: 7.2rem;
  }
  &__Tabs {
    display: flex;
    margin: 0 auto;
    --item-width: calc(35 * 1px * var(--vw));
    --item-height: 4.8rem;
    border-radius: 9999px;
    background-color: transparent;
  }
  &__Button {
    height: 4.8rem;
    display: flex;
    justify-content: center;
    &--Remove {
      margin-left: auto;
      width: 4.8rem;
      flex-shrink: 0;
      align-items: center;
    }
  }
  &__List {
    margin-top: 1.5rem;
    width: 100%;
    display: grid;
    grid: auto-flow / 1fr;
    gap: 1.5rem 1rem;
    padding: 0 2rem;
  }
  &__Item {
    min-height: 25.5rem;
    width: calc(var(--thumbnail-units) * 1px * var(--vw));
    flex-direction: column;
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

  &__RequireLogin {
    display: flex;
    height: calc(var(--vh) * 100px - 8rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  &__LoginTitle {
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
.basket-move-enter-from,
.basket-move-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (min-width: 769px) {
  .Basket {
    &__Tabs {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      --item-width: 12rem;
    }
    &__List {
      grid: auto-flow / repeat(3, 1fr);
    }
  }
}

@media screen and (min-width: 1240px) {
  .Basket {
    &__ButtonGroup {
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
      grid: auto-flow / repeat(4, 1fr);
      --thumbnail-bottom: 0.7rem;
    }
  }
}
</style>
