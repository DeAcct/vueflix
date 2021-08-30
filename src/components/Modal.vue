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
        <vueflix-func-btn @click="noFunc">
          {{ no }}
        </vueflix-func-btn>
        <vueflix-func-btn
          bg="var(--theme-500)"
          text-color="#fff"
          @click="yesFunc"
        >
          {{ yes }}
        </vueflix-func-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VueflixFuncBtn from './VueflixFuncBtn.vue';
export default {
  components: { VueflixFuncBtn },
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: '알림',
    },
    label: {
      type: String,
      default: '뷰플릭스 알림',
    },
    description: {
      type: String,
      default: '알림 내용',
    },
    yes: {
      type: String,
      default: '확인',
    },
    no: {
      type: String,
      default: '닫기',
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
  z-index: 50;
  bottom: 5rem;
  width: 100vw;
  height: auto;
  background-color: transparent;
  .modal {
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
