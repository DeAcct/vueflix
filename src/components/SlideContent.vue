<template>
  <router-link :to="slideData.link ? slideData.link : '#'">
    <span :class="['bg', { 'bg--loaded': bgLoaded }]">
      <picture>
        <source media="(max-width: 1024px)" :srcset="slideData.mWebpBg" />
        <source media="(max-width: 1024px)" :srcset="slideData.mJpegBg" />
        <source media="(min-width: 1025px)" :srcset="slideData.pcWebpBg" />
        <img
          :src="slideData.pcJpegBg"
          :alt="`${slideData.name} 배너`"
          class="bg-place"
          @load="bgComplete"
        />
      </picture>
    </span>
    <span class="slide-info">
      <h3>
        <img
          :src="slideData.logo"
          :alt="slideData.name"
          :class="['ani-logo', { 'ani-logo--loaded': bgLoaded }]"
          @load="logoComplete"
        />
      </h3>
      <strong class="slide-copy">{{ slideData.copy }}</strong>
    </span>
  </router-link>
</template>

<script>
import { getFirestore, collection, query, where } from "firebase/firestore";
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
    const data = await this.useQuery(
      "anime",
      "slideMeta.idNumber",
      "==",
      this.animeId
    );
    const name = data.name;
    const queryBase = `${name}/${data.slideMeta.shortName}_banner`;
    const pcJpgBg = await this.useMultimediaURL(`${queryBase}.jpg`);
    const pcWebpBg = await this.useMultimediaURL(`${queryBase}.webp`);
    const mJpgBg = await this.useMultimediaURL(`${queryBase}_m.jpg`);
    const mWebpBg = await this.useMultimediaURL(`${queryBase}_m.webp`);
    const logo = await this.useMultimediaURL(
      `${name}/${data.slideMeta.shortName}.png`
    );
    const link = `/anime/${name}`;
    const copy = data.slideMeta.copy;
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
.bg {
  display: flex;
  position: relative;
  max-height: 70vh;
  border-radius: 0;
  height: calc(100vw / 768 * 1024);
  opacity: 0;
  transition: opacity 150ms ease-out;
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
    transition: 150ms ease-out;
  }
  .bg-place {
    width: 100vw;
  }
  &--loaded {
    opacity: 1;
    &::before {
      opacity: 1;
    }
  }
}
.slide-info {
  position: absolute;
  left: 2rem;
  bottom: 10%;
  .ani-logo {
    max-width: 70vw;
    max-height: 15em;
    margin-bottom: 2rem;
    opacity: 0;
    transition: 150ms ease-out;
    &--loaded {
      opacity: 1;
    }
  }
  .slide-copy {
    display: block;
    font-size: 1.5em;
    color: #fff;
    margin-bottom: 1.5rem;
  }
}

@media screen and (min-width: 768px) {
  .slide-info {
    left: 5rem;
    .ani-logo {
      max-width: 40vw;
      max-height: 10em;
      margin-bottom: 3rem;
    }
    .slide-copy {
      font-size: 2em;
    }
  }
}
@media screen and (min-width: 1025px) {
  .slide-info .ani-logo {
    max-width: 30vw;
    max-height: 18em;
  }
  .bg {
    height: calc(100vw / 2560 * 1043);
    &::before {
      padding-bottom: 40.742%;
    }
  }
}
</style>
