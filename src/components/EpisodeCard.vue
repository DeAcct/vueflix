<template>
  <li class="episode-card">
    <component
      :is="type"
      :to="type === 'router-link' ? (auth ? toValue : '#none') : undefined"
      class="episode-item"
      replace
      @click="loginRequire"
      :data-pointer="type === 'label'"
    >
      <input
        v-if="type === 'label'"
        class="blind select-skell"
        type="checkbox"
        v-model="checked"
      />
      <span class="wrap">
        <span class="col-left">
          <span class="thumbnail">
            <img
              :src="thumbnailURL"
              :alt="`${title} 썸네일`"
              :ref="`thumbnail-${index}`"
              loading="lazy"
              class="thumbnail__img"
            />
            <span v-if="isCurrent" class="thumbnail__now-playing">
              현재 재생 중
            </span>
            <i class="icon" v-else-if="type !== 'label'">
              <icon-base>
                <icon-play />
              </icon-base>
            </i>
          </span>
          <span class="episode-info">
            <span class="row-top">
              <span
                class="title"
                :style="`color:${excludeTheme ? textColor : undefined}`"
              >
                {{ index }}화 {{ title }}
              </span>
              <span
                class="date"
                :style="`color:${excludeTheme ? textColor : undefined}`"
                v-if="type !== 'label'"
              >
                {{ date }}
              </span>
            </span>
            <span class="row-bottom">
              <span class="price" v-if="type === 'label'">{{ price }}원</span>
              <span class="is-purchased" v-else-if="isPurchased">소장함</span>
            </span>
          </span>
        </span>
        <i class="col-right" v-if="download">
          <icon-base>
            <icon-download />
          </icon-base>
        </i>
        <i class="checked-state" v-else>
          <icon-base>
            <icon-wanna-see-added />
          </icon-base>
        </i>
      </span>
    </component>
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
import IconWannaSeeAdded from "./icons/IconWannaSeeAdded.vue";
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

    type: {
      type: String,
      default: "router-link",
    },
    inputChecked: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
  },
  components: {
    IconDownload,
    IconBase,
    IconPlay,
    IconWannaSeeAdded,
  },
  data() {
    return {
      thumbnailURL: "",
      checked: false,
    };
  },
  mounted() {
    this.useURL();
  },
  methods: {
    async useURL() {
      const storage = getStorage();
      const thumbnailRef = ref(
        storage,
        `${this.$route.params.title}/${this.thumbnail}`
      );
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
    isPurchased() {
      if (this.auth) {
        const target = this.auth.purchased.find(
          (anime) => anime.aniTitle === this.$route.params.title
        );
        if (target) {
          const result =
            target.episodes.findIndex(
              (episode) => episode.index === this.index
            ) !== -1;
          return result;
        }
      }
      return false;
    },
    ...mapState({
      auth: (state) => state.auth.user,
    }),
  },
  watch: {
    checked() {
      if (this.checked) {
        this.$emit("added", {
          title: this.title,
          part: this.part,
          index: this.index,
          thumbnail: this.thumbnail,
        });
      } else {
        this.$emit("deleted", { title: this.title, date: this.date });
      }
    },
    inputChecked() {
      this.checked = this.inputChecked;
    },
  },
};
</script>

<style lang="scss" scoped>
.episode-card {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .episode-item {
    width: 100%;
    .select-skell:checked + .wrap {
      .checked-state {
        background-color: var(--theme-500);
        svg {
          stroke-dashoffset: 0;
        }
      }
    }
    .wrap {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.3rem;
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
        text-align: left;
        max-width: 45vw;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row-top,
        .row-bottom {
          display: flex;
          flex-direction: column;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: flex;
          flex-direction: column;
          -webkit-line-clamp: 2;
        }
        .date {
          font-size: 1.1rem;
          font-weight: 500;
        }
        .price {
          font-size: 1.2rem;
          font-weight: 900;
        }
        .is-purchased {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--theme-500);
        }
      }
      .checked-state {
        transition: 150ms ease-out;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--bg-400);
        svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: transparent;
          stroke: #fff;
          stroke-width: 3px;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 25;
          stroke-dashoffset: 25;
        }
      }
    }
  }
  &:hover .episode-item .wrap .thumbnail .icon {
    opacity: 1;
    visibility: visible;
  }
}

@media screen and (min-width: 1080px) {
  .episode-card {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    .episode-item .wrap {
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
