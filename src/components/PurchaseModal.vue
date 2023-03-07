<template>
  <div class="purchase-modal">
    <button
      class="purchase-modal__shadow"
      title="닫기"
      @click="closePurchaseModal"
      ref="bg"
    ></button>
    <form class="interact-area" ref="actionArea">
      <div class="interact-area__heading">
        <h2 class="purchase-modal__title inner">
          <slot name="title"></slot>
        </h2>
        <p class="purchase-modal__description inner">
          <slot name="description"></slot>
        </p>
      </div>
      <div class="current-state inner">
        <strong class="current-state__selected">
          {{ added.length }}개 선택됨
        </strong>
        <div class="col-right">
          <button
            type="button"
            class="current-state__select-all"
            @click="selectAll"
          >
            전체 선택
          </button>
        </div>
      </div>
      <div class="interact-area__episodes">
        <template v-if="!notPurchased.isBlank">
          <episodes-widget
            v-for="(part, index) in notPurchased.all"
            :episodes-data="part"
            :key="index"
            type="label"
            :download="false"
            @added="addedTrigger"
            @deleted="deletedTrigger"
            :down-checked="downChecked"
            :price="animeInfo.price"
          />
        </template>
        <div v-else class="interact-area__fallback">
          <p>모든 에피소드를 소장했어요</p>
        </div>
      </div>
      <div class="purchase-modal__cta-area inner">
        <vueflix-btn
          type="button"
          component="button"
          class="btn--cancel"
          @click="closePurchaseModal"
        >
          <template #text>취소</template>
        </vueflix-btn>
        <vueflix-btn
          type="button"
          component="button"
          class="btn--purchase"
          :disabled="added.length === 0"
          @click="purchase"
        >
          <template #text>
            {{
              added.length !== 0
                ? `${(animeInfo.price * added.length).toLocaleString(
                    "ko-KR"
                  )}원에`
                : ""
            }}
            소장
          </template>
        </vueflix-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { doc, setDoc, getFirestore } from "firebase/firestore";

import EpisodesWidget from "./AccordionWidget.vue";
import VueflixBtn from "./VueflixBtn.vue";
import { modalAnimations } from "../mixins/modalAnimations";
import { mapState } from "vuex";

export default {
  name: "PurchaseModal",
  props: {
    animeInfo: {
      type: Object,
    },
  },
  components: {
    EpisodesWidget,
    VueflixBtn,
  },
  data() {
    return {
      added: [],
      downChecked: false,
    };
  },
  mounted() {
    this.ActionAreaAnimation.play();
    this.BgAnimation.play();
    document.documentElement.style.overflow = "hidden";
  },
  methods: {
    closePurchaseModal() {
      this.ActionAreaAnimation.reverse();
      this.BgAnimation.reverse();
      this.BgAnimation.onfinish = () => {
        document.documentElement.style.overflow = "visible";
        this.$emit("close-purchase-modal");
      };
    },
    addedTrigger(e) {
      this.added = [...this.added, e];
    },
    deletedTrigger(e) {
      this.added = this.added.filter(
        (item) => item.title !== e.title && item.date !== e.date
      );
    },
    selectAll() {
      if (!this.notPurchased.isBlank) {
        this.downChecked = !this.downChecked;
      }
    },
    async purchase() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();
      const thumbnail = this.animeInfo.posterOrigin;
      this.$store.commit("auth/updatePurchased", {
        aniTitle: this.$route.params.title,
        episodes: this.added,
        time: {
          year,
          month,
          date,
          hour,
          min,
          sec,
        },
        thumbnail,
      });

      const db = getFirestore();
      await setDoc(doc(db, "user", this.user.uid), {
        ...this.user,
      });
      this.closePurchaseModal();
    },
  },
  computed: {
    ActionAreaHeight() {
      return "80vh";
    },
    notPurchased() {
      let all = this.animeInfo.parts;
      let isBlank = true;
      const purchased = this.user.purchased.find(
        (purchaseItem) => purchaseItem.aniTitle === this.$route.params.title
      );
      if (purchased) {
        all = all.map((allPart) => ({
          ...allPart,
          episodes: allPart.episodes.filter((allEpisode) => {
            for (const purchaseItem of purchased.episodes) {
              if (purchaseItem.title === allEpisode.title) {
                return false;
              }
            }
            return true;
          }),
        }));
      }
      all.forEach((item) => {
        isBlank = item.episodes.length === 0 && isBlank;
      });
      return { all, isBlank };
    },
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  mixins: [modalAnimations],
};
</script>

<style lang="scss" scoped>
.purchase-modal {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  &__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .interact-area {
    position: absolute;
    width: 100%;
    max-width: 768px;
    height: 80vh;
    bottom: -80vh;
    background-color: var(--anime-bg);
    border-radius: 0.6rem 0.6rem 0 0;
    position: absolute;
    &__heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 8rem;
      background-color: var(--bg-300);
      border-radius: 0.6rem;
      margin-bottom: 1rem;
      padding: {
        top: 1.5rem;
        bottom: 1.5rem;
      }
    }
    .current-state {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      &__selected {
        font-size: 1.3rem;
      }
      &__select-all {
        color: var(--theme-500);
        font-weight: 500;
        font-size: 1.3rem;
      }
      .col-right {
        button:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
    &__episodes {
      height: calc(100% - 19rem);
      padding: 0;
      overflow: scroll;
      .episodes:not(:last-child) {
        margin-bottom: 1rem;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &__fallback {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 1.3rem;
        color: var(--text-800);
      }
    }
  }
  &__title {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  &__description {
    font-size: 1.3rem;
  }
  &__cta-area {
    position: relative;
    display: flex;
    align-items: center;
    height: 7.5rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -0.6rem;
      background-color: var(--episodes);
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
    }
    &::before {
      box-shadow: -0.3rem 0.3rem 0 var(--bg-200);
      left: 0;
    }
    &::after {
      box-shadow: 0.3rem 0.3rem 0 var(--bg-200);
      right: 0;
    }
    .btn {
      flex: 1;
      height: 5rem;
      &--cancel {
        background-color: var(--bg-500);
      }
      &--purchase {
        background-color: var(--theme-500);
        &:disabled {
          background-color: var(--theme-200);
          opacity: 1;
        }
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
@media screen and (min-width: 1080px) {
  .purchase-modal {
    .interact-area {
      bottom: auto;
      top: 50%;
      transform: translateY(-50%) !important;

      border-radius: 0.6rem;
    }
  }
}
</style>
