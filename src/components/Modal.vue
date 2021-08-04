<template>
  <div class="bg">
    <div
      class="modal"
      role="dialog"
      :aria-labelledby="label"
      :aria-describedby="description"
    >
      <h2 class="title" :id="label">{{ title }}</h2>
      <p :id="description" class="description">
        <slot></slot>
      </p>
      <div class="cta">
        <vueflix-func-btn
          bg="var(--theme-500)"
          text-color="#fff"
          @click="yesFunc"
        >
          {{ yes }}
        </vueflix-func-btn>
        <vueflix-func-btn bg="var(--theme-100)" @click="noFunc">{{
          no
        }}</vueflix-func-btn>
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
    label: {
      type: String,
      default: "뷰플릭스 알림",
    },
    description: {
      type: String,
      default: "알림 내용",
    },
    yes: {
      type: String,
      default: "확인",
    },
    no: {
      type: String,
      default: "닫기",
    },
    yesFunc: {
      type: Function,
    },
    noFunc: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 2rem 3rem;
    background-color: #fff;
    border-radius: 0.6rem;
    .title {
      font-size: 2.5em;
      margin-bottom: 0.2em;
    }
    .description {
      font-size: 1.3em;
      margin-bottom: 5em;
    }
    .cta {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 0.5em;
    }
  }
}

@media screen and (max-width: 768px) {
  .bg {
    background: transparent;
    top: auto;
    bottom: 0;
    .modal {
      top: auto;
      bottom: 0;
      width: 100%;
      transform: translate(-50%, 0);
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      background-color: var(--text-100);
    }
  }
}
</style>
