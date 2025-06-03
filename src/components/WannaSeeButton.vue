<template>
  <button class="WannaSeeButton" @click="onClickWannaSee" type="button">
    <WannaSeeMotion :checked="wannaSee" />
    <span class="WannaSeeButton__Text" v-if="$slots.text">
      <slot name="text"></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/store/auth";
import { useWannaSee } from "@/api/wannaSee";

import WannaSeeMotion from "@/components/WannaSeeMotion.vue";

const props = defineProps({
  aniTitle: {
    type: String,
    required: true,
  },
});
const _aniTitle = computed(() => props.aniTitle);
const { toggleWannaSee, wannaSee } = useWannaSee(_aniTitle);

const auth = useAuth();
const user = computed(() => auth.user);
const router = useRouter();
function onClickWannaSee() {
  if (!user.value) {
    router.push("/auth");
    return;
  }
  toggleWannaSee();
}
</script>

<style lang="scss" scoped>
.WannaSeeButton {
  &__Text {
    color: inherit;
    font-size: inherit;
  }
}
</style>
