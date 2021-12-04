<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  name: "anime",
  mounted() {
    document.title = this.$route.params.id;
  },
};
</script>

<style lang="scss" scoped>
div {
  padding-top: 6rem;
  font-size: 3rem;
  font-weight: 900;
}
</style>
