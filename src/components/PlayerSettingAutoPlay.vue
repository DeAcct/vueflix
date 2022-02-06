<template>
  <div class="player-setting-autoplay">
    <player-sub-setting-top @setting-replace="playerChangeEmit('main')">
      에피소드 자동재생
    </player-sub-setting-top>
    <label
      :class="['toggle-box', { 'toggle-box--on': isAutoplayOn }]"
      for="autoplay-toggle"
    >
      <span class="toggle-box__state-text">
        {{ isAutoplayOn ? "사용 중" : "사용 안 함" }}
      </span>
      <state-toggle
        :input-state="isAutoplayOn"
        toggle-id="autoplay-toggle"
        @state-change="stateChange"
      />
    </label>
    <p class="player-setting-autoplay__description">
      에피소드가 끝나면 자동으로 다음화를 재생합니다
    </p>
  </div>
</template>

<script>
import { playerChangeEmit } from "../mixins/playerChangeEmit";
import PlayerSubSettingTop from "./PlayerSubSettingTop.vue";
import StateToggle from "./StateToggle.vue";
export default {
  name: "PlayerSettingAutoPlay",
  mixins: [playerChangeEmit],
  components: {
    PlayerSubSettingTop,
    StateToggle,
  },
  props: {
    autoplay: {
      type: Boolean,
    },
  },
  data() {
    return {
      isAutoplayOn: this.autoplay,
    };
  },
  methods: {
    stateChange(e) {
      this.isAutoplayOn = e;
      this.$emit("autoplay-change", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-setting-autoplay {
  display: flex;
  flex-direction: column;
  &__description {
    font-size: 1.2rem;
    color: #fff;
    word-break: break-all;
    line-height: 1.3;
  }
  .toggle-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
    background-color: var(--toggle-box-false);
    border-radius: 0.6rem;
    transition: background-color 150ms ease-in-out;
    &__state-text {
      color: #fff;
      font-size: 1.3rem;
    }

    &--on {
      background-color: var(--theme-900);
    }
  }
}
</style>
