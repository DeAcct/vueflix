<template>
  <section class="slide">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper
      effect="fade"
      :scrollbar="{ draggable: true }"
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
          <img
            :src="slide.bgSet"
            :alt="`${slide.anime} 배너`"
            class="bgPlace"
          />
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
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

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
          bgSet: "https://source.unsplash.com/2160x880/?landscape",
          aniLogo: require("../assets/kobayashi.png"),
          /*
           서버가 아닌 로컬의 이미지 로고를 바인딩할 때는,
           경로만 넣을 경우 "경로 텍스트 그 자체"가 꽂히게 된다.
           require를 넣으면 바르게 들어간다
          */
          copy: "다시 돌아온 일상물 명작",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "사신 도련님과 검은 메이드",
          bgSet: "https://source.unsplash.com/2160x880/?anime",
          aniLogo: require("../assets/blackmaid.png"),
          copy: "가장 가까이 있지만 닿을 수 없는 사랑 이야기",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "하얀 모래의 아쿠아톱",
          bgSet: "https://source.unsplash.com/2160x880/?seaside",
          aniLogo: require("../assets/aquatop.png"),
          copy: "방구석 바캉스",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "그녀도 여친",
          bgSet: "https://source.unsplash.com/2160x880/?fireworks",
          aniLogo: require("../assets/kanokano.png"),
          copy: "그녀도 여친? 그녀도, 여친.",
          button: "보러가기",
          link: "#none",
        },
        {
          anime: "우리들의 리메이크",
          bgSet: "https://source.unsplash.com/2160x880/?sakura",
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
.swiper-container {
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(255, 255, 255, 0.5);

    &-active {
      background: rgba(255, 255, 255, 1);
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: rgba(255, 255, 255, 0.5);
    transition: 150ms ease-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &::after {
      font-size: 3rem;
    }
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
      left: 5rem;
      bottom: 10%;
      .ani-logo {
        max-width: 30vw;
        margin-bottom: 2rem;
      }
      .slide-copy {
        display: block;
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
