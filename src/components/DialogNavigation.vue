<template>
  <div class="DialogNavigation">
    <div class="wrap">
      <button class="DialogNavigation__Button" @click="goBack" type="button">
        <IconBase icon-name="뒤로가기">
          <IconArrowPrev class="mobile" />
          <IconClose class="desktop" />
        </IconBase>
      </button>
      <strong
        class="DialogNavigation__ActivityName"
        :class="
          scrollState !== 'top' && 'DialogNavigation__ActivityName--Scroll'
        "
      >
        <slot name="activity-name"></slot>
      </strong>
      <div class="DialogNavigation__Actions">
        <button
          class="DialogNavigation__Button"
          @click="openSystemShare"
          type="button"
        >
          <IconBase icon-name="공유">
            <IconShare />
          </IconBase>
        </button>
        <button class="DialogNavigation__Button" type="button">
          <IconBase>
            <IconOverflow />
          </IconBase>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconClose from "./icons/IconClose.vue";
import IconShare from "./icons/IconShare.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import { computed } from "vue";

const props = defineProps({
  scrollState: String,
});

const route = useRoute();
async function openSystemShare() {
  const shareData = {
    title: `데레에서 ${route.query.modal} 다시보기`,
    url: window.location.href,
  };
  await navigator.share(shareData);
}

const router = useRouter();
function goBack() {
  if (window.history.state.back === null) {
    router.push({ path: "/" });
    return;
  }
  router.back();
}

const padding = computed(() => {
  if (props.scrollState === "top") {
    return "2rem 2rem 0rem";
  }
  return "2rem 4rem 0rem";
});
</script>

<style lang="scss" scoped>
.DialogNavigation {
  transition: 150ms ease-out;
  background: linear-gradient(var(--anime-layout-bg), transparent);
  display: flex;
  margin: 0 auto;
  padding: 2rem 2rem 0rem;
  .wrap {
    display: flex;
    width: 100%;
    align-items: center;
    height: 2.4rem;
  }

  &__Button {
    color: var(--anime-layout-text);
    width: 2.4rem;
    height: 2.4rem;
  }

  &__ActivityName {
    margin-left: 0.5rem;
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
    &--Scroll {
      opacity: 1;
      translate: 0 0;
    }
  }
  &__Actions {
    display: flex;
    gap: 1.2rem;
  }

  .desktop {
    display: none;
  }
}

@media screen and (min-width: 1080px) {
  .DialogNavigation {
    padding: v-bind(padding);
    .wrap {
      height: 4.8rem;
    }
    &__ActivityName {
      translate: 0 0;
      margin-left: 1rem;
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
      display: block;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
