<template>
  <div class="bg">
    <div class="modal" role="dialog">
      <h2 class="title"><slot name="title"></slot></h2>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <div class="star-interaction" v-if="type === 'star'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 280 48"
          class="stars"
        >
          <path
            v-for="(svgPoint, index) in svgPoints"
            :key="index"
            :d="svgPoint"
            @click="starClicked(index)"
            :class="['star', { 'star--filled': index * 0.5 < rating }]"
          />
        </svg>
        <button class="rating-reset-btn" @click="ratingReset">
          별점 초기화
        </button>
      </div>
      <div class="cta" v-if="type !== 'star'">
        <vueflix-func-btn @click="noFunc" v-if="type === 'yes-no'">
          <slot name="no-string"></slot>
        </vueflix-func-btn>
        <vueflix-func-btn
          bg="var(--theme-500)"
          text-color="#fff"
          @click="yesFunc"
          v-if="type === 'yes-no' || type === 'alert'"
        >
          <slot name="yes-string"></slot>
        </vueflix-func-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VueflixFuncBtn from "./VueflixFuncBtn.vue";
export default {
  components: { VueflixFuncBtn },
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "알림",
    },
    type: {
      type: String,
    },
    yesFunc: {
      type: Function,
    },
    noFunc: {
      type: Function,
    },
    rating: {
      type: Number,
    },
  },
  data() {
    return {
      svgPoints: [
        "M21.44,1.63,15.65,14l-13.25,2A2.84,2.84,0,0,0,.81,20.86l9.67,10L8.23,44.7a2.82,2.82,0,0,0,4.15,2.94L24,41.19V0A2.79,2.79,0,0,0,21.44,1.63Z",
        "M39.77,44.7,37.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L32.35,14,26.56,1.63A2.79,2.79,0,0,0,24,0V41.19l11.62,6.45A2.82,2.82,0,0,0,39.77,44.7Z",
        "M79.44,1.63,73.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L66.23,44.7a2.82,2.82,0,0,0,4.15,2.94L82,41.19V0A2.79,2.79,0,0,0,79.44,1.63Z",
        "M97.77,44.7,95.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L90.35,14,84.56,1.63A2.79,2.79,0,0,0,82,0V41.19l11.62,6.45A2.82,2.82,0,0,0,97.77,44.7Z",
        "M137.44,1.63,131.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L124.23,44.7a2.82,2.82,0,0,0,4.15,2.94L140,41.19V0A2.79,2.79,0,0,0,137.44,1.63Z",
        "M155.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L142.56,1.63A2.79,2.79,0,0,0,140,0V41.19l11.62,6.45A2.82,2.82,0,0,0,155.77,44.7Z",
        "M195.44,1.63,189.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L182.23,44.7a2.82,2.82,0,0,0,4.15,2.94L198,41.19V0A2.79,2.79,0,0,0,195.44,1.63Z",
        "M213.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L200.56,1.63A2.79,2.79,0,0,0,198,0V41.19l11.62,6.45A2.82,2.82,0,0,0,213.77,44.7Z",
        "M253.44,1.63,247.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L240.23,44.7a2.82,2.82,0,0,0,4.15,2.94L256,41.19V0A2.79,2.79,0,0,0,253.44,1.63Z",
        "M271.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L258.56,1.63A2.79,2.79,0,0,0,256,0V41.19l11.62,6.45A2.82,2.82,0,0,0,271.77,44.7Z",
      ],
    };
  },
  methods: {
    starClicked(index) {
      this.$emit("starChanged", (index + 1) * 0.5);
    },
    ratingReset() {
      this.$emit("starChanged", 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: auto;
  background-color: transparent;
  .modal {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3rem 4rem;
    background-color: var(--text-100);
    border-radius: 0.6rem 0.6rem 0 0;
    .title {
      font-size: 2.5em;
      margin-bottom: 0.5em;
    }
    .description {
      font-size: 1.5em;
      margin-bottom: 3em;
    }
    .star-interaction {
      align-self: flex-end;
      width: 100%;
      display: flex;
      align-items: center;
      .stars {
        width: 40vw;
        .star {
          fill: var(--bg-300);
          &--filled {
            fill: var(--point-500);
          }
        }
      }
      .rating-reset-btn {
        margin-left: 1rem;
        padding-bottom: 0.3rem;
        color: var(--text-900);
        font-size: 1.2rem;
        border-bottom: var(--text-900) solid 1px;
      }
    }
    .cta {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 0.5em;
    }
  }
}
@media screen and (min-width: 768px) {
  .bg .modal .description {
    font-size: 1.5em;
    margin-bottom: 5em;
  }
}

@media screen and (min-width: 1024px) {
  .bg {
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    bottom: auto;
    height: 100vh;
    .modal {
      width: 500px;
      top: 50%;
      bottom: auto;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.6rem;
      background-color: #fff;
    }
  }
}
</style>
