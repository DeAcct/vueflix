<template>
  <Transition name="slide-up">
    <div class="ScreenshotSet" v-if="show">
      <OptimizedMedia
        :src="src"
        class="ScreenshotSet__Preview"
      ></OptimizedMedia>
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
  background-color: hsl(var(--bg-200));
  border-radius: calc(2rem + var(--global-radius))
    calc(2rem + var(--global-radius)) 0 0;
  width: calc(100 * 1px * var(--vw));
  padding: var(--inner-padding) var(--inner-padding) 1rem;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__Actions {
    display: flex;
  }
  &__Delete {
    width: 3.6rem;
    height: 3.6rem;
  }
  .split {
    display: flex;
    gap: 2px;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__Action {
    padding: 0 1.2rem;
    font-size: 1.4rem;
    background-color: hsl(var(--bg-300));
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
    padding: 2rem 2rem 1rem;
    &__Body {
      padding: 1.9rem;
    }
  }
}
</style>
