<template>
  <section class="LoginWidget">
    <div class="col-left">
      <slot name="profile-img"></slot>
      <div class="text-area">
        <slot name="text"></slot>
      </div>
    </div>
    <VueflixBtn class="widget" component="button" @click="btnFunc">
      <template #text>
        <slot name="login-state-text"></slot>
      </template>
    </VueflixBtn>
  </section>
</template>

<script setup>
import VueflixBtn from "../components/VueflixBtn.vue";

defineProps({
  btnFunc: {
    type: Function,
  },
});
</script>

<style lang="scss">
.LoginWidget {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: {
    top: 2rem;
    bottom: 2rem;
  }
  .col-left {
    display: flex;
    align-items: center;
  }
  .ProfileImg {
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1rem;
    border: 1.8px solid transparent;
    &--male {
      border-color: hsl(var(--gender-male));
    }
    &--female {
      border-color: hsl(var(--gender-female));
    }
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }

  .btn {
    border-radius: 9999px;
    background-color: hsl(var(--theme-500));
    color: #fff;
  }
}
</style>
