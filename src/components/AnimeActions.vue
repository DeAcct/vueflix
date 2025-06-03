<template>
  <div class="AnimeActions">
    <RouterLink class="AnimeActions__Continue" :to="link" replace>
      <WatchContinue :progress class="AnimeActions__ContinueIcon" />
      <span class="AnimeActions__ContinueText">{{ text }}</span>
    </RouterLink>
    <!-- <button
      class="AnimeActions__Button AnimeActions__Button--WannaSee"
      @click="toggleWannaSee()"
      :disabled="!user"
      type="button"
    >
      <WannaSeeMotion :ani-title="route.query.modal" />
      <span class="AnimeActions__ButtonText">보고싶다</span>
    </button> -->
    <WannaSeeButton
      :ani-title="route.query.modal"
      class="AnimeActions__Button AnimeActions__Button--WannaSee"
      :disabled="!user"
    >
      <template #text>보고싶다!</template>
    </WannaSeeButton>
    <button
      class="AnimeActions__Button AnimeActions__Button--Purchase"
      @click="purchase"
      :disabled="!user"
      type="button"
    >
      <PurchaseMotion />
      <span class="AnimeActions__ButtonText">소장하기</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";

import WatchContinue from "@/components/WatchContinue.vue";
import PurchaseMotion from "@/components/PurchaseMotion.vue";
import WannaSeeButton from "@/components/WannaSeeButton.vue";

const auth = useAuth();
const user = computed(() => auth.user);

const props = defineProps({
  // continueData: {
  //   type: Object,
  // },
  link: {
    type: String,
  },
  text: {
    type: String,
  },
  progress: {
    type: Object,
  },
});

const emits = defineEmits(["wanna-see-toggle", "purchase"]);

function purchase() {
  emits("purchase");
}

const route = useRoute();
</script>

<style lang="scss" scoped>
.AnimeActions {
  width: 100%;
  display: flex;
  align-items: center;
  transition: 150ms ease-out;

  &__Continue {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__ContinueIcon {
    width: 4.8rem;
    height: 4.8rem;
    background-color: hsl(var(--text-700));
    border-radius: 50%;
    color: #fff;
    --progress-circle-track-color: transparent;
    --progress-circle-body-color: #fff;
  }
  &__ContinueText {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--anime-layout-text);
  }
  &--BGLess {
    display: flex;
    flex-direction: column;
    height: 4rem;
    align-items: center;
  }

  &__Button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    --wanna-see-icon-color: var(--anime-layout-text);
    &--Purchase {
      margin-left: 1.2rem;
    }
    &--WannaSee {
      margin-left: auto;
    }
  }
  &__ButtonText {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--anime-layout-text);
  }
}

@media screen and (min-width: 1080px) {
  .AnimeActions {
    padding: 0;
    &__Continue .text {
      font-size: 1.6rem;
    }
  }
}
</style>
