<template>
  <a :href="link" class="slide-link">
    <slot></slot>
    <ion-icon name="chevron-forward-outline"></ion-icon>
  </a>
</template>

<script>
export default {
  name: "SlideLink",
  props: ["link"],
};
</script>

<style lang="scss" scoped>
.slide-link {
  padding: 1rem 1.5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 1.5rem;
}
</style>
