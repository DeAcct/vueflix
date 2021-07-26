<template>
  <section class="slide">
    <h2 class="blind">애니 추천 슬라이드</h2>
    <div class="slide-hold">
      <transition-group class="slide-wrap" tag="ul" name="slide">
        <template v-for="(slide, index) in slides" :key="slide.anime">
          <li v-show="index === currentImg" class="slide-item">
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
              <slide-link :link="slide.link">{{ slide.button }}</slide-link>
            </div>
          </li>
        </template>
      </transition-group>
    </div>
    <div class="slide-remote">
      <button class="remote-btn prev" @click="prev">
        <span class="blind">이전</span>
      </button>
      <button class="remote-btn next" @click="next">
        <span class="blind">다음</span>
      </button>
    </div>
    <div class="slide-indi">
      <div class="indi-progress"></div>
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
  mounted() {
    /*자동 실행*/
    this.slide = setInterval(this.resumeInterval, 3000);
  },
  methods: {
    /*슬라이드 다음/이전 버튼 관련*/
    next() {
      this.pauseInterval();
      this.slide = setInterval(this.resumeInterval, 3000);
      this.currentImg = this.currentImg + 1;
    },
    prev() {
      this.pauseInterval();
      this.slide = setInterval(this.resumeInterval, 3000);
      this.currentImg = this.currentImg - 1;
    },
    resumeInterval() {
      this.currentImg = this.currentImg + 1;
      if (this.currentImg > 4) {
        this.currentImg = 0;
      }
    },
    pauseInterval() {
      clearInterval(this.slide);
    },
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
      position: relative;
      width: 100vw;
      aspect-ratio: 135/55;

      .slide-item {
        position: absolute;

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

      .slide-enter-active,
      .slide-leave-active {
        transition: all 500ms ease;
      }
      .slide-enter-from,
      .slide-leave-to {
        opacity: 0;
      }
    }
  }
  .slide-remote {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: space-between;
    width: 100%;

    .remote-btn {
      width: 4.5rem;
      height: 4.5rem;
      background-color: #fff;
    }
  }
  .slide-indi {
    position: absolute;
  }
}
</style>
