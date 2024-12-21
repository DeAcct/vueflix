<template>
  <div class="KeywordGenerator">
    <p class="KeywordGenerator__Info">이 작품을 어떻게 생각하나요?</p>
    <div class="KeywordGenerator__Write">
      <input
        type="text"
        :placeholder
        class="KeywordGenerator__Input"
        @input="onChange"
        :value="newKeyword"
        :disabled
        @keyup.enter="upKeyword"
      />
      <VueflixBtn
        type="button"
        component="button"
        class="KeywordGenerator__Button KeywordGenerator__Button--Plus"
        @click="upKeyword"
      >
        <template #icon>
          <IconBase>
            <IconPlus />
          </IconBase>
        </template>
      </VueflixBtn>
    </div>
    <VueflixCarousel
      class="KeywordGenerator__Carousel"
      :class="keywordItems.length > 0 && 'KeywordGenerator__Carousel--Show'"
    >
      <TransitionGroup
        tag="ul"
        name="keyword-list"
        class="KeywordGenerator__List"
      >
        <KeywordItem
          v-for="text in keywordItems"
          :key="text"
          @request-delete="downKeyword(text)"
          class="KeywordGenerator__Item"
        >
          <template #text>{{ text }}</template>
        </KeywordItem>
      </TransitionGroup>
    </VueflixCarousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useForbiddenFilter } from "@/composables/word";

import VueflixBtn from "@/components/VueflixBtn.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import KeywordItem from "@/components/KeywordItem.vue";

import IconBase from "@/components/IconBase.vue";
import IconPlus from "./icons/IconPlus.vue";

const keywordItems = defineModel("keywords", { default: [] });

const emit = defineEmits(["clear", "up", "down"]);

const props = defineProps({
  user: {
    type: Object,
  },
  resetDisabled: {
    type: Boolean,
  },
});

const disabled = computed(
  () => keywordItems.value.length >= 10 || props.user === null
);
const placeholder = computed(() => {
  if (props.user === null) {
    return "키워드를 편집하려면 먼저 로그인을 해주세요";
  }
  if (keywordItems.value.length >= 10) {
    return "최대 10개까지 입력 가능해요";
  }
  return "원하는 키워드를 입력하세요";
});

const newKeyword = ref("");
function onChange(e) {
  console.log(e.target.value);
  newKeyword.value = e.target.value;
}

function downKeyword(text) {
  keywordItems.value = keywordItems.value.filter((item) => item.text !== text);
  emit("down", text);
}

function clearKeyword() {
  keywordItems.value = [];
  emit("clear");
}

function upKeyword() {
  if (!newKeyword.value || !newKeyword.value.trim()) {
    return;
  }
  if (useForbiddenFilter("forbidden", newKeyword).length > 0) {
    return;
  }
  if (keywordItems.value.length >= 10) {
    return;
  }
  if (newKeyword.value.length >= 10) {
    return;
  }
  // 한영문 이외 입력 불가
  if (/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ ]/.test(newKeyword.value)) {
    return;
  }
  if (keywordItems.value.includes(newKeyword.value)) {
    return;
  }

  if (newKeyword.value.includes("_")) {
    newKeyword.value = newKeyword.value.replace("_", " ");
  }

  // let [state, text] = newKeyword.value.split(":");
  // const VALID_STATE = Object.keys(STATE_MAP);
  // if (!VALID_STATE.includes(state)) {
  //   state = "none";
  //   text = newKeyword.value;
  // } else {
  //   state = STATE_MAP[state];
  // }

  emit("up", newKeyword.value);

  keywordItems.value = [newKeyword.value, ...keywordItems.value];
  newKeyword.value = "";
}
</script>

<style lang="scss" scoped>
.KeywordGenerator {
  display: flex;
  flex-wrap: wrap;
  --input-box-radius: 2rem;
  gap: 1.2rem;

  &__Info {
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.3;
    text-align: center;
  }
  &__Write {
    display: flex;
    flex-grow: 1;
  }
  &__Input {
    flex-grow: 1;
    width: calc(100% - var(--input-box-radius) * 2);
    height: calc(var(--input-box-radius) * 2);
    font-size: 1.4rem;
    background-color: hsl(var(--bg-200));
    border-radius: var(--input-box-radius) calc(var(--global-radius) * 2)
      calc(var(--global-radius) * 2) var(--input-box-radius);
    border: 1px solid transparent;
    padding: 0 1.6rem;
    transition: 150ms ease-out;

    &:focus-visible {
      border-color: hsl(var(--text-400));
    }
    &::placeholder {
      color: hsl(var(--bg-700));
    }
  }
  &__Button {
    height: calc(var(--input-box-radius) * 2);
    flex-shrink: 0;
    box-shadow: none;
    &--Plus {
      color: hsl(var(--text-500));
      background-color: hsl(var(--bg-200));
      width: calc(var(--input-box-radius) * 2);
      border-radius: calc(var(--global-radius) * 2) var(--input-box-radius)
        var(--input-box-radius) calc(var(--global-radius) * 2);
      margin-left: 0.4rem;
      padding: 0;
      padding-right: 0.2rem;
    }
  }
  &__Carousel {
    margin-top: -0.4rem;
    --carousel-padding: 0;
    height: 0;
    transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1) allow-discrete;
    display: none;

    &--Show {
      height: auto;
      display: block;
    }
  }
  &__List {
    display: flex;
    flex-wrap: nowrap;
    // width: fit-content;
    gap: 0.8rem;
  }
  &__Item {
    --keyword-radius: var(--input-box-radius);
    font-size: 1.4rem;
  }
}
@media (hover: hover) and (pointer: fine) {
  .KeywordGenerator {
    &__List {
      border-radius: 0;
      flex-wrap: wrap;
    }
  }
}

.keyword-list {
  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  &-enter-active {
    transition-delay: 150ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    scale: 0;
  }
  &-leave-active {
    position: absolute;
  }
}
</style>
