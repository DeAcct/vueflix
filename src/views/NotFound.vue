<template>
  <main class="not-found">
    <h2>404 Not Found</h2>
    <i class="icon">
      <img
        src="../assets/NotFoundAqua.svg"
        alt="처량하게 우는 코노스바 아쿠아"
      />
    </i>
    <p>
      <span class="line-break"> 뭔가 잘못 찾아오신 것 같아요ㅠㅠ </span>
      <span class="line-break"> 대신 이 캐릭터가 나오는 애니는 어떠세요? </span>
    </p>
    <div class="btn-area">
      <vueflix-btn to="#none" component="router-link" class="btn--go">
        <template v-slot:text>보러가기</template>
      </vueflix-btn>
      <vueflix-btn to="/" component="router-link" class="btn--home">
        <template v-slot:text>홈으로</template>
      </vueflix-btn>
    </div>
  </main>
</template>

<script>
import VueflixBtn from "../components/VueflixBtn.vue";
export default {
  name: "NotFound",
  components: {
    VueflixBtn,
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
    width: 50vw;
    height: 50vw;
    max-width: 50rem;
    max-height: 50rem;
    overflow: hidden;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 3rem;
    span {
      line-height: 1.5;
    }
  }
  strong {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .btn-area {
    display: flex;
    .btn {
      &--go {
        background-color: var(--theme-500);
        color: #fff;
      }
      &--home {
        background-color: var(--top-item);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .not-found {
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
    }
  }
}
</style>
