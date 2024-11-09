<template>
  <div class="KeywordGenerator">
    <p class="KeywordGenerator__Info">
      작품의 장/단점, 특징 등을 내 리뷰 위쪽에 표시할 수 있어요
    </p>
    <input
      type="text"
      :placeholder
      class="KeywordGenerator__Input"
      @input="onChange"
      :value="newKeyword"
      :disabled
    />
    <VueflixBtn
      type="button"
      component="button"
      class="KeywordGenerator__NewButton"
      @click="onNewKeyword"
    >
      <template #icon>
        <IconBase>
          <IconPlus />
        </IconBase>
      </template>
    </VueflixBtn>
    <VueflixCarousel class="KeywordGenerator__Carousel">
      <TransitionGroup
        tag="ul"
        name="keyword-list"
        class="KeywordGenerator__List"
      >
        <KeywordItem
          v-for="{ text, state } in dummyItems"
          :key="text"
          :state
          @update:state="onUpdateState($event, text)"
          @request-delete="onDelete(text)"
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

const dummyItems = ref([
  { text: "그림체", state: "none" },
  { text: "배경음악", state: "none" },
  { text: "성우 연기", state: "none" },
  { text: "스토리", state: "none" },
  { text: "연출", state: "none" },
  { text: "캐릭터", state: "none" },
  { text: "작화(움직임)", state: "none" },
]);

function onUpdateState(state, text) {
  dummyItems.value = dummyItems.value.map((item) => ({
    ...item,
    state: item.text === text ? state : item.state,
  }));
}
function onDelete(text) {
  dummyItems.value = dummyItems.value.filter((item) => item.text !== text);
}

const props = defineProps({
  user: {
    type: Object,
  },
});

const disabled = computed(
  () => dummyItems.value.length >= 10 || props.user === null
);
const placeholder = computed(() => {
  if (props.user === null) {
    return "키워드를 편집하려면 먼저 로그인을 해주세요";
  }
  if (dummyItems.value.length >= 10) {
    return "최대 10개까지 입력 가능해요";
  }
  return "원하는 단어를 입력하세요";
});

const newKeyword = ref("");
function onChange(e) {
  newKeyword.value = e.target.value;
}
function onNewKeyword() {
  if (!newKeyword.value) {
    return;
  }
  if (dummyItems.value.length >= 10) {
    return;
  }
  if (newKeyword.value.length >= 10) {
    return;
  }
  if (useForbiddenFilter("forbidden", newKeyword).length > 0) {
    return;
  }
  // 한영문, 상태구분자':' 이외 입력 불가
  if (/[^a-zA-Z가-힣\: ]/.test(newKeyword.value)) {
    return;
  }

  if (newKeyword.value.includes("_")) {
    newKeyword.value = newKeyword.value.replace("_", " ");
  }

  let [state, text] = newKeyword.value.split(":");
  const VALID_STATE = [
    "positive",
    "neutral",
    "negative",
    "긍정",
    "중립",
    "부정",
  ];
  if (!VALID_STATE.includes(state)) {
    state = "none";
    text = newKeyword.value;
  }
  console.log(state, text);

  dummyItems.value = [{ state, text }, ...dummyItems.value];
  newKeyword.value = "";
}

// const reviewItems = [
//   {
//     keyword: "그림체",
//     id: "drawing",
//   },
//   {
//     keyword: "배경음악",
//     id: "bgm",
//   },
//   {
//     keyword: "성우 연기",
//     id: "voice",
//   },
//   {
//     keyword: "스토리",
//     id: "story",
//   },
//   {
//     keyword: "연출",
//     id: "directing",
//   },
//   {
//     keyword: "캐릭터",
//     id: "character",
//   },
//   {
//     keyword: "작화(움직임)",
//     id: "sakuga",
//   },
// ];

// // const store = useStore();
// // const user = computed(() => store.state.auth.user);

// const selected = defineModel("selected", {
//   type: Array,
// });

// const emits = defineEmits(["new-check"]);
// function onChange(e) {
//   emits("new-check", e);
// }
</script>

<style lang="scss" scoped>
.KeywordGenerator {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding: 2rem;
  &__Info {
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.3;
    text-align: center;
  }
  &__Input {
    // flex-grow: 1;
    width: calc(100% - 4.8rem);
    height: 3.6rem;
    font-size: 1.4rem;
    background-color: hsl(var(--bg-100));
    border-radius: 9999px;
    border: 2px solid transparent;
    padding: 0 1.6rem;
    box-shadow: 0 0.1rem 0.2rem hsl(var(--bg-900) / 0.1),
      0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1);
    transition: 150ms ease-out;

    &:focus-visible {
      border-color: hsl(var(--theme-500));
      box-shadow: 0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1),
        0 0.4rem 0.8rem hsl(var(--bg-900) / 0.1),
        0 0.8rem 1.6rem hsl(var(--bg-900) / 0.1);
    }
  }
  &__NewButton {
    background-color: hsl(var(--theme-500));
    padding: 0;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    color: #fff;
  }
  &__Carousel {
    --carousel-padding: 0;
  }
  &__List {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    gap: 0.8rem;
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

.keyword-list-move,
.keyword-list-enter-active,
.keyword-list-leave-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.keyword-list-enter-active {
  transition-delay: 150ms;
}

.keyword-list-enter-from,
.keyword-list-leave-to {
  opacity: 0;
}

.keyword-list-leave-active {
  position: absolute;
}
</style>
