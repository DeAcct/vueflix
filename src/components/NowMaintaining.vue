<template>
  <main class="now-maintaining">
    <img
      :src="NotFoundAqua"
      alt="처량하게 우는 캐릭터"
      class="now-maintaining__illust"
    />
    <h2 class="now-maintaining__title">점검중!</h2>
    <p class="now-maintaining__description">
      더 나은 뷰플릭스를 위해 점검중이에요! 조금만 기다려주세요!
    </p>
  </main>
</template>

<script>
import NotfoundAqua from "../assets/NotFoundAqua.svg";
export default {
  data() {
    return {
      errorIllust: NotFoundAqua,
    };
  },
};
</script>

<style lang="scss">
.
</style>
