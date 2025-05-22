<template>
  <section class="PosterHero">
    <div
      class="PosterHero__Poster"
      :class="loaded && 'PosterHero__Poster--Loaded'"
    >
      <RouterLink
        :to="`/?modal=${aniTitle}&route=episodes`"
        class="PosterHero__ToEpisodes"
        :style
        ><span class="blind">에피소드 목록 보기</span></RouterLink
      >
      <div class="PosterHero__Floats">
        <h2 class="PosterHero__Title">{{ aniTitle }}</h2>
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
          <button
            class="PosterHero__Button"
            @click="onClickWannaSee(aniTitle)"
            type="button"
          >
            <WannaSeeMotion :ani-title />
            <span class="PosterHero__Text">보고싶다!</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useAuth } from "@/store/auth";

import { useWannaSee } from "@/api/wannaSee";
import POSTER from "@/api/poster";

import WannaSeeMotion from "@/components/WannaSeeMotion.vue";

import IconBase from "@/components/IconBase.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import useContinue from "../composables/continue";

const props = defineProps({
  aniTitle: {
    type: String,
    required: true,
  },
});

const { toggleWannaSee } = useWannaSee(props.aniTitle);
const { url, themeColor, loaded } = POSTER(props.aniTitle);

const auth = useAuth();
const user = computed(() => auth.user);
const router = useRouter();
function onClickWannaSee() {
  if (!user.value) {
    router.push("/auth");
    return;
  }
  toggleWannaSee();
}

const style = computed(() => ({
  background: `
    linear-gradient(to top, ${themeColor.value} 15%, transparent), 
    url(${url.value}) center/cover
  `,
}));

const continueData = useContinue(props.aniTitle);
</script>

<style lang="scss" scoped>
.PosterHero {
  padding: calc(var(--header-height) + 1rem) 2rem 1rem;
  background: linear-gradient(to bottom, v-bind(themeColor) 50%, transparent);
  &__Poster {
    display: flex;
    align-items: flex-end;
    width: 100%;
    aspect-ratio: 3 / 4;

    box-shadow: 0.6rem 0.6rem 1.2rem hsl(var(--poster-color-base-dark) / 0.05),
      1.2rem 1.2rem 2.4rem hsl(var(--poster-color-base-dark) / 0.1),
      1.2rem 1.8rem 3.6rem hsl(var(--poster-color-base-dark) / 0.15),
      -0.6rem -0.6rem 1.2rem hsl(var(--poster-color-base-light) / 0.1),
      -1.2rem -1.2rem 2.4rem hsl(var(--poster-color-base-light) / 0.15),
      -1.2rem -1.8rem 3.6rem hsl(var(--poster-color-base-light) / 0.15);
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      315deg,
      v-bind(themeColor) 50%,
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
    background-size: cover;
    position: absolute;
    border-radius: calc(var(--global-radius) * 2);
    inset: 2px;
  }
  &__Floats {
    position: absolute;
    inset: auto 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    padding: 3.2rem 1.6rem;
  }
  &__Title {
    font-size: 2.4rem;
    color: #fff;
  }
  &__Buttons {
    width: 100%;
    display: flex;
    gap: 0.4rem;
  }
  &__Button {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    height: 4rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    background: hsl(var(--poster-color-base-light) / 0.2);
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
</style>
