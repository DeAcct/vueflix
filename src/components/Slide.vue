<template>
  <section class="slide">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper
      effect="fade"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.anime"
        class="slide-item"
      >
        <router-link :to="slide.link">
          <div class="bg">
            <picture>
              <source
                media="(max-width: 1024px)"
                :srcset="slide.bgSet.webpMobile"
              />
              <source
                media="(max-width: 1024px)"
                :srcset="slide.bgSet.jpegMobile"
              />
              <source media="(min-width: 1025px)" :srcset="slide.bgSet.webp" />
              <img
                :src="slide.bgSet.jpeg"
                :alt="`${slide.anime} 배너`"
                class="bgPlace"
              />
            </picture>
          </div>
          <div class="slide-info">
            <h3>
              <img :src="slide.aniLogo" :alt="slide.anime" class="ani-logo" />
            </h3>
            <strong class="slide-copy">{{ slide.copy }}</strong>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import SwiperCore, {
  Autoplay,
  Pagination,
  A11y,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import { mapState } from "vuex";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, A11y, Navigation, EffectFade]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentImg: 0,
    };
  },
  computed: mapState({
    slides: (state) => state.anime.slides,
  }),
};
</script>

<style lang="scss">
.swiper-pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(255, 255, 255, 0.5);
    width: 0.6rem;
    height: 0.6rem;

    &-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.slide-item {
  position: relative;
  .bg {
    position: relative;
    height: fit-content;
    &::before {
      position: absolute;
      width: 100vw;
      height: 100%;
      top: 0;
      content: "";
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.15) 40%,
        rgba(0, 0, 0, 0.15) 60%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
    .bgPlace {
      width: 100vw;
    }
  }
  .slide-info {
    position: absolute;
    left: 2rem;
    bottom: 10%;
    .ani-logo {
      max-width: 70vw;
      max-height: 15em;
      margin-bottom: 2rem;
    }
    .slide-copy {
      display: block;

      font-size: 1.5em;
      color: #fff;
      margin-bottom: 1.5rem;
    }
  }
}
@media screen and (min-width: 768px) {
  .swiper-container-horizontal
    .swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 1vw;
    height: 1vw;
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 0.6rem;
  }
  .slide-item {
    .slide-info {
      left: 5rem;
      .ani-logo {
        max-width: 40vw;
        max-height: 10em;
        margin-bottom: 3rem;
      }
      .slide-copy {
        font-size: 2em;
      }
    }
    .bg {
      height: 70vh;
    }
  }
}
@media screen and (min-width: 769px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    transition: 150ms ease-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &::after {
      font-size: 3rem;
    }
  }
  .swiper-pagination {
    justify-content: flex-end;
    padding: 0 5rem 4rem;
  }
}

@media screen and (min-width: 1025px) {
  .slide-item .slide-info .ani-logo {
    max-width: 30vw;
    max-height: 18em;
  }
  .slide-item .bg {
    height: fit-content;
  }
}
</style>
