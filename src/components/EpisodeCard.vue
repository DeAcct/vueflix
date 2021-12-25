<template>
  <li class="episode-card">
    <a href="#none" class="episode-item inner">
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
          <icon-base></icon-base>
        </div>
      </figure>
    </a>
  </li>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.episode-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .episode-item {
    display: block;

    figure {
      display: flex;
      justify-content: space-between;
      .col-left {
        display: flex;
      }
      .thumbnail {
        width: 12rem;
        height: 6.75rem;
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
</style>
