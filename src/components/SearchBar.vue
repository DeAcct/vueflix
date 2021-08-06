<template>
  <form class="search-bar" :class="{ open: isOpen }">
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
      this.$refs.search.blur();
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
  height: 4rem;
  border-radius: 0.3rem;
  overflow: hidden;
  transition: width 150ms ease-out;
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
      width: 0;
      height: 3.6rem;
      font-size: 1.3rem;
    }
    .placeholder {
      position: absolute;
      font-size: 1.3rem;
      cursor: text;
    }
  }
  &.open {
    width: 30rem;
    border: 1px solid hsl(0, 0%, 87%);
    .search-box {
      background-color: #fff;
      padding: 0 1rem;
      .input-area {
        width: 23.4rem;
      }
      .placeholder {
        width: 23.4rem;
        left: auto;
        right: 1rem;
      }
      .icon {
        color: inherit;
      }
    }
  }
}
.fill .search-bar .search-box .icon {
  color: inherit;
  &:hover {
    background-color: var(--theme-100);
    color: var(--theme-500);
  }
}
</style>
