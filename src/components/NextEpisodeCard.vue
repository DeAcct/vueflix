<template>
  <router-link class="next-episode-card" :to="nextLink">
    <span class="next-episode-card__thumbnail">
      <img :src="thumbnailSrc" alt="다음화 썸네일" />
    </span>
    <span class="col-right">
      <strong class="next-episode-card__next-title">
        {{ nextInfo.part }}기 {{ nextInfo.index }}화 {{ nextInfo.title }}
      </strong>
      <span class="next-episode-card__guide">
        다음 화로 이동하려면 누르세요
      </span>
    </span>
  </router-link>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  name: "NextEpisodeCard",
  props: {
    nextInfo: {
      type: Object,
    },
    nextLink: {
      type: String,
    },
  },
  data() {
    return {
      thumbnailSrc: "",
    };
  },
  async mounted() {
    await this.nextThumbnail();
  },
  methods: {
    async nextThumbnail() {
      if (this.nextInfo) {
        const storage = getStorage();
        const thumbnailRef = ref(
          storage,
          `${this.$route.params.title}/${this.nextInfo.thumbnail}`
        );
        this.thumbnailSrc = await getDownloadURL(thumbnailRef);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.next-episode-card {
  background-color: var(--player-aside-bg);
  display: flex;
  .col-right {
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }
  &__thumbnail {
    width: 16rem;
    height: 9rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__next-title {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.7rem;
  }
  &__guide {
    font-size: 1.3rem;
    color: #fff;
    text-align: left;
  }
}
</style>
