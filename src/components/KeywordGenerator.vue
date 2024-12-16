<template>
  <div class="KeywordGenerator">
    <p class="KeywordGenerator__Info">
      작품의 장/단점, 특징 등을 내 리뷰에 표시할 수 있어요
    </p>
    <div class="KeywordGenerator__Write">
      <input
        type="text"
        :placeholder
        class="KeywordGenerator__Input"
        @input="onChange"
        :value="newKeyword"
        :disabled
        @keyup.enter="addNewKeyword"
      />
      <VueflixBtn
        type="button"
        component="button"
        class="KeywordGenerator__Button KeywordGenerator__Button--Plus"
        @click="addNewKeyword"
      >
        <template #icon>
          <IconBase>
            <IconPlus />
          </IconBase>
        </template>
      </VueflixBtn>
      <VueflixBtn
        type="button"
        component="button"
        class="KeywordGenerator__Button KeywordGenerator__Button--Save"
        v-if="editmode"
        @click="updateKeywords"
      >
        <template #text>저장</template>
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
          v-for="{ text, state } in keywordItems"
          :key="text"
          :state
          @update:state="onUpdateState($event, text)"
          @request-delete="onDelete(text)"
          class="KeywordGenerator__Item"
          icon
        >
          <template #text>{{ text }}</template>
        </KeywordItem>
      </TransitionGroup>
    </VueflixCarousel>
    <VueflixBtn
      type="button"
      component="button"
      @click="revertKeywords"
      v-if="editmode"
      class="KeywordGenerator__Reset"
    >
      <template #text>되돌리기</template>
    </VueflixBtn>
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

const keywordItems = defineModel("keywords");

function onUpdateState(state, text) {
  keywordItems.value = keywordItems.value.map((item) => ({
    ...item,
    state: item.text === text ? state : item.state,
  }));
}
function onDelete(text) {
  keywordItems.value = keywordItems.value.filter((item) => item.text !== text);
}

const emit = defineEmits(["save", "revert"]);
function updateKeywords() {
  emit("save");
}
function revertKeywords() {
  emit("revert");
}

const props = defineProps({
  user: {
    type: Object,
  },
  editmode: {
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
  newKeyword.value = e.target.value;
}
// Mapping of Korean state keywords to their English equivalents
const STATE_MAP = {
  긍정: "positive",
  부정: "negative",
};
function addNewKeyword() {
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
  // 한영문, 상태구분자':' 이외 입력 불가
  if (/[^a-zA-Z가-힣: ]/.test(newKeyword.value)) {
    return;
  }
  const _keywordItems = keywordItems.value.map(({ text }) => text);
  if (_keywordItems.includes(newKeyword.value)) {
    return;
  }

  if (newKeyword.value.includes("_")) {
    newKeyword.value = newKeyword.value.replace("_", " ");
  }

  let [state, text] = newKeyword.value.split(":");
  const VALID_STATE = Object.keys(STATE_MAP);
  if (!VALID_STATE.includes(state)) {
    state = "none";
    text = newKeyword.value;
  } else {
    state = STATE_MAP[state];
  }

  keywordItems.value = [{ state, text }, ...keywordItems.value];
  newKeyword.value = "";
}
</script>

<style lang="scss" scoped>
.KeywordGenerator {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding: 2rem 0 0;
  --input-box-radius: 2rem;
  --input-box-shadow: 0 0.1rem 0.2rem hsl(var(--bg-900) / 0.1),
    0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1);

  &__Info {
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.3;
    text-align: center;
  }
  &__Write {
    display: flex;
    padding: 0 2rem;
    flex-grow: 1;
  }
  &__Input {
    flex-grow: 1;
    width: calc(100% - var(--input-box-radius) * 2);
    height: calc(var(--input-box-radius) * 2);
    font-size: 1.4rem;
    background-color: hsl(var(--bg-100));
    border-radius: var(--input-box-radius) calc(var(--global-radius) * 2)
      calc(var(--global-radius) * 2) var(--input-box-radius);
    border: 1px solid transparent;
    padding: 0 1.6rem;
    box-shadow: var(--input-box-shadow);
    transition: 150ms ease-out;

    &:focus-visible {
      border-color: hsl(var(--text-400));
      box-shadow: 0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1),
        0 0.4rem 0.8rem hsl(var(--bg-900) / 0.1),
        0 0.8rem 1.6rem hsl(var(--bg-900) / 0.1);
    }
    &::placeholder {
      color: hsl(var(--text-300));
    }
  }
  &__Button {
    height: calc(var(--input-box-radius) * 2);
    flex-shrink: 0;
    box-shadow: var(--input-box-shadow);
    &--Plus {
      color: hsl(var(--text-500));
      background-color: hsl(var(--bg-100));
      width: calc(var(--input-box-radius) * 2);
      border-radius: calc(var(--global-radius) * 2) var(--input-box-radius)
        var(--input-box-radius) calc(var(--global-radius) * 2);
      margin-left: 0.4rem;
      padding: 0;
      padding-right: 0.2rem;
    }
    &--Save {
      color: #fff;
      background-color: hsl(var(--theme-500));
      border-radius: var(--input-box-radius);
      padding: 0 1.6rem;
      margin-left: 0.8rem;
      font-size: 1.6rem;
    }
  }
  &__Carousel {
    --carousel-padding: 2rem;
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

  &__Reset {
    width: 100%;
    height: 4rem;
    box-shadow: none;
    border-top: 1px solid hsl(var(--text-100));
    margin-top: 1rem;
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
  }
  &-leave-active {
    position: absolute;
  }
}
</style>
