<template>
  <section class="slide">
    <h2 class="blind">애니 추천 슬라이드</h2>
    <div class="slide-hold">
      <ul class="slide-wrap">
        <li v-for="slide in slides" :key="slide.anime" class="slide-item">
          <div class="bg">
            <img :src="slide.bgSet" :alt="slide.anime" class="bgPlace" />
          </div>
          <div class="slide-info">
            <h3>
              <img
                :src="slide.aniLogo"
                :alt="`${slide.anime} 로고`"
                class="ani-logo"
              />
            </h3>
            <strong class="slide-copy">{{ slide.copy }}</strong>
            <slide-link :link="slide.link">{{ slide.button }}</slide-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="slide-remote">
      <button class="prev">
        <span class="blind">이전</span>
      </button>
      <button class="next">
        <span class="blind">다음</span>
      </button>
    </div>
    <div class="slide-indi">
      <button v-for="(slide, index) in slides" :key="index">
        <span class="blind">{{ slide.anime }}</span>
      </button>
    </div>
  </section>
</template>

<script>
import SlideLink from "./SlideLink.vue";
export default {
  components: { SlideLink },
  name: "Slide",
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
          copy: "다시 돌아온 일상 명작",
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
    };
  },
};
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  .slide-hold {
    /*ui 자체*/
    width: 100vw;
    height: fit-content;
    background-color: #000;
    overflow: hidden;
    .slide-wrap {
      /*슬라이드 감싸기*/
      display: flex;
      width: fit-content;
      height: fit-content;
      transform: translateX(-200vw);
      .slide-item {
        position: relative;
        .bg::after {
          position: absolute;
          width: 100vw;
          height: 100%;
          top: 0;
          content: "";
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        }
        .bgPlace {
          display: block;
          width: 100vw;
          aspect-ratio: 135/55;
          /*540/220*/
        }
        .slide-info {
          position: absolute;
          z-index: 10;
          left: 5rem;
          bottom: 40%;
          transform: translateY(50%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 1.7rem;
        }
        .ani-logo {
          max-width: 30vw;
          max-height: 20vh;
          margin-bottom: 2rem;
          color: #fff;
          font-weight: 500;
        }
        .slide-copy {
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: 2rem;
          text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .slide-remote {
    position: absolute;
  }
  .slide-indi {
    position: absolute;
  }
}
</style>
