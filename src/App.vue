<template>
  <router-view v-slot="{ Component }">
    <vueflix-header></vueflix-header>
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<script>
import VueflixHeader from "./components/VueflixHeader.vue";
export default {
  name: "App",
  components: {
    VueflixHeader,
  },
};
</script>

<style lang="scss">
@import url("./common.scss");

.fade-enter-active,
.fade-leave-active {
  transition: all 100ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
