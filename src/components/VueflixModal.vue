<template>
  <div class="modal">
    <button class="shadow" @click="noFunc" title="닫기"></button>
    <div class="action-area" role="dialog">
      <h2 class="title"><slot name="title"></slot></h2>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <div class="cta">
        <vueflix-btn
          @click="noFunc"
          v-if="type === 'yes-no'"
          class="btn--later"
          component="button"
        >
          <template #text><slot name="no-string" /></template>
        </vueflix-btn>
        <vueflix-btn
          @click="yesFunc"
          v-if="type === 'yes-no' || type === 'alert'"
          class="btn--install"
          component="button"
        >
          <template #text><slot name="yes-string" /></template>
        </vueflix-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VueflixBtn from "./VueflixBtn.vue";
export default {
  components: {
    VueflixBtn,
  },
  name: "VueflixModal",
  props: {
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
  mounted() {
    document.documentElement.style.overflow = "hidden";
  },
  unmounted() {
    document.documentElement.style.overflow = "visible";
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: auto;
  .shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .action-area {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3rem 4rem;
    background-color: var(--bg-200);
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
      .btn {
        &--later {
          background-color: var(--bg-300);
        }
        &--install {
          background-color: var(--theme-500);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .modal .action-area .description {
    font-size: 1.5em;
    margin-bottom: 5em;
  }
}

@media screen and (min-width: 1024px) {
  .modal {
    top: 0;
    bottom: auto;
    height: 100vh;
    .shadow {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .action-area {
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
