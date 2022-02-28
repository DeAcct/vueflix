<template>
  <div class="action-sheet">
    <button
      class="action-sheet__bg"
      title="닫기"
      @click="closeOverflowMenu"
      ref="bg"
    />
    <div class="interact inner" ref="actionArea">
      <ul class="action-sheet__actions">
        <li
          class="action-sheet__item"
          v-for="action in actions"
          :key="action.text"
        >
          <button @click="action.method">
            {{ action.text }}
          </button>
        </li>
      </ul>
      <button class="action-sheet__close-btn" @click="closeOverflowMenu">
        <i class="icon">
          <icon-base>
            <icon-close />
          </icon-base>
        </i>
        <span class="text"> 닫기 </span>
      </button>
    </div>
  </div>
</template>
<script>
import IconBase from "./IconBase.vue";
import IconClose from "./icons/IconClose.vue";
import { modalAnimations } from "../mixins/modalAnimations";
export default {
  components: { IconBase, IconClose },
  props: {
    actionOrigin: {
      type: Array,
    },
  },
  methods: {
    closeOverflowMenu() {
      this.BgAnimation.reverse();
      this.ActionAreaAnimation.reverse();
      this.ActionAreaAnimation.onfinish = () => {
        this.$emit("overflow-menu-close");
      };
    },
  },
  mounted() {
    this.BgAnimation.play();
    this.ActionAreaAnimation.play();
  },
  computed: {
    actions() {
      const closeMethod = this.closeOverflowMenu;
      const result = this.actionOrigin.map((action) => ({
        ...action,
        method() {
          action.method();
          closeMethod();
        },
      }));
      return result;
    },
    ActionAreaHeight() {
      return "14.4rem";
    },
  },
  mixins: [modalAnimations],
};
</script>

<style lang="scss" scoped>
.action-sheet {
  width: 100%;
  height: 100vh;
  &__bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .interact {
    width: 100%;
    position: absolute;
    bottom: -14.4rem;
    background-color: var(--bg-300);
    border-radius: 0.6rem 0.6rem 0 0;
  }
  &__actions {
    border-bottom: 1px solid var(--bg-400);
  }
  &__item {
    button {
      padding: 1.6rem 0 1.7rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  &__close-btn {
    padding: 1.6rem 0 1.7rem;
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.5rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-weight: 500;
    }
  }
}
</style>
