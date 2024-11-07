<template>
  <section class="AnimeMeta">
    <h2 class="blind">{{ animeInfo.name }} 관련 정보</h2>
    <p
      class="AnimeMeta__Summary"
      :class="isLoaded && 'AnimeMeta__Summary--Loaded'"
    >
      {{ animeInfo.summary }}
    </p>
    <VueflixCarousel class="AnimeMeta__Tags">
      <ul class="AnimeMeta__TagList">
        <template v-if="!isLoaded">
          <li
            class="AnimeMeta__Item AnimeMeta__Item--Dummy loading-target"
            v-for="(v, i) in randomSkellWeight"
            :key="`dummy-${i}`"
            :style="`--weight:${v * 5}`"
          >
            <span class="blind">로딩중</span>
          </li>
        </template>
        <li v-for="madeBy in animeInfo.madeBy" :key="madeBy">
          <RouterLink to="#none" class="AnimeMeta__Item">
            {{ madeBy }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#none" class="AnimeMeta__Item">
            {{ animeInfo.director }}
          </RouterLink>
        </li>
        <li v-for="genre in animeInfo.genre" :key="genre">
          <RouterLink to="#none" class="AnimeMeta__Item">
            {{ genre }}
          </RouterLink>
        </li>
      </ul>
    </VueflixCarousel>
  </section>
</template>

<script setup>
import { computed } from "vue";
import VueflixCarousel from "./VueflixCarousel.vue";

const props = defineProps({
  animeInfo: {
    type: Object,
  },
});

const randomSkellWeight = Array.from(
  [null, null, null, null, null],
  () => Math.random() * (0.75 - 0.1) + 0.1
);
const isLoaded = computed(() => Object.keys(props.animeInfo).length !== 0);
</script>

<style lang="scss" scoped>
.AnimeMeta {
  &__Summary {
    padding: 0 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--anime-layout-text);
    height: 1.3rem;
    &--Loaded {
      height: auto;
    }
  }
  &__Tags {
    --carousel-padding: 2rem 0;
  }
  &__TagList {
    display: flex;
    gap: 0.8rem;
  }
  &__Item {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 1.5rem;
    height: 3.5rem;
    white-space: nowrap;
    transition: background-color 150ms ease-out;
    background-color: hsl(var(--text-800) / 0.2);
    border-radius: 9999px;
    &--Dummy {
      width: calc(5rem * var(--weight));
      min-width: 3.5rem;
    }
  }
}
@media screen and (min-width: 1080px) {
  .AnimeMeta {
    padding: 2rem 0;
    border-radius: 0.6rem;
    &__TagList {
      flex-wrap: wrap;
    }
  }
}
</style>
