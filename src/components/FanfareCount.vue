<template>
  <div class="FanfareCount">
    <canvas class="FanfareCount__Effect" ref="$canvas"></canvas>
    <div class="FanfareCount__Number">
      {{ count }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFanfare } from "@/composables/canvas";

const { $canvas, init } = useFanfare({
  amount: 100,
  colors: [
    "240 159 144",
    "242 204 182",
    "240 154 148",
    "176 82 95",
    "197 130 122",
  ],
});

// init($canvas.value);
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.FanfareCount {
  &__Effect {
    touch-action: none;
  }
  &__Number {
    position: fixed;
  }
}
</style>
