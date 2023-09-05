<template>
  <div class="UpdownReaction">
    <button
      class="UpdownReaction__Button UpdownReaction__Button--Up"
      @click="change(1)"
      :disabled="user?.uid === writer"
    >
      <IconBase>
        <IconArrowNext></IconArrowNext>
      </IconBase>
      <span class="blind">좋아요</span>
    </button>
    <p class="UpdownReaction__CounterClip">{{ updown }}</p>
    <button
      class="UpdownReaction__Button UpdownReaction__Button--Down"
      @click="change(-1)"
      :disabled="user?.uid === writer"
    >
      <IconBase>
        <IconArrowPrev></IconArrowPrev>
      </IconBase>
      <span class="blind">싫어요</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useUpdown } from "@/api/updown";

import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

const props = defineProps({
  parent: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
});

const { updown, Update, Read } = useUpdown({
  id: props.parent,
  writer: props.writer,
});
onMounted(async () => {
  await Read();
});

async function change(number) {
  await Update({ action: number });
  await Read();
}

const store = useStore();
const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.UpdownReaction {
  display: flex;
  align-items: center;

  gap: 0.8rem;
  &__Button {
    color: hsl(var(--text-500));
    transform: rotate(-90deg);

    //시각보정
    &--Up {
      margin-top: 0.2rem;
    }
    &--Down {
      margin-bottom: 0.2rem;
      margin-left: 0.2rem;
    }
    &:disabled {
      color: hsl(var(--text-100));
    }
  }
  &__CounterClip {
    overflow: hidden;
  }
}
</style>
