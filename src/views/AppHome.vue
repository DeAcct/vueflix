<template>
  <div class="app-home">
    <main>
      <banner-slide />
      <div class="app-home__curated">
        <div class="app-home__curated-item" v-if="auth?.recentWatched">
          <h2 class="app-home__curated-title inner">최근 본 애니</h2>
          <vueflix-carousel
            :anime-list="auth?.recentWatched"
            progress
          ></vueflix-carousel>
        </div>
        <!--vueflix-carousel type="daily">요일별 신작</vueflix-carousel-->
        <div
          class="app-home__curated-item"
          v-for="recommended in recommendedAnime"
        >
          <h2 class="app-home__curated-title inner">
            {{ recommended.subject }}
          </h2>
          <vueflix-carousel :anime-list="recommended.list"></vueflix-carousel>
        </div>
      </div>
    </main>
    <vueflix-modal
      class="app-home__modal"
      type="yes-no"
      :yes-func="PWAinstall"
      :no-func="PWAdismiss"
      :class="{ 'app-home__modal--show': isModalOpened }"
      v-if="isModalOpened"
    >
      <template v-slot:title>뷰플릭스 앱 써보실래요?</template>
      <template v-slot:description>
        홈 화면에서 더 빠르게 만나볼 수 있어요
      </template>
      <template v-slot:no-string>나중에</template>
      <template v-slot:yes-string>설치</template>
    </vueflix-modal>
  </div>
</template>

<script>
import BannerSlide from "../components/BannerSlide.vue";
import VueflixModal from "../components/VueflixModal.vue";
import VueflixCarousel from "../components/VueflixCarousel.vue";
import Cookies from "js-cookie";
import { mapState } from "vuex";
import { getFirestore, getDocs, collection } from "firebase/firestore";
export default {
  name: "AppHome",
  components: {
    BannerSlide,
    VueflixModal,
    VueflixCarousel,
  },
  data() {
    return {
      isModalOpened: false,
      recommendedAnime: {},
    };
  },
  async mounted() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.isModalOpened = e;
      }
    });
    window.addEventListener("appinstalled", () => {
      this.isModalOpened = null;
    });
    await this.recommendInit();
  },
  methods: {
    async PWAdismiss() {
      Cookies.set("add-to-home-screen", null, { expires: 15 });
      this.isModalOpened = null;
    },
    async PWAinstall() {
      this.isModalOpened.prompt();
    },
    async recommendInit() {
      const db = getFirestore();
      const qSnapshot = await getDocs(collection(db, "recommend"));
      const data = qSnapshot.docs
        .map((doc) => doc.data())
        .map((lists) => ({
          ...lists,
          list: lists.list.sort((a, b) => {
            if (a.aniTitle < b.aniTitle) {
              return -1;
            } else if (a.aniTitle > b.aniTitle) {
              return 1;
            }
            return 0;
          }),
        }));
      this.recommendedAnime = data;
    },
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-home {
  &__curated {
    padding: 2.8rem 0 5.6rem;
    background-color: var(--bg-100);
  }
  &__curated-item {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  &__curated-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  &__modal {
    transition: 150ms ease-out;
    transform: translateY(100vh);
    bottom: 5.6rem;
    &--show {
      transform: translateY(0);
    }
  }
}
@media screen and (min-width: 768px) {
  .app-home {
    &__curated {
      padding-top: 3.6rem;
    }
    &__curated-title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    &__curated-item {
      &:not(:last-child) {
        margin-bottom: 4.5rem;
      }
    }
    &__modal {
      top: 0;
      bottom: auto;
      transform: none;
      transition: 150ms ease-out;
    }
  }
}
@media screen and (min-width: 1024px) {
  .app-home {
    &__curated-title {
      font-size: 3rem;
    }
  }
}
</style>
