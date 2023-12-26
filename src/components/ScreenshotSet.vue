<template>
  <Transition name="slide-up">
    <div class="ScreenshotSet" v-if="show">
      <div class="ScreenshotSet__Body">
        <OptimizedMedia
          :src="src"
          class="ScreenshotSet__Preview"
        ></OptimizedMedia>
        <div class="ScreenshotSet__Actions">
          <!--button class="ScreenshotSet__Action">플레이짤 업로드</button -->
          <button class="ScreenshotSet__Delete" @click="closeAction">
            <IconBase>
              <IconTrash />
            </IconBase>
          </button>
          <div class="split">
            <button class="ScreenshotSet__Action" @click="download">
              다운로드
            </button>
            <button class="ScreenshotSet__Action" @click="share">
              다른 앱으로 공유
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useRoute } from "vue-router";
import OptimizedMedia from "./OptimizedMedia.vue";
import IconBase from "./IconBase.vue";
import IconTrash from "./icons/IconTrash.vue";

const props = defineProps({
  src: {
    type: String,
  },
  show: {
    type: Boolean,
  },
  closeAction: {
    type: Function,
  },
});

const route = useRoute();

function download() {
  const temporalAnchor = document.createElement("a");
  temporalAnchor.href = props.src;
  temporalAnchor.download = `${route.params.title} ${route.params.part} ${route.params.index} 스크린샷`;
  temporalAnchor.click();
}

async function share() {
  if (!("canShare" in navigator)) {
    return;
  }
  const blob = await (await fetch(props.src)).blob();
  const file = new File(
    [blob],
    `${route.params.title} ${route.params.part} ${route.params.index} 스크린샷.png`,
    {
      type: blob.type,
    }
  );
  navigator.share({
    title: `스크린샷`,
    files: [file],
  });
}
</script>

<style lang="scss" scoped>
.ScreenshotSet {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  transform: translateY(0);
  background: linear-gradient(
    150deg,
    hsl(var(--bg-900) / 0.2),
    hsl(var(--bg-900) / 0.025)
  );
  padding: 1px;
  border-radius: var(--global-radius) var(--global-radius) 0 0;
  backdrop-filter: blur(10px);
  width: calc(100 * 1px * var(--vw));
  &__Body {
    border-radius: calc(var(--global-radius) - 1px)
      calc(var(--global-radius) - 1px) 0 0;
    padding: calc(var(--inner-padding) - 1px);
    background-color: hsl(var(--bg-200) / 0.5);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
  }

  &__Actions {
    display: flex;
  }
  &__Delete {
    width: 4.8rem;
    height: 4.8rem;
  }
  .split {
    display: flex;
    gap: 2px;
    flex-grow: 1;
  }
  &__Action {
    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;
    padding: 1.5rem;
    background-color: hsl(var(--bg-300));
    &:first-child {
      border-radius: var(--global-radius) 0 0 var(--global-radius);
    }
    &:last-child {
      border-radius: 0 var(--global-radius) var(--global-radius) 0;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: 150ms ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

@media screen and (min-width: 1080px) {
  .ScreenshotSet {
    width: 480px;
    left: auto;
    right: max(calc((100 * 1px * var(--vw) - 1920px) / 2), 2rem);
    padding: 0;
    border-radius: calc(2rem + var(--global-radius))
      calc(2rem + var(--global-radius)) 0 0;
    &__Body {
      padding: 1.9rem;
    }
  }
}
</style>
