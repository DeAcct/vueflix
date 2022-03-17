<template>
  <div class="player">
    <video
      :src="videoSrc"
      autoplay
      playsinline
      crossorigin="anonymous"
      :muted="isMuted"
      ref="video"
      @mousemove="toggleVideoController"
      @loadeddata="loaded"
      @timeupdate="setTime"
      @ended="videoEnd"
      class="player__video"
    ></video>

    <loading-spinner :is-loading="isLoading" />
    <video-controller
      @fullscreen-state-change="toggleFullScreen"
      @play-state-change="togglePlayState"
      @pip-state-change="PIPon"
      @muted-state-change="mutedChange"
      @progress-change="progressChange"
      @open-player-setting="openPlayerSetting"
      @request-screenshot="screenshot"
      @open-mini-episode-list="openMiniEpisodeList"
      @exit-player="exitPlayer"
      :episode-title="episodeCurrentTitle"
      :is-full-screen="isFullScreen"
      :is-playing="isPlaying"
      :is-muted="isMuted"
      :progress="videoProgress"
      :duration="videoDuration"
      :current="videoCurrent"
      :class="[
        { 'video-controller--show': isControllerShown },
        { 'video-controller--blur': isEnd },
      ]"
      :is-end="isEnd"
      :next-link="nextLink"
    >
      <template v-slot:video-current>{{ videoCurrent }}</template>
      <template v-slot:video-duration>{{ videoDuration }}</template>
    </video-controller>
    <player-setting
      :class="{ 'player-setting--open': isSettingShown }"
      @close-player-setting="closePlayerSetting"
      @speed-change="speedChange"
      @resolution-change="resolutionChange"
      @autoskip-change="autoskipChange"
      @autoplay-change="autoplayChange"
      :video-speed="videoSpeed * 2 - 1"
      :video-resolution="videoResolution"
      :video-autoskip="videoAutoskip"
      :video-autoplay="videoAutoplay"
    />
    <mini-episode-list
      :class="{ 'mini-episode-list--open': isMiniEpisodeListShown }"
      :episode-data="currentAnime"
      @close-emit="closeMiniEpisodeList"
    />
    <next-episode-card
      :class="[{ 'next-episode-card--show': isEnd }]"
      :next-info="nextEpisodeInfo"
      :next-link="nextLink"
      v-if="nextEpisodeInfo"
    />
  </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { mapState } from "vuex";

import VideoController from "../components/VideoController.vue";
import PlayerSetting from "../components/PlayerSetting.vue";
import MiniEpisodeList from "../components/MiniEpisodeList.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import NextEpisodeCard from "../components/NextEpisodeCard.vue";

export default {
  name: "VueflixPlayer",
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
    MiniEpisodeList,
    LoadingSpinner,
    NextEpisodeCard,
  },
  async mounted() {
    if (!this.currentAnime) {
      this.$router.replace(`/anime/${this.$route.params.title}`);
    }
    await this.videoInit();
    this.toggleVideoController();
    this.isPlaying = true;

    window.addEventListener("keydown", this.keyTrigger);

    if (this.$refs.video && this.auth) {
      this.$refs.video.addEventListener("leavepictureinpicture", this.PIPoff);
      this.$refs.video.addEventListener("loadeddata", async () => {
        const target = this.auth.recentWatched.find(
          (anime) =>
            anime.aniTitle === this.$route.params.title &&
            anime.part === this.partNow &&
            anime.index === this.indexNow
        );
        if (target && this.$refs.video) {
          const unitChanged = Number(target.watchedPercent.slice(0, -1)) / 100;
          this.videoProgress = target.watchedPercent;
          this.$refs.video.currentTime =
            unitChanged !== 1 ? this.$refs.video.duration * unitChanged : 0;
        }
        await this.savePoint();
      });
      this.$refs.video.playbackRate = this.videoSpeed;
    }
    document.addEventListener("fullscreenchange", this.updateFullScreen);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyTrigger);
    document.removeEventListener("fullscreenchange", this.updateFullScreen);
  },

  data() {
    return {
      isFullScreen: false,
      isLoading: false,
      isPlaying: false,
      isMuted: true,
      isEnd: false,
      isControllerShown: false,
      isSettingShown: false,
      isMiniEpisodeListShown: false,
      videoSrc: "",
      controllerTimer: undefined,
      videoProgress: "0%",
      videoCurrent: "00:00",
      videoDuration: "00:00",
      videoSpeed: 1,
      videoResolution: "1080p",
      videoAutoskip: false,
      videoAutoplay: false,
      $canvas: undefined,
      $anchor: undefined,
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
        /*
         * this.$refs.video.duration * (어디까지 봤는지 %) 계산해서 반영하기,
         * (어디까지 봤는지 %) 없으면 놔두기
         */
      } catch {
        this.$router.replace("/notfound");
      }
    },
    screenshot() {
      if (!this.$canvas) {
        this.$canvas = document.createElement("canvas");
      }
      if (!this.$anchor) {
        this.$anchor = document.createElement("a");
      }
      this.$canvas.width = 1920;
      this.$canvas.height = 1080;
      const ctx = this.$canvas.getContext("2d");
      ctx.drawImage(
        this.$refs.video,
        0,
        0,
        this.$canvas.width,
        this.$canvas.height
      );
      const img = this.$canvas.toDataURL("image/png");
      this.$anchor.href = img;
      this.$anchor.download = `${this.$route.params.title} ${this.$route.params.part} ${this.$route.params.index} 스크린샷`;
      this.$anchor.click();
    },
    async savePoint() {
      this.$store.commit("auth/updateRecentWatched", this.nowEpisodeInfo);
      const db = getFirestore();
      await setDoc(doc(db, "user", this.auth.uid), {
        ...this.auth,
      });
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
    },
    updateFullScreen() {
      this.isFullScreen = !!document.fullscreenElement;
    },
    async keyTrigger(e) {
      if (e.code === "Space") {
        e.preventDefault();
        this.togglePlayState();
      }
    },
    async togglePlayState() {
      this.isEnd = false;
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
      if (!this.isEnd) {
        this.controllerTimer = setTimeout(() => {
          this.isControllerShown = false;
        }, 3000);
      }
    },
    speedChange(e) {
      this.$refs.video.playbackRate = e * 0.5;
      this.videoSpeed = e * 0.5;
    },
    resolutionChange(e) {
      this.videoResolution = e;
    },
    autoskipChange(e) {
      this.videoAutoskip = e;
    },
    autoplayChange(e) {
      this.videoAutoplay = e;
    },
    async PIPon() {
      await this.$refs.video.requestPictureInPicture();
    },
    PIPoff() {
      this.$refs.video.pause();
      this.isPlaying = false;
    },
    mutedChange() {
      this.isMuted = !this.isMuted;
    },
    progressChange(e) {
      this.isEnd = false;
      this.$refs.video.currentTime = this.$refs.video.duration * e;
    },
    videoEnd() {
      this.isEnd = true;
      clearTimeout(this.controllerTimer);
      this.controllerTimer = undefined;
      this.isControllerShown = true;
    },
    openPlayerSetting() {
      this.$refs.video.pause();
      this.isPlaying = false;
      this.closeMiniEpisodeList();
      this.isSettingShown = true;
    },
    closePlayerSetting() {
      if (!this.isEnd) {
        this.$refs.video.play();
        this.isPlaying = true;
      }
      this.isSettingShown = false;
    },
    openMiniEpisodeList() {
      this.$refs.video.pause();
      this.isPlaying = false;
      this.closePlayerSetting();
      this.isMiniEpisodeListShown = true;
    },
    closeMiniEpisodeList() {
      if (!this.isEnd) {
        this.$refs.video.play();
        this.isPlaying = true;
      }
      this.isMiniEpisodeListShown = false;
    },
    async exitPlayer() {
      if (this.isFullScreen) {
        await document.exitFullscreen();
      }
      await this.savePoint();
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

        this.videoCurrent =
          this.formatter(nowMin, 10) + ":" + this.formatter(nowSec, 10);
        //prettier 버그로 인해 개행문자가 섞이는 문제가 있음
        this.videoDuration = duration
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
      auth: (state) => state.auth.user,
    }),
    partNow() {
      return Number(this.$route.params.part.slice(0, -1));
    },
    indexNow() {
      return Number(this.$route.params.index.slice(0, -1));
    },
    episodeCurrentTitle() {
      return this.currentAnime
        ? this.currentAnime[this.partNow - 1].episodes[this.indexNow - 1].title
        : undefined;
    },
    partMax() {
      return this.currentAnime
        ? this.currentAnime.map((part) => part.episodes.length)
        : undefined;
    },
    nextLink() {
      if (!this.currentAnime) {
        return "";
      } else {
        const aniTitle = this.$route.params.title;
        let part = this.partNow;
        let index = this.indexNow;
        if (index < this.partMax[part - 1]) {
          index++;
          return `/player/${aniTitle}/${part}기/${index}화`;
        } else if (this.partMax[part]) {
          index = 1;
          return `/player/${aniTitle}/${++part}기/${index}화`;
        } else {
          return "";
        }
      }
    },
    nowEpisodeInfo() {
      const aniTitle = this.$route.params.title;
      let part = this.partNow;
      let index = this.indexNow;
      const continueLink =
        this.videoProgress === "100%"
          ? this.nextLink
          : `/player/${this.$route.params.title}/${this.$route.params.part}/${this.$route.params.index}`;
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();
      return {
        aniTitle: aniTitle,
        part: this.partNow,
        index: this.indexNow,
        watchedPoint: {
          year: year,
          month: month,
          date: date,
          hour: hour,
          min: min,
          sec: sec,
        },
        continueLink: continueLink,
        episodeTitle: this.currentAnime[part - 1].episodes[index - 1].title,
        episodeThumbnail:
          this.currentAnime[part - 1].episodes[index - 1].thumbnail,
        watchedPercent: this.videoProgress,
      };
    },
    nextEpisodeInfo() {
      if (!this.currentAnime) {
        return undefined;
      } else {
        let part = this.partNow;
        let index = this.indexNow;
        if (index < this.partMax[part - 1]) {
          index++;
          return {
            part: part,
            index: index,
            title: this.currentAnime[part - 1].episodes[index - 1].title,
            thumbnail:
              this.currentAnime[part - 1].episodes[index - 1].thumbnail,
          };
        } else if (this.partMax[part]) {
          index = 0;
          return {
            part: part + 1,
            index: index + 1,
            title: this.currentAnime[part].episodes[index].title,
            thumbnail: this.currentAnime[part].episodes[index].thumbnail,
          };
        } else {
          return "";
        }
      }
    },
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
  &__video {
    width: 100%;
    height: 100%;
  }
  .loader {
    width: 6.4rem;
    height: 6.4rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-90deg);
    color: #fff;
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
    &--blur {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
    }
  }

  .player-setting {
    position: fixed;
    right: -75%;
    transition: 300ms ease-out;
    &--open {
      opacity: 1;
      right: 0;
    }
  }
  .mini-episode-list {
    position: fixed;
    right: -100%;
    transition: 300ms ease-out;
    &--open {
      opacity: 1;
      right: 0;
    }
  }

  .next-episode-card {
    position: fixed;
    right: 0;
    bottom: 2rem;
    opacity: 0;
    visibility: hidden;
    &--show {
      opacity: 1;
      visibility: visible;
    }
  }
}

@media (orientation: landscape) {
  .player-setting {
    right: -25%;
  }
  .mini-episode-list {
    right: -50%;
  }
}

@media screen and (min-width: 768px) and (orientation: portrait) {
  .player {
    .mini-episode-list,
    .player-setting {
      width: 50rem;
      height: 70rem;
      &--open {
        right: var(--inner-padding);
      }
    }
  }
}

@media (orientation: portrait) {
  .player .next-episode-card {
    bottom: 6rem;
  }
}
</style>
