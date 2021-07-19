<template>
  <form class="search-bar">
    <fieldset>
      <legend class="blind">작품 검색</legend>
      <i class="icon"><ion-icon name="search-outline"></ion-icon></i>
      <label for="search-box">작품이나 제작사를 검색해 보세요</label>
      <input type="text" id="search-box" />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="scss" scoped>
.search-bar {
  width: 4rem;
  height: 4rem;
  fieldset {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .icon {
      width: 2rem;
      height: 2rem;
      display: flex;
      font-size: 2rem;
    }
    input {
      position: absolute;
    }
  }
}
</style>
