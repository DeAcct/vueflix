<template>
  <section class="anime-meta">
    <h2 class="blind">{{ animeInfo.aniTitle }} 관련 정보</h2>
    <p
      :class="[
        'anime-meta__summary',
        { 'anime-meta__summary--loaded': isLoaded },
      ]"
    >
      {{ animeInfo.summary }}
    </p>
    <VueflixCarousel type="break" class="anime-meta__tags">
      <template v-if="!isLoaded">
        <li
          class="anime-meta__item anime-meta__item--dummy loading-target"
          v-for="_ in 5"
        >
          <span class="blind">로딩중</span>
        </li>
      </template>
      <li v-for="madeBy in animeInfo.madeBy" :key="madeBy">
        <RouterLink to="#none" class="anime-meta__item">
          {{ madeBy }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="#none" class="anime-meta__item">
          {{ animeInfo.director }}
        </RouterLink>
      </li>
      <li v-for="genre in animeInfo.genre" :key="genre">
        <RouterLink to="#none" class="anime-meta__item">
          {{ genre }}
        </RouterLink>
      </li>
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

const isLoaded = computed(() => Object.keys(props.animeInfo).length !== 0);
</script>

<style lang="scss" scoped>
.anime-meta {
  &__summary {
    padding: 0 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--anime-layout-text);
    height: 1.3rem;
    &--loaded {
      height: auto;
    }
  }
  &__tags {
    --carousel-padding: 2rem;
  }
  &__item {
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
    &--dummy {
      width: 10rem;
      &:nth-child(2n) {
        width: 5rem;
      }
    }
  }
}
@media screen and (min-width: 1080px) {
  .anime-meta {
    width: 50rem;
    padding: 2rem 0;
    border-radius: 0.6rem;
    &__tags {
      height: auto;
      --carousel-padding: 2rem;
      --carousel-gap: 1rem;
    }
  }
}
</style>
