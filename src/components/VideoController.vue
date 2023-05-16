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
          <div class="row-top">
            <h1 class="episode-info__title">
              {{ $route.params.title }}
            </h1>
            <p class="episode-info__part-index">
              {{ $route.params.part }} {{ $route.params.index }}
            </p>
          </div>
          <p class="episode-info__episode-title">
            {{ episodeTitle }}
          </p>
        </div>
      </div>
      <div class="col-right">
        <button @click="openMiniEpisodeList" class="video-controller__btn">
          <i class="icon">
            <icon-base icon-name="에피소드 목록">
              <icon-episode-list />
            </icon-base>
          </i>
        </button>
        <button @click="openPlayerSetting" class="video-controller__btn">
          <i class="icon">
            <icon-base icon-name="플레이어 설정">
              <icon-overflow />
            </icon-base>
          </i>
        </button>
      </div>
    </div>
    <div class="row-bottom" v-if="!isEnd">
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
            v-if="nextLink"
            :to="nextLink"
            class="video-controller__btn"
            replace
          >
            <i class="icon">
              <icon-base icon-name="다음 에피소드로">
                <icon-next-episode />
              </icon-base>
            </i>
          </router-link>
          <button @click="toggleMuted" class="video-controller__btn">
            <i class="icon">
              <icon-base :icon-name="isMuted ? '소리 끄기' : '소리 켜기'">
                <icon-mute-off v-if="isMuted" />
                <icon-mute-on v-else />
              </icon-base>
            </i>
          </button>
        </div>
        <div class="col-right">
          <button @click="takeScreenshot" class="video-controller__btn">
            <i class="icon">
              <icon-base icon-name="스크린샷 찍고 저장하기">
                <icon-screenshot />
              </icon-base>
            </i>
          </button>
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
import IconMuteOff from "./icons/IconMuteOff.vue";
import IconMuteOn from "./icons/IconMuteOn.vue";
import IconScreenshot from "./icons/IconScreenshot.vue";

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
    IconMuteOff,
    IconMuteOn,
    IconScreenshot,
  },
  props: {
    isFullScreen: {
      type: Boolean,
    },
    isPlaying: {
      type: Boolean,
    },
    isMuted: {
      type: Boolean,
    },
    isEnd: {
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
    nextLink: {
      type: String,
    },
    episodeTitle: {
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
    toggleMuted() {
      this.$emit("muted-state-change");
    },
    openPlayerSetting() {
      this.$emit("open-player-setting");
    },
    takeScreenshot() {
      this.$emit("request-screenshot");
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
      background-color: hsl(var(--theme-500));
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
    flex-direction: column;
    margin-left: 1rem;
    .row-top {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: {
        top: 0;
        bottom: 0.7rem;
      }
    }
    &__title {
      color: #fff;
      font-size: 1.5rem;
      max-width: 40vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 0.5rem;
    }
    &__part-index {
      font-size: 1.3rem;
      color: #fff;
    }
    &__episode-title {
      color: #fff;
      font-size: 1.3rem;
      max-width: 50vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

@media screen and (min-width: 375px) {
  .video-controller .episode-info {
    visibility: visible; //폴더블 대응
  }
}

@media (orientation: landscape) {
  .video-controller .episode-info {
    &__title {
      max-width: 60vw;
    }
    &__episode-title {
      max-width: 70vw;
    }
  }
}
</style>
