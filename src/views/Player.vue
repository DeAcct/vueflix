<template>
  <div class="player">
    <video
      :src="videoSrc"
      autoplay
      ref="video"
      @mousemove="toggleVideoController"
      @loadeddata="loaded"
      @timeupdate="setTime"
      @ended="videoEnd"
    ></video>
    <svg
      viewBox="0 0 64 64"
      :class="['player__loader', { 'player__loader--show': isLoading }]"
    >
      <circle cx="32" cy="32" r="30"></circle>
    </svg>
    <video-controller
      @fullscreen-state-change="toggleFullScreen"
      @play-state-change="togglePlayState"
      @pip-state-change="PIPon"
      @progress-change="progressChange"
      @exit-player="exitPlayer"
      :is-full-screen="isFullScreen"
      :is-playing="isPlaying"
      :progress="videoProgress"
      :current="current"
      :class="{ 'video-controller--show': isControllerShown }"
    >
      <template v-slot:video-current>{{ current }}</template>
      <template v-slot:video-duration>{{ duration }}</template>
    </video-controller>
    <player-setting />
  </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { mapState } from "vuex";

import VideoController from "../components/VideoController.vue";
import PlayerSetting from "../components/PlayerSetting.vue";

export default {
  name: "Player",
  /*
   * 풀스크린을 자동으로 열도록 요청하고 싶었으나,
   * 보안 상의 이유로 인해 브라우저가 이를 막는다
   *
   * async mounted() {
   *   await document.documentElement.requestFullscreen();
   * },
   *
   */
  components: {
    VideoController,
    PlayerSetting,
  },
  async mounted() {
    if (!this.currentAnime) {
      alert("잘못된 접근이에요");
      this.$router.replace(`/anime/${this.$route.params.title}`);
    }
    await this.videoInit();
    this.toggleVideoController();
    this.isPlaying = true;
    window.addEventListener("keydown", this.spaceTrigger);
    this.$refs.video.addEventListener(
      "leavepictureinpicture",
      this.PIPoff,
      false
    );
  },
  unmounted() {
    window.removeEventListener("keydown", this.spaceTrigger);
  },

  data() {
    return {
      isFullScreen: false,
      isLoading: false,
      isPlaying: false,
      isEnd: false,
      isControllerShown: false,
      videoSrc: "",
      controllerTimer: undefined,
      videoProgress: "0%",
      current: "00:00",
      duration: "00:00",
    };
  },
  methods: {
    async videoInit() {
      const storage = getStorage();
      const videoRef = ref(storage, "testAnime.mp4");
      /*
       * 저작권 문제로 실제 애니 영상은 추가할 수 없음
       *
       * //원래 코드
       * const title = this.$route.params.title;
       * const part = this.$route.params.part;
       * const index = this.$route.params.index;
       * const videoRef = ref(storage, `${title}/${part}/${index}.mp4`)
       */
      this.isLoading = true;
      try {
        this.videoSrc = await getDownloadURL(videoRef);
      } catch {
        this.$router.replace("/notfound");
      }
    },
    loaded() {
      this.isLoading = false;
    },
    async toggleFullScreen() {
      if (this.isFullScreen) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
      this.isFullScreen = !this.isFullScreen;
    },
    spaceTrigger(e) {
      if (e.code === "Space") {
        e.preventDefault();
        this.togglePlayState();
      }
    },
    async togglePlayState() {
      if (this.isPlaying) {
        this.$refs.video.pause();
      } else {
        await this.$refs.video.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    toggleVideoController() {
      this.isControllerShown = true;
      if (this.controllerTimer) {
        this.controllerTimer = undefined;
      }
      this.controllerTimer = setTimeout(() => {
        this.isControllerShown = false;
      }, 3000);
    },
    async PIPon() {
      await this.$refs.video.requestPictureInPicture();
    },
    PIPoff() {
      this.$refs.video.pause();
      this.isPlaying = false;
    },
    progressChange(e) {
      this.$refs.video.currentTime = this.$refs.video.duration * e;
    },
    videoEnd() {
      this.isEnd = true;
    },
    async exitPlayer() {
      if (this.isFullScreen) {
        await document.exitFullscreen();
      }
      this.$router.replace(`/anime/${this.$route.params.title}`);
    },
    setTime() {
      if (this.$refs.video) {
        const duration = this.$refs.video.duration;
        const now = this.$refs.video.currentTime;
        const nowMin = Math.floor(now / 60);
        const nowSec = Math.floor(now - nowMin * 60);
        const durMin = Math.floor(duration / 60);
        const durSec = Math.floor(duration - durMin * 60);
        const progress = (now / duration) * 100;

        this.current = `
        ${this.formatter(nowMin, 10)}:${this.formatter(nowSec, 10)}
        `;
        this.duration = duration
          ? `${this.formatter(durMin, 10)}:${this.formatter(durSec, 10)}`
          : "00:00";
        this.videoProgress = duration ? `${progress}%` : "0%";
      }
    },
    formatter(origin, digits) {
      let result = `${origin}`;
      for (let i = digits; i >= 10; i /= 10) {
        if (origin < i) {
          result = `0${result}`;
        } else {
          return result;
        }
      }
      return result;
    },
  },
  computed: {
    ...mapState({
      currentAnime: (state) => state.currentAnimeInfo.currentAnimeInfo,
    }),
  },
};
</script>

<style lang="scss" scoped>
.player {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  background-color: #000;
  video {
    width: 100%;
    height: 100%;
  }
  &__loader {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-90deg);
    width: 6.4rem;
    height: 6.4rem;
    fill: transparent;
    stroke: #fff;
    stroke-linecap: round;
    stroke-width: 4px;
    visibility: hidden;
    circle {
      stroke-dashoffset: 200;
      stroke-dasharray: 200;
      animation: spinner-line 1500ms infinite, spinner-rotate 1500ms infinite;
      transform-origin: 3.2rem;
    }
    &--show {
      visibility: visible;
    }
  }

  .video-controller {
    position: fixed;
    top: 0;
    visibility: hidden;
    opacity: 0;
    transition: 150ms ease-out;
    &--show {
      opacity: 1;
      visibility: visible;
    }
  }

  .player-setting {
    position: fixed;
    right: 0;
  }
}
@keyframes spinner-line {
  0% {
    stroke-dashoffset: 200;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -200;
  }
}
@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
