<template>
  <router-link
    :to="name ? `/anime/${name}/episodes` : '#'"
    class="slide-content"
  >
    <div
      :class="[
        'slide-content__bg-holder',
        { 'slide-content__bg-holder--loaded': loaded.bg },
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
          loading="lazy"
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
            { 'slide-content__ani-logo--loaded': loaded.bg },
          ]"
          @load="logoComplete"
          loading="lazy"
        />
      </h3>
      <strong class="slide-content__copy">{{ slideData.copy }}</strong>
    </div>
  </router-link>
</template>

<script setup>
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref as fireRef, getStorage } from "firebase/storage";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  animeId: {
    type: Number,
  },
});

const slideData = ref({});

onMounted(async () => {
  const q = query(
    collection(getFirestore(), "anime"),
    where("idNumber", "==", props.animeId)
  );
  const {
    name,
    slideCopy: copy,
    shortName,
  } = (await getDocs(q)).docs[0].data();

  const storage = getStorage();
  const EXTENSIONS = {
    pcJpgBg: "_banner.jpg",
    pcWebpBg: "_banner.webp",
    mJpgBg: "_banner_m.jpg",
    mWebpBg: "_banner_m.webp",
    logo: ".png",
  };
  const href = `${name}/${shortName}`;
  const tasks = await Promise.all(
    Object.values(EXTENSIONS).map((extension) => {
      return getDownloadURL(fireRef(storage, `${href}${extension}`));
    })
  );
  const urls = tasks.reduce(
    (acc, url, i) => ({ ...acc, [Object.keys(EXTENSIONS)[i]]: url }),
    {}
  );
  slideData.value = {
    ...urls,
    copy,
    name,
  };
});

const loaded = reactive({
  logo: false,
  bg: false,
});
function logoComplete() {
  loaded.logo = true;
}
function bgComplete() {
  loaded.bg = true;
}
</script>

<style lang="scss" scoped>
.slide-content {
  &__bg-holder {
    display: flex;
    position: relative;
    max-height: 70vh;
    width: 100vw;
    padding-bottom: 133.333%;
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
