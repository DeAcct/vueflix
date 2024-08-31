<template>
  <div class="DialogNavigation">
    <div class="DialogNavigation__Wrap">
      <RouterLink
        class="DialogNavigation__Button DialogNavigation__Button--Close mobile"
        to="/"
      >
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </RouterLink>
      <strong
        class="DialogNavigation__ActivityName"
        :class="
          scrollState !== 'top' && 'DialogNavigation__ActivityName--Scroll'
        "
      >
        <slot name="activity-name"></slot>
      </strong>
      <button
        class="DialogNavigation__Button DialogNavigation__Button--Share"
        @click="openSystemShare"
        type="button"
      >
        <IconBase icon-name="공유">
          <IconShare />
        </IconBase>
      </button>
      <RouterLink
        class="DialogNavigation__Button DialogNavigation__Button--Close desktop"
        to="/"
      >
        <IconBase>
          <IconClose />
        </IconBase>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconClose from "./icons/IconClose.vue";
import IconShare from "./icons/IconShare.vue";

const props = defineProps({
  scrollState: String,
});

const route = useRoute();
async function openSystemShare() {
  const shareData = {
    title: route.query.modal,
    text: `데레에서 ${route.query.modal} 다시보기`,
    url: window.location.href,
  };
  await navigator.share(shareData);
}

const padding = computed(() => {
  if (props.scrollState === "top") {
    return "2rem 2rem 0";
  }
  return "2rem 4rem 0";
});
</script>

<style lang="scss" scoped>
.DialogNavigation {
  transition: 150ms ease-out;

  display: flex;
  margin: 0 auto;
  padding: 2rem 2rem 0rem;
  &__Wrap {
    display: flex;
    width: 100%;
    align-items: center;
    height: 2.4rem;
    gap: 0.5rem;
  }

  &__Button {
    color: var(--anime-layout-text);
    width: 2.4rem;
    height: 2.4rem;
    &--Share {
      margin-left: auto;
    }
  }

  &__ActivityName {
    margin-right: auto;
    font-size: 1.7rem;
    height: 2.4rem;
    color: var(--anime-layout-text);
    opacity: 0;
    translate: 2rem 0;
    transition: translate 150ms ease-out, opacity 150ms ease-out;
    //말줄임표 처리
    width: 60%;
    line-height: 2.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
    text-shadow: 0 0 0.9rem hsl(var(--bg-100) / 0.5);
    &--Scroll {
      opacity: 1;
      translate: 0 0;
    }
  }

  .desktop {
    display: none;
  }
}

@media screen and (min-width: 1080px) {
  .DialogNavigation {
    padding: v-bind(padding);
    &__Wrap {
      height: 4.8rem;
      gap: 1rem;
    }
    &__ActivityName {
      translate: 0 0;
    }
    &__Button {
      width: 4.8rem;
      height: 4.8rem;
      display: flex;
      background-color: hsl(var(--bg-100) / 0.3);
      backdrop-filter: blur(10px);
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .desktop {
      display: flex;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
