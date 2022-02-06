<template>
  <div class="video-controller inner">
    <div class="row-top">
      <button @click="exitPlayer" class="video-controller__btn" replace>
        <i class="icon">
          <icon-base icon-name="뒤로가기">
            <icon-arrow-prev />
          </icon-base>
        </i>
      </button>
      <button @click="openPlayerSetting" class="video-controller__btn">
        <i class="icon">
          <icon-base icon-name="플레이어 설정 열기">
            <icon-overflow />
          </icon-base>
        </i>
      </button>
    </div>
    <div class="row-bottom">
      <div class="video-progress">
        <span class="video-progress__timer">
          <slot name="video-current"></slot>
        </span>

        <div
          role="progressbar"
          class="video-progress__track"
          @click="progressChange"
        >
          <div class="video-progress__body" :style="`width:${progress}`"></div>
        </div>
        <span class="video-progress__timer">
          <slot name="video-duration"></slot>
        </span>
      </div>
      <div class="btn-area">
        <div class="col-left">
          <button @click="togglePlayState" class="video-controller__btn">
            <i class="icon">
              <icon-base :icon-name="isPlaying ? '일시중지' : '재생'">
                <icon-pause v-if="isPlaying" />
                <icon-play v-else />
              </icon-base>
            </i>
          </button>
          <router-link
            v-if="nextEpisode"
            :to="nextEpisode"
            class="video-controller__btn"
            replace
          >
            <i class="icon">
              <icon-base>
                <icon-next-episode />
              </icon-base>
            </i>
          </router-link>
        </div>
        <div class="col-right">
          <button
            @click="enablePIP"
            v-if="isPIPAvailable"
            class="video-controller__btn"
          >
            <i class="icon">
              <icon-base>
                <icon-pip />
              </icon-base>
            </i>
          </button>
          <button @click="toggleFullScreen" class="video-controller__btn">
            <i class="icon">
              <icon-base>
                <icon-full-screen-off v-if="isFullScreen" />
                <icon-full-screen-on v-else />
              </icon-base>
            </i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconPause from "./icons/IconPause.vue";
import IconNextEpisode from "./icons/IconNextEpisode.vue";
import IconFullScreenOff from "./icons/IconFullScreenOff.vue";
import IconFullScreenOn from "./icons/IconFullScreenOn.vue";
import IconPip from "./icons/IconPIP.vue";

export default {
  name: "VideoController",
  components: {
    IconBase,
    IconArrowPrev,
    IconPlay,
    IconPause,
    IconNextEpisode,
    IconFullScreenOff,
    IconFullScreenOn,
    IconPip,
    IconOverflow,
  },
  props: {
    isFullScreen: {
      type: Boolean,
    },
    isPlaying: {
      type: Boolean,
    },
    current: {
      type: String,
    },
    progress: {
      type: String,
    },
  },
  mounted() {
    this.isPIPAvailable = document.pictureInPictureEnabled;
  },
  data() {
    return {
      isPIPAvailable: false,
    };
  },
  methods: {
    togglePlayState() {
      this.$emit("play-state-change");
    },
    toggleFullScreen() {
      this.$emit("fullscreen-state-change");
    },
    openPlayerSetting() {
      this.$emit("open-player-setting");
    },
    enablePIP() {
      this.$emit("pip-state-change");
    },
    progressChange(e) {
      const clickedPos =
        (e.layerX - e.currentTarget.getBoundingClientRect().x) /
        e.currentTarget.getBoundingClientRect().width;
      this.$emit("progressChange", clickedPos);
    },
    exitPlayer() {
      this.$emit("exit-player");
    },
  },
  computed: {
    ...mapState({
      currentAnime: (state) => state.currentAnimeInfo.currentAnimeInfo,
    }),
    nextEpisode() {
      if (!this.currentAnime) {
        return "";
      } else {
        const partMax = this.currentAnime.map((item) => item.episodes.length);
        const title = this.$route.params.title;
        let part = Number(this.$route.params.part.slice(0, 1));
        let index = Number(this.$route.params.index.slice(0, -1));
        if (index < partMax[part - 1]) {
          index++;
          return `/player/${title}/${part}기/${index}화`;
        } else if (partMax[part]) {
          index = 1;
          return `/player/${title}/${++part}기/${index}화`;
        } else {
          return "";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.video-controller {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--player-gradient);
  .row-top {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 0;
    }
  }
  .btn-area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .col-left,
    .col-right {
      display: flex;
    }
  }
  .icon {
    display: flex;
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }
  .video-progress {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    &__timer {
      color: #fff;
      font-size: 1.2rem;
    }
    &__track {
      flex: 1;
      width: 100%;
      height: 0.5rem;
      background-color: var(--bg-200);
      border-radius: 9999px;
      margin: 0 1rem;
    }
    &__body {
      background-color: var(--theme-500);
      height: 100%;
      border-radius: 9999px;
      transition: width 100ms linear;
    }
  }
  &__btn {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
