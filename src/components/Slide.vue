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
          <vueflix-route-btn :link="slide.link">{{
            slide.button
          }}</vueflix-route-btn>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import VueflixRouteBtn from "./VueflixRouteBtn.vue";
import SwiperCore, {
  Autoplay,
  Pagination,
  A11y,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, A11y, Navigation, EffectFade]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    VueflixRouteBtn,
  },
  data() {
    return {
      slides: [
        {
          anime: "코바야시네 메이드래곤 S",
          bgSet: {
            webp: require("../assets/kobayashi_banner.webp"),
            jpeg: require("../assets/kobayashi_banner.jpeg"),
            webpMobile: require("../assets/kobayashi_banner_m.webp"),
            jpegMobile: require("../assets/kobayashi_banner_m.jpeg"),
          },
          aniLogo: require("../assets/kobayashi.png"),
          /*
           서버가 아닌 로컬의 이미지 로고를 바인딩할 때는,
           경로만 넣을 경우 "경로 텍스트 그 자체"가 꽂히게 된다.
           require를 넣으면 바르게 들어간다
          */
          copy: "다시 돌아온 일상물 다크호스",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "사신 도련님과 검은 메이드",
          bgSet: {
            webp: require("../assets/blackmaid_banner.webp"),
            jpeg: require("../assets/blackmaid_banner.jpeg"),
            webpMobile: require("../assets/blackmaid_banner_m.webp"),
            jpegMobile: require("../assets/blackmaid_banner_m.jpeg"),
          },
          aniLogo: require("../assets/blackmaid.png"),
          copy: "사회적 거리두기의 모범",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "하얀 모래의 아쿠아톱",
          bgSet: {
            webp: require("../assets/aquatop_banner.webp"),
            jpeg: require("../assets/aquatop_banner.jpeg"),
            webpMobile: require("../assets/aquatop_banner_m.webp"),
            jpegMobile: require("../assets/aquatop_banner_m.jpeg"),
          },
          aniLogo: require("../assets/aquatop.png"),
          copy: "방구석 바캉스",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "그녀도 여친",
          bgSet: {
            webp: require("../assets/kanokano_banner.webp"),
            jpeg: require("../assets/kanokano_banner.jpeg"),
            webpMobile: require("../assets/kanokano_banner_m.webp"),
            jpegMobile: require("../assets/kanokano_banner_m.jpeg"),
          },
          aniLogo: require("../assets/kanokano.png"),
          copy: "뇌를 정지합니다. 정지하겠습니다.",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "우리들의 리메이크",
          bgSet: {
            webp: require("../assets/bokutachi_banner.webp"),
            jpeg: require("../assets/bokutachi_banner.jpeg"),
            webpMobile: require("../assets/bokutachi_banner_m.webp"),
            jpegMobile: require("../assets/bokutachi_banner_m.jpeg"),
          },
          aniLogo: require("../assets/bokutachi.png"),
          copy: "10년 전으로 돌아간다면",
          button: "보러가기",
          link: "#none",
        },
      ],
      currentImg: 0,
      slide: undefined,
    };
  },
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
    width: 0.5vw;
    height: 0.5vw;
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
