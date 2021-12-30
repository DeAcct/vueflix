<template>
  <div class="modal">
    <button class="shadow" @click="noFunc" title="닫기"></button>
    <div class="action-area" role="dialog">
      <h2 class="title"><slot name="title"></slot></h2>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <star-interaction
        :rating="rating"
        v-if="type === 'star'"
        @starChanged="starChanged"
      />
      <div class="cta" v-if="type !== 'star'">
        <vueflix-func-btn
          @click="noFunc"
          v-if="type === 'yes-no'"
          class="btn--later"
        >
          <slot name="no-string"></slot>
        </vueflix-func-btn>
        <vueflix-func-btn
          @click="yesFunc"
          v-if="type === 'yes-no' || type === 'alert'"
          class="btn--install"
        >
          <slot name="yes-string"></slot>
        </vueflix-func-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VueflixFuncBtn from "./VueflixFuncBtn.vue";
import StarInteraction from "./StarInteraction.vue";
export default {
  components: {
    VueflixFuncBtn,
    StarInteraction,
  },
  name: "Modal",
  props: {
    title: {
      type: String,
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

  methods: {
    starChanged(e) {
      this.$emit("starChanged", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: auto;
  .shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100vh;
  }
  .action-area {
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
    .cta {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 0.5em;
      .btn {
        &--later {
          background-color: var(--top-item);
        }
        &--install {
          background-color: var(--theme-500);
          color: var(--top-item);
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
