<template>
  <main class="Auth">
    <div class="Auth__Visual">
      <div class="Auth__Logo">
        <VueflixLogo />
      </div>
      <InteractiveVisual class="Auth__Hero" :ani-list></InteractiveVisual>
    </div>
    <div class="Auth__PageView">
      <div class="Auth__ViewController">
        <button
          type="button"
          class="SignUp__Back"
          @click="router.back()"
          v-if="route.name === 'sign-up'"
        >
          <IconBase>
            <IconArrowPrev />
          </IconBase>
        </button>
        <h2 class="Auth__PageTitle">
          {{ route.meta.title }}
        </h2>
      </div>
      <RouterView v-slot="{ Component }">
        <Transition :name="route.name">
          <component :is="Component" :key="route.meta.title"></component>
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import VueflixLogo from "@/components/VueflixLogo.vue";
import InteractiveVisual from "@/components/InteractiveVisual.vue";

import IconBase from "@/components/IconBase.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";
import { useAuth } from "@/store/auth";
import { onMounted, watch } from "vue";
import { getAuth } from "firebase/auth";

const route = useRoute();
const router = useRouter();

const auth = useAuth();
watch(
  () => auth.user,
  () => {
    if (auth.user) {
      router.back();
    }
  }
);

const aniList = [
  "메탈릭 루쥬",
  "장송의 프리렌",
  "소녀혁명 우테나",
  "신세기 에반게리온",
];

onMounted(() => {
  // 이미 로그인한 상태라면 잘못된 접근이다.
  const auth = getAuth();
  if (auth.currentUser) {
    router.back();
  }
});
</script>

<style lang="scss" scoped>
.Auth {
  position: relative;
  height: calc(var(--vh) * 100 * 1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__LoadingSpinner {
    position: absolute;
    z-index: 100;
    width: 2.4rem;
    height: 2.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-3.2rem, -3.2rem);
  }
  &__PageView {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    margin-bottom: 8rem;
    width: calc(100% - 4rem);
  }
  &__ViewController {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  &__PageTitle {
    font-size: 2rem;
    font-weight: 900;
  }
  &__Visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    width: min(calc(100% - 4rem), 1080px);
  }
  &__Logo {
    width: 15rem;
    margin-bottom: 3rem;
    fill: hsl(var(--theme-500));
  }

  &__Hero {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .Auth {
    &__Logo {
      display: none;
    }
  }
}

@media screen and (min-width: 1080px) {
  .Auth {
    justify-content: space-between;

    &__Logo {
      display: none;
    }

    &__PageView {
      width: 37.5rem;
      margin-bottom: 10rem;
    }
  }
}

.login-enter-active,
.login-leave-active,
.sign-up-enter-active,
.sign-up-leave-active {
  transition: all 300ms ease-out;
}

.login-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.sign-up-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.login-leave-active,
.sign-up-leave-active {
  display: none !important;
}
</style>
