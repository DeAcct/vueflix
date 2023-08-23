<template>
  <form
    :class="[
      'search-bar',
      { 'search-bar--open': isOpen },
      { 'search-bar--fill': isScroll },
    ]"
  >
    <fieldset>
      <legend class="blind">작품 검색</legend>
      <label for="검색" class="search-box">
        <i
          class="icon"
          @click="searchBarOpen"
          @focus="searchBarOpen"
          tabindex="0"
        >
          <IconBase icon-name="검색">
            <IconSearch />
          </IconBase>
        </i>
        <input
          type="text"
          id="검색"
          class="input-area"
          ref="$search"
          @input="inputChange"
          @blur="searchBarClose"
        />
        <span
          class="placeholder"
          :class="{ blind: !isOpen }"
          ref="$placeholder"
        >
          제목/제작사/감독으로 검색해보세요
        </span>
      </label>
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from "vue";
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
defineProps({
  isScroll: {
    type: Boolean,
  },
  iconColorDefault: {
    type: String,
  },
  iconColorFill: {
    type: String,
  },
});
const $search = ref(null);
const $placeholder = ref(null);
const isOpen = ref(false);

function searchBarOpen() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    $search.value.blur();
  } else {
    $search.value.focus();
  }
}

function searchBarClose() {
  isOpen.value = false;
  $search.value.value = "";
  $search.value.blur();
  $placeholder.value.textContent = "제목/제작사/감독으로 검색해보세요";
}

const isBlank = ref(true);
const inputValue = ref("");
function inputChange() {
  inputValue.value = $search.value.value;
  isBlank.value = inputValue.value === "";
  if (!isBlank.value) {
    $placeholder.value.textContent = "";
  } else {
    $placeholder.value.textContent = "제목/제작사/감독으로 검색해보세요";
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  width: 3.6rem;
  height: 6rem;
  overflow: hidden;
  position: static;
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 30rem;
    height: 4rem;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.6rem;
      height: 3.6rem;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      transition: 150ms ease-out;
      fill: v-bind("iconColorDefault");
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    .input-area {
      position: absolute;
      width: 0;
      left: 5.6rem;
      height: 3.6rem;
      font-size: 1.3rem;
    }
    .placeholder {
      position: absolute;
      font-size: 1.3rem;
      cursor: text;
    }
  }
  &--open {
    width: 100%;
    background-color: hsl(var(--bg-100));
    position: absolute;
    left: 0;
    top: 0;
    .search-box {
      padding: 0 1rem;
      width: 100vw;
      height: 6rem;
      .input-area {
        width: calc(100vw - 5.6rem);
        background-color: hsl(var(--bg-100));
        padding-right: 2rem;
      }
      .placeholder {
        width: 100%;
        left: 5.6rem;
        right: 1rem;
      }
      .icon {
        color: inherit;
        fill: currentColor;
      }
    }
  }
  &--fill {
    .search-box {
      .icon {
        fill: v-bind("iconColorFill");
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .search-bar {
    transition: width 150ms ease-out;
    border-radius: 0.3rem;
    height: 4rem;
    &--open {
      position: static;
      width: 30rem;
      .search-box {
        background-color: hsl(var(--bg-200));
        width: 30rem;
        height: 4rem;
        padding: 0 1rem;
        .input-area {
          background-color: hsl(var(--bg-200));
          position: static;
          width: 23.4rem;
        }
        .placeholder {
          width: 23.4rem;
          left: auto;
          right: 1rem;
        }
      }
    }
  }
}
</style>
