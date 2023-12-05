<template>
  <div class="ScreenshotSet">
    <OptimizedMedia :src="src" class="ScreenshotSet__Preview" />
    <div class="ScreenshotSet__Actions">
      <!--button class="ScreenshotSet__Action">플레이짤 업로드</button -->
      <button class="ScreenshotSet__Action" @click="download">다운로드</button>
      <button class="ScreenshotSet__Action" @click="share">
        다른 앱으로 공유
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import OptimizedMedia from "./OptimizedMedia.vue";

const props = defineProps({
  src: {
    type: String,
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
  console.log(typeof props.src);
  if (!("canShare" in navigator)) {
    return;
  }
  const resp = await fetch(props.src);
  const blob = await resp.blob();
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
  width: 100vw;
  padding: var(--inner-padding);
  background-color: hsl(var(--bg-100));
  --screenshot-set-radius: calc(var(--global-radius) + var(--inner-padding));
  border-radius: var(--screenshot-set-radius) var(--screenshot-set-radius) 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__Actions {
    display: flex;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__Action {
    flex-grow: 1;
    min-width: 0;
    padding: 1.5rem;
    background-color: hsl(var(--bg-300));
  }
}
</style>
