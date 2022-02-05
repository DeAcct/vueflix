<template>
  <li class="episode-card">
    <router-link :to="toValue" class="episode-item inner" replace>
      <figure>
        <div class="col-left">
          <div class="thumbnail">
            <img
              :data-url="thumbnailURL"
              :alt="`${title} 썸네일`"
              v-intersection-lazy
              :ref="`thumbnail-${index}`"
            />
          </div>
          <div class="episode-info">
            <figcaption class="title">{{ index }}화 {{ title }}</figcaption>
            <p class="date">{{ date }}</p>
          </div>
        </div>
        <div class="col-right">
          <icon-base> </icon-base>
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
import IconBase from "../components/IconBase.vue";
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
  },
  components: {
    IconBase,
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
      const $img = this.$refs[`thumbnail-${this.index}`];
      if ($img.getBoundingClientRect().top <= window.innerHeight) {
        $img.src = URL;
      } else {
        this.thumbnailURL = URL;
      }
    },
  },
  computed: {
    toValue() {
      return `/player/${this.$route.params.id}/${this.part}/${this.index}화`;
    },
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
      display: flex;
      justify-content: space-between;
      .col-left {
        display: flex;
      }
      .thumbnail {
        width: 12rem;
        height: calc(12rem / 16 * 9);
        border-radius: 0.2rem;
        overflow: hidden;
        img {
          width: 100%;
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
          font-weight: 700;
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
