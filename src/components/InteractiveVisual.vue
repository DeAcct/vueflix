<template>
  <div class="InteractiveVisual">
    <div class="InteractiveVisual__Body" ref="$interactive">
      <p class="InteractiveVisual__Bubble InteractiveVisual__Bubble--Question">
        와... 데레 볼 거 엄청 많다
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

const props = defineProps({
  aniList: {
    type: Array,
  },
});

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

    const BREAKPOINT = {
      isDesktop: "screen and (min-width: 1080px)",
      isTablet: "screen and (min-width: 768px) and (max-width: 1079px)",
      isMobile: "screen and (max-width: 767px)",
    };

    mediaQuery.add(BREAKPOINT, (mqContext) => {
      const { isDesktop, isTablet, isMobile } = mqContext.conditions;
      timeline
        .from(
          $question,
          {
            ...fadeDown,
          },
          ">0.5"
        )
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
          ease: "expo.out",
        })
        .from(
          $line,
          {
            y: isMobile ? "-2.5rem" : isTablet ? "-3rem" : "-5rem",
          },
          "<"
        )
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
        });
      props.aniList.forEach((title) => {
        timeline.to($aniTitle, {
          ...commonAttr,
          text: title,
        });
      });
      timeline.to($interactive.value, {
        duration: 1,
        opacity: 0,
        y: isDesktop ? "-10rem" : "-5rem",
        ease: "expo.out",
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
    background-color: hsl(var(--bg-300));
    padding: calc(var(--global-radius) * 4);
    border-radius: calc(var(--global-radius) * 4);
    font-size: 1.6rem;

    &--Question {
      margin-left: auto;
    }
    &--Loading {
      gap: 1rem;
      margin-right: auto;
    }
  }
  &__Dot {
    width: 1.6rem;
    height: 1.6rem;
    background-color: hsl(var(--bg-200));
    border-radius: 50%;
    animation: chat-wiggle 1s ease-out infinite;
    animation-delay: calc(var(--iv-dot-delay) * 0.33s);
  }
  &__Static {
    font-weight: inherit;
    color: inherit;
  }
  &__Answer {
    text-align: left;
    font-size: 2.5rem;
    color: hsl(var(--bg-900));
    font-weight: 900;
    width: min(100%, 1080px);
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
    height: 0.5rem;

    background-color: hsl(var(--theme-500));
    transform-origin: left center;

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

@media screen and (min-width: 768px) {
  .InteractiveVisual {
    &__Bubble {
      border-radius: calc(var(--global-radius) * 4);
      padding: calc(var(--global-radius) * 4);
      font-size: 1.8rem;
    }
    &__Answer {
      font-size: 3rem;
    }
    &__Dot {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .InteractiveVisual {
    &__Bubble {
      border-radius: calc(var(--global-radius) * 6);
      padding: calc(var(--global-radius) * 6);
      font-size: 2rem;
    }
    &__Answer {
      font-size: 5rem;
    }
    &__Dot {
      width: 2rem;
      height: 2rem;
    }
    &__DecorateLine {
      height: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
