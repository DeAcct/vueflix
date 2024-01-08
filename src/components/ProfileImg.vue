<template>
  <img
    :src="src || NotFoundAqua"
    :alt
    :class="{ 'loading-target': loading }"
    class="ProfileImg"
    @load="onLoad"
  />
</template>

<script setup>
import { ref } from "vue";
import NotFoundAqua from "@/assets/aqua.svg";

defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: "프로필 사진",
  },
});

const loading = ref(true);
function onLoad() {
  loading.value = false;
}

// const store = useStore();
// const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.ProfileImg {
  border-radius: 50%;
  object-fit: cover;
}
</style>
