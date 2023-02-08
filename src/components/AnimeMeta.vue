<template>
  <!-- <section class="anime-meta" v-if="false">
    <ul class="info">
      <li>
        <h3 class="title">제작사</h3>
        <p
          :class="[
            'text',
            'loading-target',
            { 'text--loaded': animeInfo.summary },
          ]"
        >
          <span
            v-for="madeBy in animeInfo.madeBy"
            :key="madeBy"
            class="division-pipe"
          >
            {{ madeBy }}
          </span>
        </p>
      </li>
      <li>
        <h3 class="title">감독</h3>
        <p
          :class="[
            'text',
            'loading-target',
            { 'text--loaded': animeInfo.director },
          ]"
        >
          <span class="division-pipe">
            {{ animeInfo.director }}
          </span>
        </p>
      </li>
      <li class="inner">
        <h3 class="title">요약</h3>
        <p
          :class="[
            'text',
            'loading-target',
            { 'text--loaded': animeInfo.summary },
          ]"
        >
          {{ animeInfo.summary }}
        </p>
      </li>
    </ul>
    <arrow-btn-widget :to="`${$route.params.title}/reviews`" :icon="true">
      <template v-slot:icon>
        <icon-review />
      </template>
      <template v-slot:text>리뷰</template>
    </arrow-btn-widget>
  </section> -->
  <section class="anime-meta">
    <div class="anime-meta__track">
      <ul class="anime-meta__body">
        <li
          class="anime-meta__item"
          v-for="madeBy in animeInfo.madeBy"
          :key="madeBy"
        >
          {{ madeBy }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    animeInfo: Object,
  },
};
</script>
