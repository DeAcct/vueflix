<template>
  <form
    :class="[
      'search-bar',
      { 'search-bar--open': isOpen },
      { 'search-bar--fill': isScroll || !isHome },
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
          <icon-base iconName="검색">
            <icon-search />
          </icon-base>
        </i>
        <input
          type="text"
          id="검색"
          class="input-area"
          ref="search"
          @input="inputChange"
          @blur="searchBarClose"
        />
        <span class="placeholder" :class="{ blind: !isOpen }" ref="placeholder">
          제목/제작사/감독으로 검색해보세요
        </span>
      </label>
    </fieldset>
  </form>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
export default {
  name: "SearchBar",
  components: {
    IconBase,
    IconSearch,
  },
  props: {
    isScroll: {
      type: Boolean,
    },
    isHome: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
      isBlank: true,
      inputValue: "",
    };
  },
  methods: {
    searchBarOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$refs.search.blur();
      } else {
        this.$refs.search.focus();
      }
    },
    searchBarClose() {
      this.isOpen = false;
      this.$refs.search.value = "";
      this.$refs.search.blur();
      this.$refs.placeholder.textContent = "제목/제작사/감독으로 검색해보세요";
    },
    inputChange() {
      this.inputValue = this.$refs.search.value;
      this.isBlank = this.inputValue === "";
      if (!this.isBlank) {
        this.$refs.placeholder.textContent = "";
      } else {
        this.$refs.placeholder.textContent =
          "제목/제작사/감독으로 검색해보세요";
      }
    },
  },
};
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
      color: #fff;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      transition: background-color 150ms ease-out;
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

    position: absolute;
    left: 0;
    top: 0;
    .search-box {
      background-color: #fff;
      padding: 0 1rem;
      width: 100vw;
      height: 6rem;
      .input-area {
        width: calc(100vw - 5.6rem);
        padding-right: 2rem;
      }
      .placeholder {
        width: 100%;
        left: 5.6rem;
        right: 1rem;
      }
      .icon {
        color: inherit;
      }
    }
  }
  &--fill .search-box .icon {
    color: var(--text-800);
  }
}
@media screen and (min-width: 769px) {
  .search-bar {
    transition: width 150ms ease-out;
    border-radius: 0.3rem;
    height: 4rem;
    &--open {
      border: 1px solid var(--bg-200);
      position: static;
      width: 30rem;
      .search-box {
        width: 30rem;
        height: 4rem;
        background-color: #fff;
        padding: 0 1rem;
        .input-area {
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
