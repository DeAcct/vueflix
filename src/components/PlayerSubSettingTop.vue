<template>
  <div class="player-sub-setting-top">
    <button
      @click="playerChangeEmit('main')"
      class="player-sub-setting-top__back-btn"
    >
      <i class="icon">
        <icon-base>
          <icon-arrow-prev />
        </icon-base>
      </i>
    </button>
    <strong class="player-sub-setting-top__text"><slot></slot></strong>
  </div>
</template>

<script>
import { playerChangeEmit } from "../mixins/playerChangeEmit";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "PlayerSubSettingTop",
  mixins: [playerChangeEmit],
  components: {
    IconBase,
    IconArrowPrev,
  },
};
</script>

<style lang="scss" scoped>
.player-sub-setting-top {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  &__back-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    .icon {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: #fff;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__text {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
  }
}
</style>
