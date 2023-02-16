<template>
  <section class="anime-meta">
    <h2 class="blind">{{ animeInfo.aniTitle }} 관련 정보</h2>
    <p class="anime-meta__summary">
      {{ animeInfo.summary }}
    </p>
    <vueflix-carousel type="break" class="anime-meta__tags">
      <template v-if="!isLoaded">
        <li
          class="anime-meta__item anime-meta__item--dummy loading-target"
          v-for="_ in 5"
        >
          <span class="blind">로딩중</span>
        </li>
      </template>
      <li v-for="madeBy in animeInfo.madeBy" :key="madeBy">
        <router-link to="#none" class="anime-meta__item">
          {{ madeBy }}
        </router-link>
      </li>
      <li>
        <router-link to="#none" class="anime-meta__item">
          {{ animeInfo.director }}
        </router-link>
      </li>
      <li v-for="genre in animeInfo.genre" :key="genre">
        <router-link to="#none" class="anime-meta__item">
          {{ genre }}
        </router-link>
      </li>
    </vueflix-carousel>
    <div class="anime-meta__outer-box">
      <router-link to="#none" class="anime-meta__info-link">
        <icon-base class="anime-meta__info-link-icon">
          <icon-short-content />
        </icon-base>
        짤 공작소
      </router-link>
      <router-link
        :to="`${$route.params.title}/reviews`"
        class="anime-meta__info-link"
      >
        <icon-base class="anime-meta__info-link-icon">
          <icon-review />
        </icon-base>
        리뷰
      </router-link>
    </div>
  </section>
</template>

<script>
import ArrowBtnWidget from "./ArrowBtnWidget.vue";
import IconBase from "./IconBase.vue";
import IconReview from "./icons/IconReview.vue";
import IconShortContent from "./icons/IconShortContent.vue";
import VueflixCarousel from "./VueflixCarousel.vue";
export default {
  props: {
    animeInfo: {
      type: Object,
    },
    themeBaseSrc: {
      type: String,
    },
  },
  components: {
    ArrowBtnWidget,
    IconBase,
    IconReview,
    IconShortContent,
    VueflixCarousel,
  },
  computed: {
    isLoaded() {
      return Object.keys(this.animeInfo).length !== 0;
    },
  },
};
// todo
// canvas 이용하여 이미지에서 태그의 개수만큼 주요색상 뽑아내 적용
</script>

<style lang="scss" scoped>
.anime-meta {
  &__summary {
    padding: 0 2rem 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
  &__tags {
    margin-bottom: 1.5rem;
    height: 3.5rem;
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
    background-color: var(--bg-200);
    border-radius: 9999px;
    &--dummy {
      width: 10rem;
      &:nth-child(2n) {
        width: 5rem;
      }
    }
  }
  &__outer-box {
    display: flex;
    margin: 0 2rem;
    gap: 1rem;
  }
  &__info-link {
    display: flex;
    flex: 1 0;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border-radius: 0.6rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: 1px solid var(--bg-200);
  }
  &__info-link-icon {
    width: 2rem;
    height: 2rem;
  }
}
@media screen and (min-width: 1024px) {
  .anime-meta {
    width: 50rem;
    padding: 2rem 0;
    border-radius: 0.6rem;
    border: 1px solid var(--bg-200);
    &__tags {
      margin-bottom: 1.5rem;
      height: auto;
      --carousel-padding: 2rem;
      --carousel-gap: 1rem;
    }
    &__info-link {
      background-color: var(--bg-200);
    }
  }
}
</style>
