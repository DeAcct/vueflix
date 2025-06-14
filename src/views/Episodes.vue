<template>
  <div class="AnimeEpisodes">
    <template v-if="animeInfo.parts">
      <div class="AnimeEpisodes__Actions">
        <SortButton
          :base="sortBase"
          :toggle-sort
          class="AnimeEpisodes__Sort"
          :text="['처음', '최신화']"
        />
        <button class="AnimeEpisodes__ClearWatched" @click="openAlert">
          시청기록 초기화
        </button>
      </div>
      <TransitionGroup name="episode-update">
        <AccordionGroup
          v-for="({ part, episodes }, i) in sortedParts"
          :key="part"
          class="AnimeEpisodes__Accordion"
          :open="i === 0"
        >
          <template #title>
            {{ part }}
          </template>
          <template #content>
            <ul class="AnimeEpisodes__List">
              <Thumbnailset
                v-for="{ title, index, thumbnail } in episodes"
                :key="`episode-${title}-${part}-${index}`"
                class="AnimeEpisodes__Item"
              >
                <template #image>
                  <RouterLink
                    class="AnimeEpisodes__Thumbnail"
                    :to="`/anime-play/${animeInfo.name}/${part}/${index}`"
                  >
                    <OptimizedMedia
                      :src="`/anime/${animeInfo.name}/${thumbnail}`"
                      :alt="`${animeInfo.name} ${part} ${index} 미리보기 이미지`"
                      skelleton
                    />
                    <SlimProgress
                      :progress="
                        getEpisodeProgress(animeInfo.name, part, index).percent
                      "
                      class="AnimeEpisodes__Progress"
                    />
                  </RouterLink>
                </template>
                <template #text>
                  <RouterLink
                    class="AnimeEpisodes__TextLink"
                    :to="`/anime-play/${animeInfo.name}/${part}/${index}`"
                  >
                    <strong class="AnimeEpisodes__PartIndex">
                      {{ part }} {{ index }}
                    </strong>
                    <span class="AnimeEpisodes__Title">{{ title }}</span>
                  </RouterLink>
                </template>
              </Thumbnailset>
            </ul>
          </template>
        </AccordionGroup>
      </TransitionGroup>
    </template>
    <div class="AnimeEpisodes__EmptyPlaceholder" v-else>
      <strong class="AnimeEpisodes__EmptyInfo"
        >아직 올라온 에피소드가 없어요</strong
      >
      <VueflixBtn
        type="button"
        component="button"
        class="AnimeEpisodes__Request"
      >
        <template #text>담당자 재촉하기</template>
      </VueflixBtn>
    </div>
    <NativeDialog ref="$clearMaratonAlertRoot" class="ClearMaratonAlert" shade>
      <template #title> </template>
      <template #content>
        <div class="ClearMaratonAlert__Bubble">
          <strong class="ClearMaratonAlert__Title">시청기록 삭제</strong>
          <p class="ClearMaratonAlert__Info">정말 삭제하시겠어요?</p>
        </div>
      </template>
      <template #control>
        <div class="ClearMaratonAlert__Control">
          <VueflixBtn
            type="button"
            component="button"
            class="ClearMaratonAlert__Button ClearMaratonAlert__Button--Accent"
            @click="clear"
          >
            <template #text> 삭제 </template>
          </VueflixBtn>
          <VueflixBtn
            type="button"
            component="button"
            class="ClearMaratonAlert__Button"
            @click="$clearMaratonAlertRoot.close()"
          >
            <template #text> 취소 </template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useMaratonData } from "@/api/maraton";
import { useHead } from "@/composables/head";
import { deepReverse } from "@/utility/extArray";

import AccordionGroup from "@/components/AccordionGroup.vue";
import Thumbnailset from "@/components/ThumbnailSet.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import SlimProgress from "@/components/SlimProgress.vue";
import SortButton from "@/components/SortButton.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";

const props = defineProps({
  animeInfo: Object,
  refresh: Function,
  sortBase: {
    type: String,
    default: "asc",
  },
});
const emit = defineEmits(["open-login-modal", "sort-toggle"]);

// const sortBase = ref("asc");
const sortedParts = computed(() => {
  if (!props.animeInfo) {
    return [];
  }
  if (props.sortBase === "asc") {
    return props.animeInfo.parts;
  }
  return deepReverse(props.animeInfo.parts, ["episodes"]);
});

function toggleSort() {
  // sortBase.value = sortBase.value === "asc" ? "desc" : "asc";
  emit("toggle-sort");
}

const route = useRoute();

useHead({ title: route.query.modal });

const { getEpisodeProgress, clearMaratonByTitle } = useMaratonData(
  route.query.modal
);

const $clearMaratonAlertRoot = ref(null);
function openAlert() {
  $clearMaratonAlertRoot.value.show();
}
function clear() {
  clearMaratonByTitle(route.query.modal);
  $clearMaratonAlertRoot.value.close();
}
</script>

<style lang="scss" scoped>
.AnimeEpisodes {
  padding: 2rem 0 2rem;
  flex-grow: 1;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  &__EmptyPlaceholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.6rem;
    color: hsl(var(--bg-700));
    text-align: center;
    height: 20vh;
    margin-top: -2rem;
  }
  &__EmptyInfo {
    font-weight: 500;
  }
  &__Request {
    background-color: hsl(var(--theme-500));
    color: #fff;
    border-radius: var(--global-radius);
  }

  &__Actions {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: var(--episodes-action-width, calc(100% - 4rem));
  }
  &__Sort {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: 500;
    height: 2.4rem;
  }

  &__Accordion {
    width: var(--episodes-width, calc(100% - 4rem));
    --episode-gap: 1.2rem;
    --thumbnail-width: 14rem;
    --accordion-sticky-top: var(--episodes-sticky-top, 0);
    --accordion-z-index: var(
      --episodes-z-index,
      calc(var(--z-index-overay-1) + 1)
    );
    --accordion-title-padding: 1.4rem;
  }
  &__List {
    display: flex;
    flex-direction: var(--accordion-direction, column);
    gap: var(--episode-gap, 1rem);
  }
  &__Item {
    padding: 0;
  }
  &__Thumbnail {
    width: 30rem;
    min-width: 0;
    position: relative;
    overflow: hidden;
    border-radius: var(--global-radius);
  }
  &__Progress {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  &__WatchPercent {
    font-size: 1.3rem;
    left: 0.8rem;
    bottom: 0.8rem;
    color: #fff;
  }
  &__TextLink {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex-grow: 1;
    width: 100%;
  }
  &__PartIndex {
    font-size: 1.4rem;
  }
  &__Title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.3;
  }
}

.ClearMaratonAlert {
  --dialog-max-width: min(100% - 4rem, 40rem);
  --dialog-translate: -50% 0;
  --dialog-inset: auto auto 0 50%;
  --dialog-starting-translate: -50% 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  --dialog-z-index: var(--z-index-overay-2);
  --dialog-height: auto;
  // --dialog-bg: hsl(var(--bg-200));
  --dialog-bg: transparent;
  --dialog-padding: 0 0 2rem;

  &__Bubble {
    border-radius: 2rem;
    background-color: hsl(var(--bg-200));
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }
  &__Title {
    font-size: 2rem;
    text-wrap: pretty;
    line-height: 1.3;
  }
  &__Info {
    font-size: 1.6rem;
    line-height: 1.5;
    text-wrap: pretty;
  }
  &__Control {
    display: flex;
    justify-content: flex-end;
    gap: 0.4rem;
  }
  &__Button {
    box-shadow: none;
    border-radius: 9999px;
    background-color: hsl(var(--bg-100));
    &--Accent {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
  }
}

.episode-update-move,
.episode-update-enter-active,
.episode-update-leave-active {
  transition: 150ms ease-out;
}
.episode-update-enter-from,
.episode-update-leave-to {
  opacity: 0;
  translate: 0 -0.5rem 0;
}
.episode-leave-active {
  position: absolute;
}

@media screen and (min-width: 768px) {
  .AnimeEpisodes {
    &__Accordion {
      --episode-gap: 1.2rem;
      --thumbnail-width: 23rem;
      --accordion-title-padding: 1.6rem;
    }
    &__Thumbnail {
      width: 40rem;
    }
    &__PartIndex {
      font-size: 1.6rem;
    }
    &__Title {
      font-size: 1.6rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeEpisodes {
    gap: 1.2rem;
  }
  .ClearMaratonAlert {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
    --dialog-padding: 3rem;
    --dialog-max-width: 50rem;
  }
}
</style>
