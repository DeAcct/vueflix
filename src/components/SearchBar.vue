<template>
  <label class="SearchBar">
    <i class="SearchBar__Icon">
      <IconBase icon-name="검색">
        <IconSearch />
      </IconBase>
    </i>
    <input type="text" class="SearchBar__Input" :placeholder />
  </label>
</template>

<script setup>
import { computed } from "vue";
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";

const PLACEHOLDER_LIST = [
  "제목, 제작사, 감독 등으로 검색해보세요",
  "나도 이제 어른, 야릇한 이야기",
  "불행 속 마침내 행복을 찾는 이야기",
  "현실에서 못하는 연애 여기서라도",
];
const placeholder = computed(
  () => PLACEHOLDER_LIST[Math.floor(Math.random() * PLACEHOLDER_LIST.length)]
);
</script>

<style lang="scss" scoped>
.SearchBar {
  display: flex;
  align-items: center;
  height: 100%;
  cursor: text;

  &__Icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    color: var(--searchbar-icon-color);
  }
  &__Input {
    flex-grow: 1;
    min-width: 0;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--searchbar-text-color);
    &::placeholder {
      color: var(--searchbar-placeholder-color);
    }
  }
}
</style>
