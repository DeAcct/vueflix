<template>
  <main class="not-found">
    <h2>404 Not Found</h2>
    <i class="icon">
      <img src="../assets/NotFoundAqua.svg" alt="처량하게 우는 캐릭터" />
    </i>
    <p>뭔가 잘못 찾아오신 것 같아요ㅠㅠ</p>
    <vueflix-route-btn bg="var(--theme-500)" text-color="#fff">
      찰지게 우는 캐릭터 보러가기
    </vueflix-route-btn>
  </main>
</template>

<script>
import VueflixRouteBtn from "../components/VueflixRouteBtn.vue";
export default {
  name: "NotFound",
  components: {
    VueflixRouteBtn,
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 6rem;
  height: calc(100vh - 5.6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  .icon {
    width: 19.2rem;
    height: 19.2rem;
    overflow: hidden;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5rem;
  }
}
</style>
