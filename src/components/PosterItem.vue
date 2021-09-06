<template>
  <li class="poster-item">
    <figure>
      <div class="img">
        <div class="icons">
          <i class="adult-icon icon" v-if="isAdult">19</i>
          <i class="play-icon icon">
            <icon-base :width="10" :height="10">
              <icon-play></icon-play>
            </icon-base>
          </i>
        </div>
      </div>
      <figcaption class="title"><slot></slot></figcaption>
    </figure>
  </li>
</template>
<script>
import IconBase from './IconBase.vue';
import IconPlay from './icons/IconPlay.vue';
export default {
  name: 'PosterItem',
  components: {
    IconBase,
    IconPlay,
  },
  props: {
    isAdult: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.poster-item {
  width: calc((100% - 2rem) / 3);
  figure {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .img {
      display: flex;
      align-items: flex-start;
      background-color: #ddd;
      width: 100%;
      aspect-ratio: 1/1.3;
      border-radius: 0.3rem;
      .icons {
        width: 100%;
        position: relative;
        .icon {
          position: absolute;
          top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.5rem;
          height: 1.5rem;
          line-height: 1;
          color: #fff;
          border-radius: 0.15rem;
        }
        .adult-icon {
          left: 1rem;
          background-color: var(--theme-500);
          font-weight: 700;
        }
        .play-icon {
          right: 1rem;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .title {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }
}
@media screen and (min-width: 768px) {
  .poster-item {
    width: calc((100% - 3rem) / 4);
    figure .title {
      font-size: 1.3rem;
    }
  }
}
@media screen and (min-width: 769px) {
  .poster-item {
    width: calc((100% - 2rem) / 3);
  }
}
@media screen and (min-width: 1300px) {
  .poster-item {
    width: calc((100% - 3rem) / 4);
    figure .title {
      font-size: 1.5rem;
    }
  }
}
@media screen and (min-width: 1920px) {
  .poster-item {
    width: calc((100% - 4rem) / 5);
  }
}
</style>
