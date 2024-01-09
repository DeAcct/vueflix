<template>
  <div class="InteractiveVisual">
    <div class="InteractiveVisual__Body">
      <p
        class="InteractiveVisual__Bubble InteractiveVisual__Bubble--Question"
        ref="$question"
      >
        와... 뷰플릭스 볼 거 엄청 많다
      </p>
      <p
        class="InteractiveVisual__Bubble InteractiveVisual__Bubble--Loading"
        ref="$loading"
      >
        <span
          class="InteractiveVisual__Dot"
          v-for="i in 3"
          :key="`iv-dot-${i}`"
          :style="`--iv-dot-delay:${i}`"
        >
        </span>
      </p>
      <p class="InteractiveVisual__Answer" ref="$answer">
        맞아맞아 그건 사실이야, 형은
        <span class="line-break">
          <span class="InteractiveVisual__DecorateLine" ref="$line"></span>
          <strong
            class="InteractiveVisual__CopyAccent"
            ref="$aniTitle"
          ></strong>
          <span class="InteractiveVisual__Static" ref="$static">
            도 볼 수 있어
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/all";

const $question = ref(null);
const $loading = ref(null);
const $answer = ref(null);
const $aniTitle = ref(null);
const $line = ref(null);
const $static = ref(null);

const trackPosters = [
  { directory: "신세기 에반게리온", name: "neon-genesis-evangelion.webp" },
];

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  const mediaQuery = gsap.matchMedia();

  const timeline = gsap.timeline({
    repeat: -1,
  });

  const commonAttr = {
    duration: 0.5,
    delay: 1,
  };

  const fadeDown = {
    y: "-1rem",
    opacity: 0,
  };

  mediaQuery.add("(min-width: 1024px)", () => {
    timeline
      .from($question.value, {
        ...fadeDown,
        targets: ".InteractiveVisual__Bubble--Question",
      })
      .from($loading.value, {
        ...fadeDown,
        targets: ".InteractiveVisual__Bubble--Loading",
      })
      .to($loading.value, {
        delay: 0.5,
        duration: 0.25,
        opacity: 0,
      })
      .set($loading.value, {
        display: "none",
      })
      .from($answer.value, {
        ...fadeDown,
        duration: 0.3,
        targets: ".InteractiveVisual__Answer",
      })
      .from($line.value, {
        y: "-5rem",
        targets: ".InteractiveVisual__DecorateLine",
      })
      .from($static.value, {
        opacity: 0,
        targets: ".InteractiveVisual__Static",
      })
      .to($line.value, {
        duration: 1,
        width: 0,
        marginRight: 0,
        targets: ".InteractiveVisual__DecorateLine",
      })
      .set($aniTitle.value, {
        display: "inline",
        targets: ".InteractiveVisual__CopyAccent",
      })
      .to($aniTitle.value, {
        ...commonAttr,
        text: "메탈릭 루쥬",
        targets: ".InteractiveVisual__CopyAccent",
      })
      .to($aniTitle.value, {
        ...commonAttr,
        text: "장송의 프리렌",
        targets: ".InteractiveVisual__CopyAccent",
      })
      .to($aniTitle.value, {
        ...commonAttr,
        text: "소녀혁명 우테나",
        targets: ".InteractiveVisual__CopyAccent",
      })
      .to($aniTitle.value, {
        ...commonAttr,
        text: "신세기 에반게리온",
        targets: ".InteractiveVisual__CopyAccent",
      })
      .to($aniTitle.value, {
        ...commonAttr,
        text: "",
        targets: ".InteractiveVisual__CopyAccent",
      });
  });
});
</script>

<style lang="scss" scoped>
.InteractiveVisual {
  &__Body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
  &__Bubble {
    display: flex;
    border-radius: calc(var(--global-radius) * 6);
    background-color: hsl(var(--bg-300));
    padding: calc(var(--global-radius) * 6);
    font-size: 2rem;
    &--Question {
      margin-left: auto;
    }
    &--Loading {
      gap: 1rem;
      margin-right: auto;
    }
  }
  &__Dot {
    width: 2rem;
    height: 2rem;
    background-color: hsl(var(--bg-200));
    border-radius: 9999px;
    animation: chat-wiggle 1s ease-out infinite;
    animation-delay: calc(var(--iv-dot-delay) * 0.33s);
  }
  &__Static {
    font-weight: inherit;
    color: inherit;
  }
  &__Answer {
    text-align: left;
    font-size: 5rem;
    color: hsl(var(--bg-900));
    font-weight: 900;
    width: min(80vw, 1080px);
    line-height: 1.3;
    .line-break {
      font-weight: inherit;
      color: inherit;
      display: flex;
      align-items: flex-end;
    }
  }
  &__CopyAccent {
    display: none;
    color: hsl(var(--theme-500));
    background-position-x: left;
    font-weight: inherit;
    font-family: inherit;
    background-clip: text;
  }
  &__DecorateLine {
    display: block;
    width: 12ch;
    height: 1rem;
    background-color: hsl(var(--theme-500));
    transform-origin: left center;
    margin-bottom: 1rem;
    margin-right: 0.5ch;
  }
}

@keyframes chat-wiggle {
  33% {
    translate: 0 -1rem;
  }
  66% {
    translate: 0 1rem;
  }
}
</style>
