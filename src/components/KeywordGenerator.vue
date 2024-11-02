<template>
  <div class="KeywordGenerator">
    <p class="KeywordGenerator__Info">
      작품의 장/단점, 특징 등을 내 리뷰 위쪽에 표시할 수 있어요
    </p>
    <input
      type="text"
      placeholder="원하는 단어를 입력하세요"
      class="KeywordGenerator__Input"
      @input="onChange"
      :value="newKeyword"
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
    <VueflixCarousel class="KeywordGenerator__List" type="break">
      <KeywordItem
        v-for="{ text, state } in dummyItems"
        :key="text"
        :state
        @update:state="onUpdateState($event, text)"
        @request-delete="onDelete(text)"
      >
        <template #text>{{ text }}</template>
      </KeywordItem>
    </VueflixCarousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

import IconBase from "./IconBase.vue";
import IconPlus from "./icons/IconPlus.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import VueflixCarousel from "./VueflixCarousel.vue";
import KeywordItem from "./KeywordItem.vue";
import { useForbiddenFilter } from "../composables/word";

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
  console.log(state, text);
  dummyItems.value = dummyItems.value.map((item) => ({
    ...item,
    state: item.text === text ? state : item.state,
  }));
}
function onDelete(text) {
  dummyItems.value = dummyItems.value.filter((item) => item.text !== text);
}

const newKeyword = ref("");
function onChange(e) {
  console.log(e.target.value);
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
  if (newKeyword.value.includes(" ")) {
    return;
  }
  if (useForbiddenFilter("forbidden", newKeyword).length > 0) {
    return;
  }

  dummyItems.value.push({ text: newKeyword.value, state: "none" });
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
  border-bottom: 1px solid hsl(var(--text-100));
  &__Info {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
  }
  &__Input {
    flex-grow: 1;
    font-size: 1.4rem;
    background-color: hsl(var(--bg-100));
    border-radius: 9999px;
    border: 1px solid transparent;
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
  &__List {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    --carousel-padding: 0;
    --carousel-gap: 0.8rem;
    overflow: hidden;
    border-radius: 9999px;
  }
}
@media (hover: hover) and (pointer: fine) {
  .KeywordGenerator {
    &__List {
      border-radius: 0;
    }
  }
}
</style>
