<template>
  <aside class="player-setting">
    <div class="row-top">
      <h2 class="player-setting__heading">플레이어 설정</h2>
      <button class="player-setting__close-btn" @click="closeSetting">
        <i class="icon">
          <icon-base icon-name="플레이어 설정 닫기">
            <icon-close />
          </icon-base>
        </i>
      </button>
    </div>
    <transition :name="hierarchy" mode="out-in">
      <component
        :is="selectedSetting"
        @setting-replace="settingReplace"
        @speed-change="speedChange"
        @resolution-change="resolutionChange"
        @autoskip-change="autoskipChange"
        @autoplay-change="autoplayChange"
        :speed="current === 'speed' ? videoSpeed : undefined"
        :resolution="current === 'resolution' ? videoResolution : undefined"
        :autoskip="current === 'auto-skip' ? videoAutoskip : undefined"
        :autoplay="current === 'auto-play' ? videoAutoplay : undefined"
      />
    </transition>
  </aside>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconClose from "./icons/IconClose.vue";
import PlayerSettingMain from "./PlayerSettingMain.vue";
import PlayerSettingResolution from "./PlayerSettingResolution.vue";
import PlayerSettingSpeed from "./PlayerSettingSpeed.vue";
import PlayerSettingAutoSkip from "./PlayerSettingAutoSkip.vue";
import PlayerSettingAutoPlay from "./PlayerSettingAutoPlay.vue";
export default {
  name: "PlayerSetting",
  components: {
    IconBase,
    IconClose,
    PlayerSettingMain,
    PlayerSettingResolution,
    PlayerSettingSpeed,
    PlayerSettingAutoSkip,
    PlayerSettingAutoPlay,
  },
  data() {
    return {
      current: "main",
    };
  },
  props: {
    videoSpeed: {
      type: Number,
    },
    videoResolution: {
      type: String,
    },
    videoAutoplay: {
      type: Boolean,
    },
    videoAutoskip: {
      type: Boolean,
    },
  },
  methods: {
    closeSetting() {
      this.current = "main";
      this.$emit("close-player-setting");
    },
    settingReplace(e) {
      this.current = e;
    },
    speedChange(e) {
      this.$emit("speed-change", e);
    },
    resolutionChange(e) {
      this.$emit("resolution-change", e);
    },
    autoskipChange(e) {
      this.$emit("autoskip-change", e);
    },
    autoplayChange(e) {
      this.$emit("autoplay-change", e);
    },
  },
  computed: {
    selectedSetting() {
      return `player-setting-${this.current}`;
    },
    hierarchy() {
      return this.current !== "main" ? "to-up" : "to-down";
    },
  },
};
</script>

<style lang="scss" scoped>
.player-setting {
  overflow: hidden;
  display: flex;
  width: 75%;
  flex-direction: column;
  background-color: var(--player-aside-bg);
  height: 100%;
  padding: 2rem 3rem;

  .row-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
  }

  &__close-btn {
    align-self: flex-end;
    .icon {
      color: #fff;
      width: 2.4rem;
      height: 3.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.to-up-enter-active,
.to-up-leave-active,
.to-down-enter-active,
.to-down-leave-active {
  transition: 100ms ease-in-out;
}

.to-up-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.to-up-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.to-down-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.to-down-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
@media (orientation: landscape) {
  .player-setting {
    width: 25%;
    .row-top {
      margin-bottom: 2rem;
    }
  }
}
</style>
