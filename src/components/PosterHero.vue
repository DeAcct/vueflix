<template>
  <section
    class="PosterHero"
    :class="`PosterHero--${useFirstCapital(themeColor?.theme)}`"
  >
    <div
      class="PosterHero__Poster"
      :class="loaded && 'PosterHero__Poster--Loaded'"
    >
      <RouterLink
        :to="`/?modal=${_aniTitle}&route=episodes`"
        class="PosterHero__ToEpisodes"
        :style="posterStyle"
        v-if="posterUrl"
        ><span class="blind">에피소드 목록 보기</span></RouterLink
      >
      <div class="PosterHero__Floats">
        <strong class="PosterHero__TitleHolder">
          <img :src="logoUrl" :alt="_aniTitle" class="PosterHero__Title" />
        </strong>
        <div class="PosterHero__Buttons">
          <RouterLink
            class="PosterHero__Button PosterHero__Button--Play"
            :to="continueData.link"
          >
            <IconBase class="PosterHero__Icon">
              <IconPlay />
            </IconBase>
            <span class="PosterHero__Text">재생</span>
          </RouterLink>
          <WannaSeeButton
            :ani-title="animeData?.name"
            class="PosterHero__Button"
          >
            <template #text>보고싶다!</template>
          </WannaSeeButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import Hero from "@/api/hero";
import { useMediaQuery } from "@/composables/device";

import IconBase from "@/components/IconBase.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import useContinue from "@/composables/continue";
import { useDeviceGesture } from "@/composables/motion";
import { useFirstCapital } from "@/composables/formatter";

import WannaSeeButton from "./WannaSeeButton.vue";

const { logoUrl, posterUrl, themeColor, loaded, animeData, refresh } = Hero();

const media = useMediaQuery("(min-width: 690px)");
const posterStyle = computed(() => ({
  backgroundImage: `${
    media.value
      ? `linear-gradient(to right, ${themeColor.value.color} 74%, transparent),`
      : `linear-gradient(to top, ${themeColor.value.color} 10%, transparent),`
  } url(${posterUrl.value})`,
}));

const _aniTitle = computed(() => animeData.value?.name);
const continueData = useContinue(_aniTitle);

defineExpose({
  refresh,
});

const { tilt } = useDeviceGesture(0.2);
</script>

<style lang="scss" scoped>
.PosterHero {
  padding: calc(var(--header-height) + 1rem) 2rem 2rem;
  margin-bottom: -2rem;
  background: linear-gradient(
    to bottom,
    v-bind("themeColor.color") 50%,
    transparent
  );

  &--Light {
    --element-color: hsl(var(--poster-color-base-dark) / 0.1);
  }
  &--Dark {
    --element-color: hsl(var(--poster-color-base-light) / 0.2);
  }

  &__Poster {
    display: flex;
    align-items: flex-end;
    width: 100%;
    aspect-ratio: 3 / 4;

    transform: perspective(500rem) rotateX(calc(v-bind("tilt.beta") * 1deg))
      rotateY(calc(v-bind("tilt.gamma") * 1deg));

    box-shadow: 0.6rem 0.6rem 1.2rem hsl(var(--poster-color-base-dark) / 0.05),
      1.2rem 1.2rem 2.4rem hsl(var(--poster-color-base-dark) / 0.1),
      1.2rem 1.8rem 3.6rem hsl(var(--poster-color-base-dark) / 0.15),
      -0.6rem -0.6rem 1.2rem hsl(var(--poster-color-base-light) / 0.1),
      -1.2rem -1.2rem 2.4rem hsl(var(--poster-color-base-light) / 0.15),
      -1.2rem -1.8rem 3.6rem hsl(var(--poster-color-base-light) / 0.2);
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      315deg,
      v-bind("themeColor.color") 50%,
      hsl(var(--poster-color-base-light) / 0.8)
    );
    border-radius: calc(var(--global-radius) * 2 + 2px);
    opacity: 0;
    transition: opacity 150ms ease-out;
    &--Loaded {
      opacity: 1;
    }
  }
  &__ToEpisodes {
    background-position: center;
    background-size: cover;
    position: absolute;
    border-radius: calc(var(--global-radius) * 2);
    inset: 2px;
  }
  &__Floats {
    position: absolute;
    inset: auto 1.6rem 3.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    transform: perspective(500rem)
      translate3d(
        calc(v-bind("tilt.gamma") * 0.1rem),
        calc(v-bind("tilt.beta") * -0.1rem),
        calc(v-bind("tilt.beta") * 0.1rem)
      );
  }
  &__TitleHolder {
    color: #fff;
    width: min(calc(100% - 4rem), 30rem);
  }
  &__Title {
    width: 100%;
    filter: drop-shadow(0 0.1rem 0.3rem rgba(0, 0, 0, 0.3));
    margin-bottom: 3rem;
  }

  &__Buttons {
    width: 100%;
    display: flex;
    gap: 0.4rem;
  }
  &__Button {
    pointer-events: auto;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    height: 4rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    background: var(--element-color);
    backdrop-filter: blur(5px);
    border-radius: 9999px;
    color: #fff;
    --wanna-see-icon-color: #fff;
    &--Play {
      background-color: hsl(var(--poster-color-base-light));
      color: hsl(var(--poster-color-base-dark));
    }
  }
  &__Text,
  &__Icon {
    color: inherit;
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 690px) {
  .PosterHero {
    padding-top: calc(var(--header-height) + 2rem);
    &__Poster {
      aspect-ratio: 21 / 10;
      // padding: 2rem;
      padding: 0.2rem;
      // align-items: center;
    }
    &__ToEpisodes {
      aspect-ratio: 3 / 4;
      position: static;
      width: 100%;
      height: 100%;
      background-position: right;
      background-size: contain;
      background-repeat: no-repeat;
    }
    &__Floats {
      width: 100%;
      inset: auto 3.2rem 3.2rem;
      align-items: flex-start;
      gap: 3rem;
    }
    &__TitleHolder {
      width: 25dvw;
    }
    &__Buttons {
      width: auto;
    }
    &__Button {
      padding: 0 2rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .PosterHero {
    &__Poster {
      aspect-ratio: 21 / 8;
    }
  }
}
</style>
