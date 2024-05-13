<template>
  <div class="AnimeEpisodes">
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
    <template v-if="animeInfo.parts">
      <TransitionGroup name="episode-update">
        <AccordionGroup
          v-for="({ part, episodes }, i) in sortedParts"
          :key="part"
          class="AnimeEpisodes__Accordion"
          :open="i === 0"
        >
          <template v-slot:title>
            {{ part }}
          </template>
          <template v-slot:content>
            <Thumbnailset
              v-for="{ title, index, thumbnail } in episodes"
              :key="`episode-${title}`"
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
                  <ProgressCircle
                    v-if="
                      getEpisodeProgress(animeInfo.name, part, index)
                        .percent !== '0%'
                    "
                    class="AnimeEpisodes__WatchPercent"
                    :percent="
                      getEpisodeProgress(animeInfo.name, part, index).percent
                    "
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
          </template>
        </AccordionGroup>
      </TransitionGroup>
    </template>
    <NativeDialog ref="$clearMaratonAlertRoot" class="ClearMaratonAlert" shade>
      <template #title>
        <strong class="ClearMaratonAlert__Title">시청기록 삭제</strong>
      </template>
      <template #content>
        <p class="ClearMaratonAlert__Info">정말 삭제하시겠어요?</p>
      </template>
      <template #control>
        <div class="ClearMaratonAlert__Control">
          <VueflixBtn
            type="button"
            component="button"
            class="ClearMaratonAlert__Button--Accent"
            @click="clear"
          >
            <template #text> 삭제 </template>
          </VueflixBtn>
          <VueflixBtn
            type="button"
            component="button"
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
import ProgressCircle from "@/components/ProgressCircle.vue";
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
  margin-top: 2rem;
  flex-grow: 1;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;

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
  }
  &__Item {
    padding: 0;
  }
  &__Thumbnail {
    width: 30rem;
    min-width: 0;
    position: relative;
  }
  &__WatchPercent {
    position: absolute;
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
  --dialog-max-width: 100%;
  --dialog-translate: 0;
  --dialog-inset: auto auto 0 auto;
  --dialog-starting-translate: 0 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  --dialog-z-index: var(--z-index-overay-2);
  --dialog-height: auto;
  --dialog-padding: 2rem;
  --dialog-bg: hsl(var(--bg-200));
  &__Title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    text-wrap: pretty;
    line-height: 1.3;
  }
  &__Info {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-wrap: pretty;
  }
  &__Control {
    display: flex;
    justify-content: flex-end;
  }
  &__Button--Accent {
    background-color: hsl(var(--theme-500));
    border-radius: var(--global-radius);
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
  translate: 0 -0.5rem;
}
.episode-leave-active {
  position: absolute;
}

@media screen and (min-width: 768px) {
  .AnimeEpisodes {
    &__Accordion {
      --episode-gap: 1.2rem;
      --thumbnail-width: 23rem;
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
    margin-top: 2rem;
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
