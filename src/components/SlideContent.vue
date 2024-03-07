<template>
  <RouterLink
    :to="
      slideData.name
        ? {
            query: {
              modal: slideData.name,
              route: 'episodes',
            },
          }
        : '#'
    "
    class="SlideContent"
  >
    <div
      :class="[
        'SlideContent__BackgroundHolder',
        { 'SlideContent__BackgroundHolder--Loaded': loaded.bg },
      ]"
    >
      <picture>
        <source media="(max-width: 767px)" :srcset="slideData.mWebpBg" />
        <source media="(max-width: 767px)" :srcset="slideData.mJpegBg" />
        <source media="(min-width: 768px)" :srcset="slideData.pcWebpBg" />
        <img
          :src="slideData.pcJpegBg"
          :alt="`${slideData.name} 배너`"
          class="SlideContent__BackgroundImage"
          @load="bgComplete"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="SlideContent__Presentation">
      <h3>
        <img
          :src="slideData.logo"
          :alt="slideData.name"
          :class="[
            'SlideContent__AniLogo',
            { 'SlideContent__AniLogo--Loaded': loaded.bg },
          ]"
          @load="logoComplete"
          loading="lazy"
        />
      </h3>
      <strong class="SlideContent__Copy">{{ slideData.copy }}</strong>
    </div>
  </RouterLink>
</template>

<script setup>
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utility/firebase";
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
    collection(db, "anime"),
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
.SlideContent {
  max-height: 50vh;
  &__BackgroundHolder {
    display: flex;
    position: relative;

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

    &--Loaded {
      opacity: 1;
      &::before {
        opacity: 1;
      }
    }
  }
  &__BackgroundImage {
    width: 100vw;
    object-fit: cover;
  }
  &__Presentation {
    position: absolute;
    left: 2rem;
    bottom: 10%;
  }
  &__AniLogo {
    max-width: 70vw;
    max-height: 15em;
    margin-bottom: 2rem;
    opacity: 0;
    transition: 150ms ease-out;
    &--Loaded {
      opacity: 1;
    }
  }
  &__Copy {
    display: block;
    font-size: 1.5em;
    color: #fff;
    margin-bottom: 1.5rem;
  }
}

@media screen and (min-width: 768px) {
  .SlideContent {
    &__BackgroundHolder {
      padding: 0;
      height: calc(100vw / 2560 * 1043);
      &::after {
        height: 100%;
      }
    }
    &__Presentation {
      left: 5rem;
    }
    &__AniLogo {
      max-width: 40vw;
      max-height: 10em;
      margin-bottom: 3rem;
    }
    &__Copy {
      font-size: 2em;
    }
  }
}
@media screen and (min-width: 1080px) {
  .SlideContent {
    &__AniLogo {
      max-width: 30vw;
      max-height: 18em;
    }
  }
}
</style>
