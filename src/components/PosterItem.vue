<template>
  <li class="poster-item">
    <figure>
      <div class="img">
        <div class="icons">
          <i class="adult-icon icon" v-if="isAdult">19</i>
          <i class="play-icon icon">
            <icon-base>
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
import IconBase from "./IconBase.vue";
import IconPlay from "./icons/IconPlay.vue";
export default {
  name: "PosterItem",
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
  figure {
    display: flex;
    flex-direction: column;
    .img {
      display: flex;
      align-items: flex-start;
      width: 100%;
      height: calc((100vw - 6rem) / 3 * 1.3);
      border-radius: 0.3rem;
      margin-bottom: 0.5rem;
      box-shadow: var(--box-shadow);
      .icons {
        width: 100%;
        position: relative;
        .icon {
          position: absolute;
          top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
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
    figure {
      .img {
        height: calc((100vw - 13rem) / 4 * 1.3);
      }
      .title {
        font-size: 1.3rem;
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .poster-item {
    figure .img {
      height: calc((100vw - 52rem) / 3 * 1.3);
    }
  }
}
@media screen and (min-width: 1300px) {
  .poster-item {
    figure {
      .img {
        height: calc((100vw - 53rem) / 4 * 1.3);
      }
      .title {
        font-size: 1.5rem;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .poster-item {
    figure .img {
      height: calc((100vw - 54rem) / 5 * 1.3);
    }
  }
}
</style>
