<template>
  <div
    class="StarCombo"
    @click="onClick"
    @mousedown="onMousedown"
    @mousemove="onTouchmove"
    @mouseup="onTouchend"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
  >
    <div class="StarCombo__Row">
      <!-- <svg class="StarCombo__Stars" viewBox="0 0 280 48">
        <clipPath :id="`StarCombo-${starUid}`">
          <path
            d="M47.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88L.81,20.86c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03L21.44,1.63c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM105.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM163.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM221.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM279.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0Z"
          />
        </clipPath>
        <g :clip-path="`url(#StarCombo-${starUid})`">
          <rect x="0" y="0" width="100%" height="100%" class="StarCombo__BG" />
          <rect
            x="0"
            y="0"
            :width="`${renderedProgress}%`"
            height="100%"
            class="StarCombo__Progress"
          />
        </g>
      </svg> -->
      <StarRenderer :star-uid :progress="modelValue" class="StarCombo__Stars" />
      <button class="StarCombo__Reset" type="button" @click="onDelete">
        <IconBase>
          <IconRemove />
        </IconBase>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconBase from "@/components/IconBase.vue";
import IconRemove from "@/components/icons/IconRemove.vue";
import { useMediaQuery } from "@/composables/device";
import StarRenderer from "./StarRenderer.vue";

const modelValue = defineModel({ default: 5 }); // v-model로 받아올 값

const props = defineProps({
  starUid: {
    type: String,
    default: "",
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
});

const media = useMediaQuery("(hover: hover) and (pointer: fine)");
const isMouseDown = ref(!media.value);
const internalProgress = ref(`${(modelValue.value / 5) * 100}%`);

function onClick(e) {
  if (!media.value) return;
  onMousedown();
  onTouchmove(e);
  onTouchend(e);
}

function onMousedown() {
  if (props.readOnly) return;
  isMouseDown.value = media.value;
}

function onTouchmove(e) {
  if (props.readOnly) return;
  if (!isMouseDown.value) return;
  const clientX = getClientX(e);
  const { left, width } = e.currentTarget.getBoundingClientRect();
  internalProgress.value = `${
    (Math.min(Math.max(clientX - left, 0), width) / width) * 100
  }%`;
}

function getClientX(e) {
  if (e.touches && e.touches[0]) return e.touches[0].clientX;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].clientX;
  return e.clientX;
}

const STARS = 5;
function onTouchend() {
  if (props.readOnly) return;
  isMouseDown.value = !media.value;
  const raw = (parseFloat(internalProgress.value) / 100) * STARS;
  const rounded = Math.round(raw * 2) / 2;

  // 값이 바뀔 때만 반영
  if (rounded !== modelValue.value) {
    modelValue.value = rounded;
  }

  internalProgress.value = `${(rounded / STARS) * 100}%`;
}

function onDelete(e) {
  e.stopPropagation();
  modelValue.value = 0;
  internalProgress.value = "0%";
}
</script>

<style lang="scss" scoped>
.StarCombo {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  gap: 0.8rem;
  background: linear-gradient(
    90deg,
    var(--star-combo-bg),
    var(--star-combo-filled) v-bind(internalProgress),
    var(--star-combo-bg) v-bind(internalProgress)
  );
  user-select: none;
  --progress: calc(v-bind(score) / 5 * 100 * 1%);

  &__Row {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  &__Reset {
    margin-left: auto;
  }
}
</style>
