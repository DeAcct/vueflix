<template>
  <main class="History">
    <ReactionCombo
      class="History__List"
      :query="{ uid: route.params.uid }"
      readonly
    >
      <template #title="{ counter }">
        <h2 class="History__Counter">
          반응<span class="AnimeReviews__Number">({{ counter }})</span>
        </h2>
      </template>
    </ReactionCombo>
  </main>
</template>

<script setup>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

import { getNickname } from "@/api/userMeta";

import ReactionCombo from "@/components/reaction/ReactionCombo.vue";

const route = useRoute();

watchEffect(
  async () => {
    route.meta.appBar.activityContent = await getNickname(route.params.uid);
    // reactions.value = await getReactions(route.params.uid);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.History {
  padding: var(--header-height) 0;

  &__List {
    width: min(100%, 1024px);
    margin: 0 auto;
  }
}

// transition
.history {
  &-fade {
    &-enter-active,
    &-leave-active {
      transition: all 150ms ease-out;
      display: none;
    }
    &-enter-from,
    &-leave-to {
      translate: 2rem 0;
      opacity: 0;
      translate: 0 -1rem 0;
    }
  }
}

@media screen and (min-width: 769px) {
  .History {
    &__Selector {
      padding: {
        left: 0;
        right: 0;
      }
      --item-width: 10rem;
      justify-content: flex-start;
    }
    &__List--Reaction {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    &__FromText {
      font-size: 1.8rem;
      margin-bottom: 0.6rem;
    }
    &__ReactionItem {
      width: calc((100% - 1.6rem) / 3);
      background-color: hsl(var(--bg-200));
      border-radius: var(--global-radius);
      overflow: hidden;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      }
      &::before {
        width: 100%;
        height: 4rem;
        background: linear-gradient(180deg, transparent, hsl(var(--bg-200))),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            hsl(var(--bg-500)) 20px,
            hsl(var(--bg-500)) 40px
          );
        z-index: 1;
      }
      // &::after {
      //   // background: ;
      //   z-index: 2;
      // }

      & > * {
        z-index: 3;
      }
      & + & {
        border-top: none;
      }
    }
  }
}
</style>
