<template>
  <div class="SlideContent">
    <div
      :class="loaded.bg && 'SlideContent__BackgroundHolder--Loaded'"
      class="SlideContent__BackgroundHolder"
    >
      <picture>
        <source media="(max-width: 767px)" :srcset="slideData.mWebpBg" />
        <img
          :src="slideData.pcWebpBg"
          :alt="`${slideData.name} 배너`"
          class="SlideContent__Image"
          @load="bgComplete"
        />
      </picture>
      <RouterLink
        class="SlideContent__Shade"
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
      >
        <div class="SlideContent__Presentation">
          <img
            :src="slideData.logo"
            :alt="slideData.name"
            class="SlideContent__AniLogo"
            :class="loaded.bg && 'SlideContent__AniLogo--Loaded'"
            @load="logoComplete"
          />
          <strong class="SlideContent__Copy">{{ slideData.copy }}</strong>
        </div>
      </RouterLink>
    </div>
  </div>
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
    pcWebpBg: "_banner.webp",
    mWebpBg: "_banner_m.webp",
    logo: ".png",
  };
  const href = `/anime/${name}/${shortName}`;
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
  // position: relative;
  &__BackgroundHolder {
    position: relative;
    opacity: 0;
    transition: opacity 150ms ease-out;
    &--Loaded {
      opacity: 1;
    }
  }
  // &__RatioHold {
  //   display: flex;
  //   position: relative;
  //   width: 100vw;
  //   padding-bottom: 133.333%;
  //   &::after {
  //     position: absolute;
  //     z-index: 10;
  //     width: 100vw;
  //     top: 0;
  //     background: linear-gradient(
  //       180deg,
  //       rgba(0, 0, 0, 0.6) 0%,
  //       rgba(0, 0, 0, 0.15) 40%,
  //       rgba(0, 0, 0, 0.15) 60%,
  //       rgba(0, 0, 0, 0.6) 100%
  //     );
  //     content: "";
  //   }
  // }
  &__Image {
    width: 100vw;
    object-fit: cover;
  }
  &__Shade {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;

    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.15) 40%,
      rgba(0, 0, 0, 0.15) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  &__Presentation {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: var(--inner-padding);
    bottom: 6rem;
    gap: 3rem;
  }
  &__AniLogo {
    max-width: 70vw;
    max-height: 15em;
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
    &__Shade {
      gap: 3rem;
    }
    &__Presentation {
      left: 5rem;
      bottom: 8rem;
    }
    &__AniLogo {
      max-width: 40vw;
      max-height: 10em;
    }
    &__Copy {
      font-size: 2em;
    }
  }
}
@media screen and (min-width: 1080px) {
  .SlideContent {
    &__Shade {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
    }
    &__AniLogo {
      max-width: 30vw;
      max-height: 18em;
    }
  }
}
</style>
