<template>
  <section
    :class="['slide', 'loading-target', { 'slide--loaded': slideImgLoaded }]"
  >
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper
      effect="fade"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="slideItem in slideList"
        :key="slideItem.anime"
        class="slide-item"
      >
        <router-link :to="`/anime/${slideItem.title}`">
          <div class="bg">
            <picture>
              <source
                media="(max-width: 1024px)"
                :srcset="slideItem.imgSet.mWebpURL"
              />
              <source
                media="(max-width: 1024px)"
                :srcset="slideItem.imgSet.mJpegURL"
              />
              <source
                media="(min-width: 1025px)"
                :srcset="slideItem.imgSet.pcWebpURL"
              />
              <img
                :src="slideItem.imgSet.pcJpegURL"
                :alt="`${slideItem.title} 배너`"
                class="bgPlace"
              />
            </picture>
          </div>
          <div class="slide-info">
            <h3>
              <img
                :src="slideItem.imgSet.aniLogo"
                :alt="slideItem.title"
                class="ani-logo"
              />
            </h3>
            <strong class="slide-copy">{{ slideItem.copy }}</strong>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import SwiperCore, {
  Autoplay,
  Pagination,
  A11y,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Autoplay, Pagination, A11y, Navigation, EffectFade]);
import "swiper/swiper-bundle.min.css";
import { mapState } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentImg: 0,
      slideList: [],
      slideImgLoaded: false,
    };
  },
  computed: {
    ...mapState({
      slides: (state) => state.anime.slides,
    }),
  },
  mounted() {
    this.slideItemInit();
  },
  methods: {
    async getRawData() {
      const db = getFirestore();
      const animeCollection = collection(db, "anime");
      try {
        const querySnapshot = await getDocs(animeCollection);
        return querySnapshot;
      } catch {
        console.error("통신문제");
      }
    },
    async slideItemInit() {
      const rawData = await this.getRawData();

      const getSlideURL = async (identifier) => {
        const storage = getStorage();

        const pcWebp = ref(storage, `slideImg/${identifier}_banner.webp`);
        const pcWebpURL = await getDownloadURL(pcWebp);

        const pcJpeg = ref(storage, `slideImg/${identifier}_banner.jpeg`);
        const pcJpegURL = await getDownloadURL(pcJpeg);

        const mobileWebp = ref(storage, `slideImg/${identifier}_banner_m.webp`);
        const mobileWebpURL = await getDownloadURL(mobileWebp);

        const mobileJpeg = ref(storage, `slideImg/${identifier}_banner_m.jpeg`);
        const mobileWebpJpeg = await getDownloadURL(mobileJpeg);

        const aniLogoRef = ref(storage, `slideImg/${identifier}.png`);
        const aniLogo = await getDownloadURL(aniLogoRef);

        return {
          pcWebpURL: pcWebpURL,
          pcJpegURL: pcJpegURL,
          mWebpURL: mobileWebpURL,
          mJpegURL: mobileWebpJpeg,
          aniLogo: aniLogo,
        };
      };

      let slideList = rawData.docs.map((doc) => ({
        title: doc.id,
        imgSet: doc.data().slideIdentifier,
        copy: doc.data().copy,
      }));

      const imgList = await Promise.all(
        slideList.map((doc) => {
          return getSlideURL(doc.imgSet);
        })
      );

      slideList = slideList.map((slide, index) => ({
        ...slide,
        imgSet: imgList[index],
      }));

      this.slideList = slideList;
      this.slideImgLoaded = true;
    },
  },
};
</script>

<style lang="scss">
.slide {
  min-height: 50vh;
  background-image: linear-gradient(90deg, var(--text-900), var(--text-800));
  transition: opacity 150ms ease-out;
  &--loaded {
    min-height: auto;
    background: transparent;
  }
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(255, 255, 255, 0.5);
    width: 0.6rem;
    height: 0.6rem;

    &-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.slide-item {
  position: relative;
  .bg {
    position: relative;
    height: fit-content;
    &::before {
      position: absolute;
      width: 100vw;
      height: 100%;
      top: 0;
      content: "";
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.15) 40%,
        rgba(0, 0, 0, 0.15) 60%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
    .bgPlace {
      width: 100vw;
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
    }
    .slide-copy {
      display: block;
      font-size: 1.5em;
      color: #fff;
      margin-bottom: 1.5rem;
    }
  }
}
@media screen and (min-width: 768px) {
  .swiper-container-horizontal
    .swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 1vw;
    height: 1vw;
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 0.6rem;
  }
  .slide-item {
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
    .bg {
      height: 70vh;
    }
  }
}
@media screen and (min-width: 769px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    transition: 150ms ease-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &::after {
      font-size: 3rem;
    }
  }
  .swiper-pagination {
    justify-content: flex-end;
    padding: 0 5rem 4rem;
  }
}

@media screen and (min-width: 1025px) {
  .slide-item .slide-info .ani-logo {
    max-width: 30vw;
    max-height: 18em;
  }
  .slide-item .bg {
    height: fit-content;
  }
}
</style>
