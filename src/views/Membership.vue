<template>
  <div class="wrap">
    <h2>멤버십</h2>
  </div>
</template>

<script>
export default {
  name: "Membership",
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("deviceorientation", function (e) {
      console.log(
        `세로(y축)기준 회전값: ${e.gamma}, 가로(x축)기준 회전값: ${e.beta}`
      );
    });
  },
};
</script>

<style lang="scss"></style>
