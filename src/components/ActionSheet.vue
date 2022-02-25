<template>
  <div class="action-sheet">
    <button
      class="action-sheet__shadow"
      @click="sheetClose"
      title="취소"
      ref="bg"
    ></button>
    <div class="action-area inner" ref="actionArea">
      <ul class="actions">
        <slot name="actions"></slot>
      </ul>
      <button class="action-sheet__close-btn" @click="sheetClose">
        <i class="icon">
          <icon-base>
            <icon-close />
          </icon-base>
        </i>
        <span class="text">취소</span>
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconClose from "./icons/IconClose.vue";
export default {
  name: "ActionSheet",
  props: {
    title: {
      type: String,
    },
    actions: {
      type: Array,
    },
  },
  components: {
    IconBase,
    IconClose,
  },
  mounted() {
    this.BgAnimation.play();
    this.ActionAreaAnimation.play();
  },
  methods: {
    sheetClose() {
      this.$emit("sheet-close");
      this.BgAnimation.reverse();
      this.ActionAreaAnimation.reverse();
    },
  },

  computed: {
    BgAnimation() {
      const BgKeyframe = new KeyframeEffect(
        this.$refs.bg,
        [
          {
            opacity: 0,
            visibility: "hidden",
          },
          {
            opacity: 1,
            visibility: "visible",
          },
        ],
        {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(1,0,0,1)",
        }
      );
      const BgAnimation = new Animation(BgKeyframe, document.timeline);
      return BgAnimation;
    },
    ActionAreaAnimation() {
      const ActionAreaKeyframe = new KeyframeEffect(
        this.$refs.actionArea,
        [
          {
            transform: "translateY(0)",
            visibility: "hidden",
          },
          {
            transform: "translateY(-15rem)",
            visibility: "visible",
          },
        ],
        {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(1,0,0,1)",
        }
      );
      const ActionAreaAnimation = new Animation(
        ActionAreaKeyframe,
        document.timeline
      );
      return ActionAreaAnimation;
    },
  },
};
</script>

<style lang="scss" scoped>
.action-sheet {
  position: fixed;
  z-index: 70;
  width: 100%;
  height: 100vh;
  &__shadow {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
  }
  &__title {
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    align-self: center;
  }
  .action-area {
    position: absolute;
    top: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--bg-200);
  }
  .actions {
    border-bottom: 1px solid var(--bg-300);
  }

  &__close-btn {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    font-size: 1.3rem;
    font-weight: 500;
    .icon {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 1rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
}
</style>
