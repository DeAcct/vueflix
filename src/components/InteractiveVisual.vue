<template>
  <div class="InteractiveVisual">
    <div class="InteractiveVisual__Body" ref="$interactive">
      <p class="InteractiveVisual__Bubble InteractiveVisual__Bubble--Question">
        와... 뷰플릭스 볼 거 엄청 많다
      </p>
      <p class="InteractiveVisual__Bubble InteractiveVisual__Bubble--Loading">
        <span
          class="InteractiveVisual__Dot"
          v-for="i in 3"
          :key="`iv-dot-${i}`"
          :style="`--iv-dot-delay:${i}`"
        >
        </span>
      </p>
      <p class="InteractiveVisual__Answer">
        맞아맞아 그건 사실이야, 형은
        <span class="line-break">
          <span class="InteractiveVisual__DecorateLine"></span>
          <strong class="InteractiveVisual__AniTitle"></strong>
          <span class="InteractiveVisual__Static"> 도 볼 수 있어 </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap, TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

let interactiveCTX;
const $interactive = ref(null);

onMounted(() => {
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

  interactiveCTX = gsap.context((self) => {
    const $question = self.selector(".InteractiveVisual__Bubble--Question");
    const $loading = self.selector(".InteractiveVisual__Bubble--Loading");
    const $answer = self.selector(".InteractiveVisual__Answer");
    const $line = self.selector(".InteractiveVisual__DecorateLine");
    const $static = self.selector(".InteractiveVisual__Static");
    const $aniTitle = self.selector(".InteractiveVisual__AniTitle");

    mediaQuery.add("(min-width: 1024px)", () => {
      timeline
        .from($question, {
          ...fadeDown,
        })
        .from($loading, {
          ...fadeDown,
        })
        .to($loading, {
          delay: 0.5,
          duration: 0.25,
          opacity: 0,
        })
        .set($loading, {
          display: "none",
        })
        .from($answer, {
          ...fadeDown,
          duration: 0.3,
        })
        .from($line, {
          y: "-5rem",
        })
        .from($static, {
          opacity: 0,
        })
        .to($line, {
          duration: 1,
          width: 0,
          marginRight: 0,
        })
        .set($aniTitle, {
          display: "inline",
        })
        .to($aniTitle, {
          ...commonAttr,
          text: "메탈릭 루쥬",
        })
        .to($aniTitle, {
          ...commonAttr,
          text: "장송의 프리렌",
        })
        .to($aniTitle, {
          ...commonAttr,
          text: "소녀혁명 우테나",
        })
        .to($aniTitle, {
          ...commonAttr,
          text: "신세기 에반게리온",
        })
        .to($aniTitle, {
          ...commonAttr,
          text: "",
        });
    });
  }, $interactive.value);
});

onUnmounted(() => {
  interactiveCTX.revert();
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
  &__AniTitle {
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
