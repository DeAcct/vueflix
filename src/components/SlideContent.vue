<template>
  <router-link
    :to="slideData.link ? slideData.link : '#'"
    class="slide-content"
  >
    <div
      :class="[
        'slide-content__bg-holder',
        { 'slide-content__bg-holder--loaded': bgLoaded },
      ]"
    >
      <picture>
        <source media="(max-width: 1024px)" :srcset="slideData.mWebpBg" />
        <source media="(max-width: 1024px)" :srcset="slideData.mJpegBg" />
        <source media="(min-width: 1025px)" :srcset="slideData.pcWebpBg" />
        <img
          :src="slideData.pcJpegBg"
          :alt="`${slideData.name} 배너`"
          class="slide-content__bg"
          @load="bgComplete"
        />
      </picture>
    </div>
    <div class="slide-content__info">
      <h3>
        <img
          :src="slideData.logo"
          :alt="slideData.name"
          :class="[
            'slide-content__ani-logo',
            { 'slide-content__ani-logo--loaded': bgLoaded },
          ]"
          @load="logoComplete"
        />
      </h3>
      <strong class="slide-content__copy">{{ slideData.copy }}</strong>
    </div>
  </router-link>
</template>

<script>
import { useFirebase } from "../mixins/useFirebase.js";

export default {
  props: {
    animeId: {
      type: Number,
    },
  },
  data() {
    return {
      slideData: {},
      logoLoaded: false,
      bgLoaded: false,
    };
  },
  mixins: [useFirebase],
  async mounted() {
    const {
      name,
      slideCopy: copy,
      shortName,
    } = await this.useQuery("anime", "idNumber", "==", this.animeId);

    const queryBase = `${name}/${shortName}_banner`;
    const pcJpgBg = await this.useMultimediaURL(`${queryBase}.jpg`);
    const pcWebpBg = await this.useMultimediaURL(`${queryBase}.webp`);
    const mJpgBg = await this.useMultimediaURL(`${queryBase}_m.jpg`);
    const mWebpBg = await this.useMultimediaURL(`${queryBase}_m.webp`);
    const logo = await this.useMultimediaURL(`${name}/${shortName}.png`);
    const link = `/anime/${name}`;
    this.slideData = {
      pcJpgBg,
      pcWebpBg,
      mJpgBg,
      mWebpBg,
      logo,
      link,
      copy,
      name,
    };
  },
  methods: {
    logoComplete() {
      this.logoLoaded = true;
    },
    bgComplete() {
      this.bgLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-content {
  &__bg-holder {
    display: flex;
    position: relative;
    max-height: 70vh;
    width: 100vw;
    opacity: 0;
    &::before {
      position: absolute;
      width: 100vw;
      padding-bottom: 133.333%;
      top: 0;
      content: "";
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.15) 40%,
        rgba(0, 0, 0, 0.15) 60%,
        rgba(0, 0, 0, 0.6) 100%
      );
      opacity: 0;
    }

    &--loaded {
      opacity: 1;
      &::before {
        opacity: 1;
      }
    }
  }
  &__bg {
    width: 100vw;
  }
  &__info {
    position: absolute;
    left: 2rem;
    bottom: 10%;
  }
  &__ani-logo {
    max-width: 70vw;
    max-height: 15em;
    margin-bottom: 2rem;
    opacity: 0;
    transition: 150ms ease-out;
    &--loaded {
      opacity: 1;
    }
  }
  &__copy {
    display: block;
    font-size: 1.5em;
    color: #fff;
    margin-bottom: 1.5rem;
  }
}

@media screen and (min-width: 768px) {
  .slide-content {
    &__info {
      left: 5rem;
    }
    &__ani-logo {
      max-width: 40vw;
      max-height: 10em;
      margin-bottom: 3rem;
    }
    &__copy {
      font-size: 2em;
    }
  }
}
@media screen and (min-width: 1025px) {
  .slide-content {
    &__ani-logo {
      max-width: 30vw;
      max-height: 18em;
    }
    &__bg-holder {
      height: calc(100vw / 2560 * 1043);
      &::before {
        padding-bottom: 40.742%;
      }
    }
  }
}
</style>
