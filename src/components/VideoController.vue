<template>
  <div class="video-controller inner">
    <div class="row-top">
      <div class="col-left">
        <button @click="exitPlayer" class="video-controller__btn" replace>
          <i class="icon">
            <icon-base icon-name="뒤로가기">
              <icon-arrow-prev />
            </icon-base>
          </i>
        </button>
        <div class="episode-info">
          <h1 class="episode-info__title">{{ $route.params.title }}</h1>
          <p class="episode-info__part-index">
            {{ $route.params.part }} {{ $route.params.index }}
          </p>
        </div>
      </div>
      <div class="col-right">
        <button @click="openPlayerSetting" class="video-controller__btn">
          <i class="icon">
            <icon-base icon-name="플레이어 설정">
              <icon-overflow />
            </icon-base>
          </i>
        </button>
      </div>
    </div>
    <div class="row-bottom">
      <div class="video-progress">
        <span class="video-progress__timer">
          <slot name="video-current"></slot>
        </span>

        <div
          role="progressbar"
          :aria-valuenow="current"
          aria-valuemin="00:00"
          :aria-valuemax="duration"
          :class="[
            'video-progress__track',
            { 'video-progress__track--expanded': isProgressExpanded },
          ]"
          @mousedown="progressMouseDown"
          @mousemove="progressMouseMove"
          @mouseup="progressMouseUp"
          @touchstart="progressTouchStart"
          @touchmove="progressTouchMove"
          @touchend="progressTouchEnd"
          @contextmenu.prevent
        >
          <div class="video-progress__body" :style="`width:${progress}`"></div>
          <div
            :class="[
              'video-progress__interact-tracker',
              { 'video-progress__interact-tracker--show': isProgressExpanded },
            ]"
            :style="`transform:translateX(${interactTrackerLeft}px)`"
          ></div>
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
              <icon-base icon-name="다음 에피소드로">
                <icon-next-episode />
              </icon-base>
            </i>
          </router-link>
          <button @click="openMiniEpisodeList" class="video-controller__btn">
            <i class="icon">
              <icon-base icon-name="에피소드 목록">
                <icon-episode-list />
              </icon-base>
            </i>
          </button>
        </div>
        <div class="col-right">
          <button
            @click="enablePIP"
            v-if="isPIPAvailable"
            class="video-controller__btn"
          >
            <i class="icon">
              <icon-base icon-name="작은 화면으로 보기(PIP)">
                <icon-pip />
              </icon-base>
            </i>
          </button>
          <button @click="toggleFullScreen" class="video-controller__btn">
            <i class="icon">
              <icon-base icon-name="전체화면">
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
import IconEpisodeList from "./icons/IconEpisodeList.vue";

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
    IconEpisodeList,
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
    duration: {
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
      isProgressExpanded: false,
      interactTrackerLeft: 0,
      isMouseDown: false,
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
    openMiniEpisodeList() {
      this.$emit("open-mini-episode-list");
    },
    enablePIP() {
      this.$emit("pip-state-change");
    },
    progressMouseDown(e) {
      this.isProgressExpanded = true;
      this.isMouseDown = true;
      this.interactTrackerLeft =
        e.clientX - e.currentTarget.getBoundingClientRect().x;
    },
    progressMouseMove(e) {
      if (
        this.isMouseDown &&
        this.interactTrackerLeft <
          e.currentTarget.getBoundingClientRect().width &&
        this.interactTrackerLeft >= 0
      ) {
        this.interactTrackerLeft =
          e.clientX - e.currentTarget.getBoundingClientRect().x;
      } else {
        return;
      }
    },
    progressMouseUp(e) {
      this.$emit(
        "progressChange",
        this.interactTrackerLeft / e.currentTarget.getBoundingClientRect().width
      );
      this.isProgressExpanded = false;
      this.isMouseDown = false;
    },
    progressTouchStart(e) {
      this.isProgressExpanded = true;
      this.interactTrackerLeft =
        e.touches[0].clientX - e.currentTarget.getBoundingClientRect().x;
    },
    progressTouchMove(e) {
      this.interactTrackerLeft =
        e.touches[0].clientX - e.currentTarget.getBoundingClientRect().x;
    },
    progressTouchEnd(e) {
      this.$emit(
        "progressChange",
        this.interactTrackerLeft / e.currentTarget.getBoundingClientRect().width
      );
      this.isProgressExpanded = false;
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
    .col-left,
    .col-right {
      display: flex;
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
    position: relative;
    display: flex;
    align-items: center;
    height: 2rem;
    margin-bottom: 1rem;
    &__timer {
      color: #fff;
      font-size: 1.5rem;
    }
    &__track {
      flex: 1;
      width: 100%;
      height: 0.5rem;
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(50px);
      border-radius: 9999px;
      margin: 0 2rem;
      transition: height 150ms ease-out;
      &--expanded,
      &:hover {
        height: 100%;
      }
    }
    &__body {
      background-color: var(--theme-500);
      height: 100%;
      border-radius: 9999px;
      transition: width 100ms linear;
    }
    &__interact-tracker {
      position: absolute;
      top: calc(50% - 0.8rem);
      left: -0.3rem;
      width: 0.6rem;
      height: 1.6rem;
      border-radius: 9999px;
      background-color: #fff;
      visibility: hidden;
      opacity: 0;
      transition: opacity 300ms ease-out, visibility 300ms ease-out;
      &--show {
        visibility: visible;
        opacity: 1;
      }
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
  .episode-info {
    visibility: hidden; //폴더블 대응
    display: flex;
    align-items: center;
    &__title {
      color: #fff;
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    &__part-index {
      font-size: 1.3rem;
      color: #fff;
    }
  }
}

@media screen and (min-width: 375px) {
  .video-controller .episode-info {
    visibility: visible; //폴더블 대응
  }
}
</style>
