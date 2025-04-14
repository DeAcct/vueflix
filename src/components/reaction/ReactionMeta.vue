<template>
  <div class="ReactionMeta">
    <div class="ReactionMeta__ProfileImgWrap">
      <OptimizedMedia
        :src="data.profileImg.name"
        class="ReactionMeta__ProfileImg"
        v-if="data?.profileImg"
        skelleton
      />
      <img :src="Aqua" class="ReactionMeta__ErrorProfile" v-else />
    </div>
    <div class="ReactionMeta__Text">
      <strong class="ReactionMeta__Author">
        {{ self ? "나" : data?.nickname || "탈퇴한 사용자" }}
      </strong>
      <p class="ReactionMeta__Edited">
        <slot name="time"></slot>
        <slot name="edited"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import Aqua from "@/assets/aqua.svg";

import OptimizedMedia from "@/components/OptimizedMedia.vue";

const props = defineProps({
  self: {
    type: Boolean,
  },
  data: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.ReactionMeta {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.6rem;
  &__ProfileImgWrap {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    margin-right: 1.2rem;
    border-radius: 50%;
    overflow: hidden;
  }
  &__Text {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__ProfileImg {
    width: 100%;
    --aspect-ratio: 100%;
    --radius: 50%;
  }
  &__Author {
    font-size: 1.6rem;
    margin-right: 0.6rem;
  }
  &__Edited {
    font-size: 1.2rem;
    font-weight: 300;
  }
}

@media screen and (min-width: 1080px) {
  .ReactionMeta {
    &__Text {
      gap: 0.6rem;
    }
    &__Author {
      font-size: 1.6rem;
      margin-right: 0.8rem;
    }
    &__Date {
      font-size: 1.3rem;
    }
  }
}
</style>
