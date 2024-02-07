<template>
  <main class="Profile">
    <section class="Profile__Item">
      <h2 class="Profile__Title">정보 수정</h2>
      <UserFactory :inject-data="injectData" submit-text="수정" type="edit" />
    </section>
    <section class="Profile__Item">
      <h2 class="Profile__Finding">이 작업을 찾고 있나요?</h2>
      <div class="Profile__Box">
        <strong class="Profile__Recommend">
          실수로 다른 소셜 로그인을 통해 로그인했다면
        </strong>
        <VueflixBtn class="Profile__Button" type="button" component="button">
          <template #text> 다른 계정으로 데이터 옮기기 </template>
        </VueflixBtn>
        <strong class="Profile__Recommend">
          데레와 헤어지고 싶다면 o(TヘTo)
        </strong>
        <VueflixBtn class="Profile__Button" type="button" component="button">
          <template #text>회원 탈퇴</template>
        </VueflixBtn>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useAuth } from "@/store/auth";

// import ProfileSelector from "@/components/ProfileSelector.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import UserFactory from "@/views/UserFactory.vue";

const injectData = ref({
  profileImg: "",
  nickname: "",
});
const auth = useAuth();
const user = computed(() => auth.user);
watch(
  user,
  () => {
    if (!user.value) return;
    injectData.value = {
      profileImg: user.value.profileImg,
      nickname: user.value.nickname,
      email: user.value.email,
    };
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.Profile {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: calc(var(--header-height) + 2rem);
  margin-bottom: 8rem;
  &__Item {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: calc(100% - 4rem);
    margin: 0 auto;
  }
  &__Box {
    border-radius: calc(var(--global-radius) * 2);
    border: 1px solid hsl(var(--bg-300));
    padding: 2rem 1.4rem;
  }
  &__Title {
    width: 100%;
    font-size: 2rem;
    font-weight: 900;
  }
  &__Finding {
    font-size: 1.6rem;
  }
  &__Recommend {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  &__Button {
    box-shadow: none;
    padding: 0;
    color: hsl(var(--theme-500));
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
  &__ImportantText {
    margin-left: 0.4rem;
    font-weight: 700;
  }
}

@media screen and (min-width: 1080px) {
  .Profile {
    gap: 6rem;
    &__Item {
      width: 37.5rem;
    }
  }
}
</style>
