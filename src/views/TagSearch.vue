<template>
  <div class="wrap">
    <main>
      <!--div class="inner">
        <h2>총 <span class="number">1,708</span>개의 작품이 검색되었습니다</h2>
        <ul class="result-items">
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
          <li class="result-item"></li>
        </ul>
      </div>
      <div class="controller">
        <ul class="tag-items"></ul>
        <button class="selector-open-btn">필터</button>
      </div>
      <div class="selector">
        <ul class="categories">
          <li class="category">
            <span>장르</span>
            <ul class="tags">
              <li class="tag">
                <label for="BL"><input type="checkbox" name="genre" id="BL">BL</label>
              </li>
            </ul>
          </li>
        </ul>
      </div-->
      <div class="inner">
        <poster-list></poster-list>
        <controller></controller>
      </div>
    </main>
  </div>
</template>

<script>
import PosterList from "../components/PosterList.vue";
import Controller from "../components/Controller.vue";
export default {
  name: "TagSearch",
  components: {
    PosterList,
    Controller,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 10rem 0 8.6rem;
  .controller {
    position: fixed;
    left: 0;
    bottom: 5rem;
  }
}

@media screen and (min-width: 769px) {
  main .controller {
    position: fixed;
    bottom: auto;
    top: 6rem;
  }
}
</style>
