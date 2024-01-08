<template>
  <main class="Auth">
    <div class="Auth__Visual">
      <div class="Auth__Logo">
        <VueflixLogo />
      </div>
      <InteractiveVisual class="Auth__Hero"></InteractiveVisual>
    </div>
    <div class="Auth__PageView">
      <h2 class="Auth__PageTitle">
        {{ route.meta.title }}
      </h2>
      <RouterView v-slot="{ Component }">
        <Transition :name="route.name" :key="route.meta.title">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<script setup>
import VueflixLogo from "@/components/VueflixLogo.vue";
import InteractiveVisual from "@/components/InteractiveVisual.vue";

import { useRoute } from "vue-router";
const route = useRoute();
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
    gap: 1.4rem;
    margin-bottom: 8rem;
    width: min(37.5rem, 100%);
  }
  &__PageTitle {
    font-size: 2rem;
    font-weight: 900;
  }
  &__Visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16rem;
  }
  &__Logo {
    width: 15rem;
    margin-bottom: 3rem;
    fill: hsl(var(--theme-500));
  }
  &__Hero {
    display: none;
  }
}

@media screen and (min-width: 1080px) {
  .Auth {
    justify-content: space-between;

    &__Logo {
      display: none;
    }
    &__Hero {
      display: block;
    }

    &__PageView {
      margin-bottom: 10rem;
    }
  }
}

@keyframes text-animation {
  to {
    background-position-x: right;
  }
}

.login-enter-active,
.login-leave-active,
.sign-up-enter-active,
.sign-up-leave-active {
  transition: all 150ms ease-out;
}

.login-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.sign-up-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.login-leave-to,
.sign-up-leave-to {
  opacity: 0;
}
</style>
