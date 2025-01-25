<template>
  <main class="Subscribe">
    <header class="Subscribe__Header">
      <div class="Subscribe__HeaderWrap">
        <button class="Subscribe__Back" @click="router.back()">
          <IconBase class="Subscribe__BackIcon">
            <IconArrowPrev />
          </IconBase>
        </button>
      </div>
    </header>
    <section class="Subscribe__Content">
      <video
        class="Subscribe__Visual"
        autoplay
        loop
        muted
        playsinline
        :src="Visual"
      ></video>
      <div class="Subscribe__Column">
        <h1 class="Subscribe__Title">데레 애니장교</h1>
        <p class="Subscribe__Description" style="--subscribe-desc-i: 0">
          자유롭고
        </p>
        <p class="Subscribe__Description" style="--subscribe-desc-i: 1">
          믿음직스럽게
        </p>
        <p class="Subscribe__Description" style="--subscribe-desc-i: 2">
          덕질하는 방법
        </p>
      </div>
    </section>
    <section class="Subscribe__Content Subscribe__Content--Class">
      <h2 class="Subscribe__Title">병과</h2>
      <p class="Subscribe__Description">나의 취향이</p>
      <p class="Subscribe__Description">병과가 된다</p>
    </section>
    <div class="Subscribe__CTAHold">
      <RouterLink to="/payment" class="Subscribe__CTA"
        >30초만에 임관하기</RouterLink
      >
    </div>
  </main>
</template>

<script setup>
import Visual from "@/assets/subscribe_visual.mp4";
import IconBase from "@/components/IconBase.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";

import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
.Subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__Header {
    width: 100%;
    position: fixed;
    z-index: 100;
    height: var(--header-height);
    display: flex;
  }
  &__HeaderWrap {
    display: flex;
    align-items: center;
    width: min(calc(100% - 4rem), 1024px);
    margin: 0 auto;
  }
  &__Back {
    width: 3.6rem;
    height: 3.6rem;
    background-color: hsl(var(--text-900) / 0.5);
    backdrop-filter: blur(10px);
    text-align: center;
    align-content: center;
    color: hsl(var(--text-100));
    border-radius: 50%;
    &Icon {
      width: 2rem;
      height: 2rem;
      fill: hsl(var(--text-100));
    }
  }

  &__Content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    &--Class {
      padding-top: var(--header-height);
      width: calc(100% - 4rem);
      margin: 0 auto;
    }
  }
  &__Visual {
    width: 100%;
    height: 50dvh;
    object-fit: cover;
    animation: bg-wipe-clip-mobile 500ms forwards cubic-bezier(0.83, 0, 0.17, 1);
    background: #000;
  }
  &__Column {
    flex-grow: 1;
    width: min(calc(100% - 4rem), 1024px);
    margin: 2.8rem auto 0;
  }
  &__Title {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  &__Description {
    font-size: 4rem;
    font-weight: 990;
    line-height: 1.2;
    animation: description-appear 500ms forwards cubic-bezier(0.83, 0, 0.17, 1);
    animation-delay: calc(200ms * var(--subscribe-desc-i));
    opacity: 0;
  }

  &__CTAHold {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: calc(env(safe-area-inset-bottom) + 4rem) 0
      calc(env(safe-area-inset-bottom) + 2rem);
    background: linear-gradient(hsl(var(--bg-100) / 0), hsl(var(--bg-100)));
  }
  &__CTA {
    display: block;
    margin: 0 auto;
    width: min(calc(100% - 4rem), 512px);
    height: 4rem;
    font-size: 1.4rem;
    font-weight: 700;
    background-color: hsl(var(--theme-500));
    border-radius: 9999px;
    align-content: center;
    text-align: center;
    color: #fff;
  }
}

@media screen and (min-width: 1440px) {
  .Subscribe {
    &__HeaderWrap {
      width: calc(100% - 4rem);
    }

    &__Content {
      width: 100dvw;
      flex-direction: row;
      &--Class {
        width: 1024px;
        flex-direction: column;
      }
    }
    &__Visual {
      width: 50dvw;
      height: 100dvh;
      animation-name: bg-wipe-clip-desktop;
    }
    &__Column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 4rem;
    }
    &__Title {
      font-size: 2.4rem;
    }
    &__Description {
      font-size: 6rem;
    }
    &__CTAHold {
      display: none;
    }
  }
}

@keyframes bg-wipe-clip-mobile {
  from {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
@keyframes bg-wipe-clip-desktop {
  from {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes description-appear {
  from {
    opacity: 0;
    translate: 4rem 0;
  }
  to {
    opacity: 1;
    translate: 0;
  }
}
</style>
