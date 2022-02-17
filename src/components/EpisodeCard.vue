<template>
  <li class="episode-card">
    <router-link
      :to="auth ? toValue : '#none'"
      class="episode-item"
      replace
      @click="loginRequire"
    >
      <figure>
        <div class="col-left">
          <div class="thumbnail">
            <img
              :src="thumbnailURL"
              :alt="`${title} 썸네일`"
              :ref="`thumbnail-${index}`"
              loading="lazy"
              class="thumbnail__img"
            />
            <p v-if="isCurrent" class="thumbnail__now-playing">현재 재생 중</p>
            <i class="icon" v-else>
              <icon-base>
                <icon-play />
              </icon-base>
            </i>
          </div>
          <div class="episode-info">
            <figcaption
              class="title"
              :style="`color:${excludeTheme ? textColor : undefined}`"
            >
              {{ index }}화 {{ title }}
            </figcaption>
            <p
              class="date"
              :style="`color:${excludeTheme ? textColor : undefined}`"
            >
              {{ date }}
            </p>
          </div>
        </div>
        <div class="col-right" v-if="download">
          <icon-base>
            <icon-download />
          </icon-base>
        </div>
      </figure>
    </router-link>
  </li>
</template>

<script>
/*
 * [무슨 일이 일어나고 있나?]
 *
 * /anime/[애니제목](replace)
 * /player/[애니제목]/[몇기]/[몇화](replace)
 * /anime/[애니제목]
 * 마지막 히스토리의 관점에서 두 개의 이전 히스토리가 사라졌으니
   아예 anime 들어오기 전으로 빠져나갈 수 있는 것.
 */

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import IconDownload from "./icons/IconDownload.vue";
import IconBase from "../components/IconBase.vue";
import IconPlay from "./icons/IconPlay.vue";
import { mapState } from "vuex";
export default {
  name: "EpisodeCard",
  props: {
    thumbnail: {
      type: String,
    },
    title: {
      type: String,
    },
    index: {
      type: Number,
    },
    date: {
      type: String,
    },
    part: {
      type: String,
    },
    download: {
      type: Boolean,
    },
    excludeTheme: {
      type: Boolean,
    },
    textColor: {
      type: String,
    },
    accentCurrent: {
      type: Boolean,
    },
    isLoggedin: {
      type: Boolean,
    },
  },
  components: {
    IconDownload,
    IconBase,
    IconPlay,
  },
  data() {
    return {
      thumbnailURL: "",
    };
  },
  mounted() {
    this.useURL();
  },
  methods: {
    async useURL() {
      const storage = getStorage();
      const thumbnailRef = ref(storage, this.thumbnail);
      const URL = await getDownloadURL(thumbnailRef);
      this.thumbnailURL = URL;
    },
    loginRequire() {
      if (!this.auth) {
        this.$emit("login-require");
      }
    },
  },
  computed: {
    toValue() {
      return this.part === this.$route.params.part &&
        this.index === Number(this.$route.params.index.slice(0, -1))
        ? "#none"
        : `/player/${this.$route.params.title}/${this.part}/${this.index}화`;
    },
    isCurrent() {
      return (
        this.accentCurrent &&
        this.part === this.$route.params.part &&
        this.index === Number(this.$route.params.index.slice(0, -1))
      );
    },
    ...mapState({
      auth: (state) => state.auth.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
.episode-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .episode-item {
    display: flex;
    figure {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .col-left {
        display: flex;
      }
      .col-right {
        display: flex;
        align-items: center;
      }
      .thumbnail {
        position: relative;
        width: 12rem;
        height: calc(12rem / 16 * 9);
        border-radius: 0.2rem;
        overflow: hidden;
        &__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &__now-playing {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--thumbnail-current-bg);
          color: #fff;
          font-size: 1.3rem;
          font-weight: 500;
        }
        .icon {
          position: absolute;
          z-index: 7;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          background-color: var(--thumbnail-current-bg);
          width: 3.6rem;
          height: 3.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          opacity: 0;
          visibility: hidden;
          transition: 150ms ease-out;
        }
      }
      .episode-info {
        max-width: 60%;
        margin-left: 1rem;
        .title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .date {
          margin-top: 0.5rem;
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
    }
  }
  &:hover .episode-item figure .thumbnail .icon {
    opacity: 1;
    visibility: visible;
  }
}

@media screen and (min-width: 1080px) {
  .episode-card {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    .episode-item figure {
      .thumbnail {
        width: 16rem;
        height: calc(16rem / 16 * 9);
      }
      .episode-info {
        margin-left: 1.5rem;
        .title {
          font-size: 1.6rem;
        }
        .date {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
