<template>
  <main class="app-isekai">
    <h2>404 Not Found</h2>
    <i class="icon">
      <img :src="aqua" alt="처량하게 우는 코노스바 아쿠아" />
    </i>
    <p>
      <span class="line-break">여긴 아무것도 없어요ㅠㅠ</span>
      <span class="line-break">대신 이 캐릭터가 나오는 애니는 어떠세요?</span>
    </p>
    <div class="btn-area">
      <VueflixBtn to="#none" component="router-link" class="btn--go">
        <template #text>보러가기</template>
      </VueflixBtn>
      <VueflixBtn to="/" component="router-link" class="btn--home">
        <template #text>홈으로</template>
      </VueflixBtn>
    </div>
  </main>
</template>

<script setup>
import aqua from "@/assets/aqua.svg";
import VueflixBtn from "@/components/VueflixBtn.vue";
</script>

<style lang="scss" scoped>
.app-isekai {
  background-color: hsl(var(--bg-100));
  height: 100vh;
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
        background-color: hsl(var(--theme-500));
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
  .app-isekai {
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
    }
  }
}
</style>
