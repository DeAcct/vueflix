<template>
  <li class="item">
    <figure>
      <div class="thumbnail">
        <img :src="img" :alt="`${title} 썸네일`" class="thumbnail-img" />
        <button class="thumbnail-play-btn"></button>
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
      </div>
      <div class="description">
        <figcaption class="description-text">
          <span class="title">{{ title }}</span>
          <strong class="episode" v-if="!isMovie">{{ episode }}</strong>
        </figcaption>
        <a :href="url" class="description-info-btn"></a>
      </div>
    </figure>
  </li>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    title: {
      type: String,
    },
    episode: {
      type: String,
    },
    img: {
      type: String,
    },
    url: {
      type: String,
    },
    isMovie: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 48.5vw;
  margin-right: 1.5rem;
  figure {
    display: flex;
    flex-direction: column;
  }
  .thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: #ddd;
    .thumbnail-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    .thumbnail-play-btn {
      display: flex;
      align-self: flex-start;
      width: 3rem;
      height: 3rem;
      margin-top: 1rem;
      margin-left: calc(47.5vw * 0.08);
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .progress-bar {
      width: 85%;
      height: 0.6rem;
      border-radius: 0.3rem;
      background-color: #aaa;
      margin-bottom: 1rem;
    }
  }
  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    .description-info-btn {
      display: block;
      width: 2rem;
      height: 2rem;
      background-color: #ddd;
      margin-right: 0.5rem;
    }
    .description-text {
      font-size: 1.3rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 0.4rem;
    }
  }
}
@media all and (min-width: 769px) {
  .item {
    width: 32rem;
    margin-right: 1.333rem;
  }
}
</style>
