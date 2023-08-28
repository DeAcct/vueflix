<template>
  <label class="SearchBar">
    <i class="SearchBar__Icon">
      <IconBase icon-name="검색">
        <IconSearch />
      </IconBase>
    </i>
    <input
      type="text"
      class="SearchBar__Input"
      placeholder="제목/제작사/감독으로 검색해보세요"
    />
  </label>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
</script>

<style lang="scss" scoped>
.SearchBar {
  display: flex;
  align-items: center;
  height: 100%;

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
