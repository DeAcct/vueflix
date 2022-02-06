<template>
  <div class="player-setting-autoskip">
    <player-sub-setting-top @setting-replace="playerChangeEmit('main')">
      오프닝/엔딩 자동스킵
    </player-sub-setting-top>
    <label
      :class="['toggle-box', { 'toggle-box--on': isAutoskipOn }]"
      for="autoskip-toggle"
    >
      <span class="toggle-box__state-text">
        {{ isAutoskipOn ? "사용 중" : "사용 안 함" }}
      </span>
      <state-toggle
        :input-state="isAutoskipOn"
        toggle-id="autoskip-toggle"
        @state-change="stateChange"
      />
    </label>
    <p class="player-setting-autoskip__description">
      오프닝 부분과 엔딩 부분을 자동으로 넘겨줍니다.
    </p>
  </div>
</template>

<script>
import { playerChangeEmit } from "../mixins/playerChangeEmit";
import PlayerSubSettingTop from "./PlayerSubSettingTop.vue";
import StateToggle from "./StateToggle.vue";
export default {
  name: "PlayerSettingAutoSkip",
  mixins: [playerChangeEmit],
  components: {
    PlayerSubSettingTop,
    StateToggle,
  },
  props: {
    autoskip: {
      type: Boolean,
    },
  },
  data() {
    return {
      isAutoskipOn: this.autoskip,
    };
  },
  methods: {
    stateChange(e) {
      this.isAutoskipOn = e;
      this.$emit("autoskip-change", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-setting-autoskip {
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
