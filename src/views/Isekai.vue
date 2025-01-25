<template>
  <main class="Isekai">
    <h2 class="Isekai__Title">404 Not Found</h2>
    <i class="Isekai__Icon">
      <img :src="aqua" alt="처량하게 우는 코노스바 아쿠아" />
    </i>
    <strong class="Isekai__Text">여긴 아무것도 없어요ㅠㅠ</strong>
    <p class="Isekai__SubText">대신 이 캐릭터가 나오는 애니는 어떠세요?</p>
    <div class="Isekai__CTA">
      <VueflixBtn
        to="#none"
        component="router-link"
        class="Isekai__Button Isekai__Button--Go"
      >
        <template #text>보러가기</template>
      </VueflixBtn>
      <VueflixBtn
        to="/"
        component="router-link"
        class="Isekai__Button Isekai__Button--Home"
      >
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
.Isekai {
  background-color: hsl(var(--bg-100));
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__Title {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  &__Icon {
    width: min(30rem, 50dvw);
    height: min(30rem, 50dvw);
    max-width: 50rem;
    max-height: 50rem;
    overflow: hidden;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
  }
  &__Text {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  &__SubText {
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
  }
  &__CTA {
    display: flex;
    gap: 0.4rem;
  }
  &__Button {
    box-shadow: none;
    font-size: 1.4rem;
    &--Go {
      background-color: hsl(var(--theme-500));
      color: #fff;
      border-radius: 9999px;
    }
  }
}
@media screen and (min-width: 768px) {
  .Isekai {
    &__Title {
      font-size: 3.6rem;
    }
    &__Text {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
    &__SubText {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
