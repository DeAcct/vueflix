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
    <section class="Subscribe__Content Subscribe__Content--Intro" id="Intro">
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
        <p
          class="Subscribe__Description Subscribe__Description--Animate"
          style="--subscribe-desc-i: 0"
        >
          자유롭고
        </p>
        <p
          class="Subscribe__Description Subscribe__Description--Animate"
          style="--subscribe-desc-i: 1"
        >
          믿음직스럽게
        </p>
        <p
          class="Subscribe__Description Subscribe__Description--Animate"
          style="--subscribe-desc-i: 2"
        >
          덕질하는 방법
        </p>
      </div>
    </section>
    <section
      class="Subscribe__Content Subscribe__Content--Welfare"
      id="Welfare"
    >
      <h2 class="Subscribe__Title">혜택</h2>
      <p class="Subscribe__Description">장교다운</p>
      <p class="Subscribe__Description">
        <span class="Subscribe__Accent">우와-!</span>할 혜택
      </p>
      <div class="Subscribe__ScrollGroup">
        <div class="Subscribe__YScrollWrap">
          <ul class="Subscribe__Cards">
            <li class="Subscribe__Card" ref="$AnimesCounter">
              <strong class="Subscribe__CardTitle">볼 수 있는 애니</strong>
              <p class="Subscribe__CardAccent">
                {{ formatter(animes) }}
              </p>
              <p class="Subscribe__CardSubText">개 이상</p>
            </li>
            <li class="Subscribe__Card">
              <strong class="Subscribe__CardTitle"
                >일본 방송 후 업로드까지</strong
              >
              <p class="Subscribe__CardAccent Subscribe__CardAccent--Scale">
                고작 30초
              </p>
            </li>
            <li class="Subscribe__Card">
              <strong class="Subscribe__CardTitle">새 작품 먼저보기</strong>
              <p class="Subscribe__CardAccent">한 달에 1편</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section
      class="Subscribe__Content Subscribe__Content--Speciality"
      id="Speciality"
    >
      <h2 class="Subscribe__Title">병과</h2>
      <p class="Subscribe__Description">
        나의 <span class="Subscribe__Accent">최애 장르</span>가
      </p>
      <p class="Subscribe__Description">병과가 된다</p>
      <p class="Subscribe__Paragraph">
        병과에 따라 내가 좋아하는 장르가 더 많이 추천되요!
      </p>
      <div class="Subscribe__ScrollGroup">
        <div class="Subscribe__YScrollWrap Subscribe__YScrollWrap--Animate">
          <ul class="Subscribe__Tags">
            <li class="Subscribe__Tag">일상</li>
            <li class="Subscribe__Tag">음식</li>
            <li class="Subscribe__Tag">아이돌</li>
            <li class="Subscribe__Tag">로맨스</li>
            <li class="Subscribe__Tag">하렘</li>
            <li class="Subscribe__Tag">코미디</li>
            <li class="Subscribe__Tag">드라마</li>
            <li class="Subscribe__Tag">액션</li>
            <li class="Subscribe__Tag">스릴러</li>
            <li class="Subscribe__Tag">판타지</li>
            <li class="Subscribe__Tag">재난</li>
            <li class="Subscribe__Tag">추리</li>
          </ul>
        </div>
        <div class="Subscribe__YScrollWrap Subscribe__YScrollWrap--Animate">
          <ul class="Subscribe__Tags">
            <li class="Subscribe__Tag">일상</li>
            <li class="Subscribe__Tag">음식</li>
            <li class="Subscribe__Tag">아이돌</li>
            <li class="Subscribe__Tag">로맨스</li>
            <li class="Subscribe__Tag">하렘</li>
            <li class="Subscribe__Tag">코미디</li>
            <li class="Subscribe__Tag">드라마</li>
            <li class="Subscribe__Tag">액션</li>
            <li class="Subscribe__Tag">스릴러</li>
            <li class="Subscribe__Tag">판타지</li>
            <li class="Subscribe__Tag">재난</li>
            <li class="Subscribe__Tag">추리</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="Subscribe__Content Subscribe__Content--Class" id="">
      <h2 class="Subscribe__Title">계급</h2>
      <p class="Subscribe__Description">이제 속지도</p>
      <p class="Subscribe__Description">속이지도</p>
      <p class="Subscribe__Description">마세요</p>
      <p class="Subscribe__Paragraph">
        쓰거나 읽는 리뷰의 신뢰도는 계급으로 보증해요!
      </p>
      <ul class="Subscribe__ClassList">
        <li
          v-for="(level, i) in levels"
          class="Subscribe__ClassItem"
          :style="`--wave-delay:${i};`"
        >
          <MembershipSymbol :level />
        </li>
      </ul>
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
import { useNumberAnimation } from "@/composables/animate";
import { ref } from "vue";
import { useIntersection } from "@/composables/intersection";
import MembershipSymbol from "../components/membership/MembershipSymbol.vue";
const router = useRouter();

const $AnimesCounter = ref(null);
function timingFunction(x) {
  if (x >= 1) return 1;
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}
const { number: animes, start: animesCounterStart } = useNumberAnimation({
  from: 0,
  to: 100_000,
  duration: 800,
  timingFunction,
});
useIntersection($AnimesCounter, animesCounterStart);
function formatter(value) {
  return Number(value.toFixed(0)).toLocaleString();
}

const levels = ["소위", "중위", "대위", "소령", "중령", "대령", "준장", "장군"];
</script>

<style lang="scss" scoped>
.Subscribe {
  display: flex;
  flex-direction: column;

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
    width: min(100%, 1024px);
    padding: 0 2rem;
    margin: 0 auto;
  }
  &__Back {
    width: 3rem;
    height: 3rem;
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
    overflow: hidden;
    & + & {
      padding-bottom: 12rem;
    }
    &--Intro {
      height: 100dvh;
    }
    &--Welfare {
      align-items: center;
      margin: 0 auto;
    }
    &--Speciality {
      align-items: center;
      margin: 0 auto;
    }
    &--Class {
      margin: 0 auto;
      width: min(calc(100% - 4rem), 1024px);
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
    &--Animate {
      animation: description-appear 500ms forwards
        cubic-bezier(0.83, 0, 0.17, 1);
      animation-delay: calc(200ms * var(--subscribe-desc-i));
      opacity: 0;
    }
  }
  &__Paragraph {
    margin-top: 0.8rem;
    line-height: 1.5;
    font-size: 1.4rem;
  }
  &__Accent {
    font-weight: inherit;
    color: transparent;
    background-image: linear-gradient(
      135deg,
      hsl(var(--theme-500)),
      hsl(var(--theme-100))
    );
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &__ScrollGroup {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;
    gap: 0.8rem;
  }
  &__YScrollWrap {
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;

    width: 100%;
    &--Animate {
      &:nth-child(2n + 1) {
        animation-name: slide-right;
      }
      &:nth-child(2n) {
        animation-name: slide-left;
      }
    }
  }
  &__Tags {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.8rem;
    padding: 0 2rem;
    animation-name: inherit;
    animation-timeline: scroll(root block);
    animation-range-start: entry 0%;
    animation-fill-mode: both;
    animation-timing-function: linear;
  }
  &__Tag {
    font-size: 4rem;
    padding: 2.4rem 3.2rem;
    position: relative;
    z-index: 0;
    background-image: linear-gradient(
      135deg,
      hsl(var(--text-100)),
      hsl(var(--text-100))
    );
    border-radius: 9999px;
  }
  &__Cards {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    gap: 0.8rem;
    padding: 0 2rem;
  }
  &__Card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: calc(100dvw - 4rem);
    flex-shrink: 0;
    aspect-ratio: 16 / 9;
    background-color: hsl(var(--bg-200));
    border-radius: 2.4rem;
    text-align: center;
    padding: 2.4rem;
    &Title {
      font-size: 1.6rem;
      font-weight: 700;
    }
    &Accent {
      font-size: 4rem;
      font-weight: 700;
      margin-top: auto;
      &--Scale {
        animation: scale 3000ms forwards cubic-bezier(0.34, 1.56, 0.64, 1);
        transform-origin: left;
      }
    }
    &SubText {
      font-size: 1.4rem;
    }
  }

  &__ClassList {
    display: grid;
    grid: auto-flow / repeat(3, minmax(0, 1fr));
    justify-content: center;
    gap: 1.2rem;
    margin-top: 4rem;
  }
  &__ClassItem {
    flex-grow: 1;
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

@media screen and (min-width: 1024px) {
  .Subscribe {
    &__HeaderWrap {
      width: calc(100% - 4rem);
    }

    &__Content {
      width: 100dvw;
      flex-direction: row;
      &--Welfare,
      &--Speciality,
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

@keyframes slide-left {
  from {
    translate: 100%;
  }
  to {
    translate: -100%;
    // transform: translateY(calc(-100% + 100vh));
  }
}
@keyframes slide-right {
  from {
    translate: -200%;
  }
  to {
    translate: 0;
  }
}
</style>
