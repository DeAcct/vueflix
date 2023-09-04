<template>
  <form class="WriteReaction">
    <textarea
      :placeholder="placeholder"
      class="WriteReaction__InputArea"
      :disabled="!user"
      @input="setReviewData"
      ref="reviewTextArea"
      :value="reviewData"
    />
    <div class="WriteReaction__Interaction">
      <div class="WriteReaction__Status">
        <strong class="WriteReaction__Length"
          >{{ reviewData.length || 0 }}/300</strong
        >
        <p v-if="reviewData.length > 300" class="WriteReaction__TooLongAlert">
          너무 길어요!
        </p>
      </div>
      <div class="WriteReaction__BtnArea">
        <button
          :disabled="reviewData.length > 300 || reviewData.length === 0"
          @click="reviewTrigger"
          class="WriteReaction__Button WriteReaction__Button--Submit"
          type="button"
        >
          등록
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { REACTION_ENUM_WITH_PARTICLE } from "@/enums/Reaction";
import { ref, computed } from "vue";
import { useReaction } from "@/api/reaction";

const props = defineProps({
  user: {
    type: Object,
  },
  type: {
    type: String,
    required: true,
    validator(value) {
      return Object.keys(REACTION_ENUM_WITH_PARTICLE).includes(value);
    },
  },
  parent: {
    type: String,
  },
});

const placeholder = computed(() => {
  if (!props.user) {
    return `${
      REACTION_ENUM_WITH_PARTICLE[props.type]
    } 남기려면 먼저 로그인을 해주세요`;
  }
  return `여기를 눌러 ${REACTION_ENUM_WITH_PARTICLE[props.type]} 작성하세요`;
});

const reviewData = ref("");
function setReviewData(e) {
  // 한글 특성상 v-model 사용불가
  reviewData.value = e.target.value;
}

const { Create } = useReaction({ type: props.type, parent: props.parent });
const emits = defineEmits(["mutate"]);
async function reviewTrigger() {
  await Create({ content: reviewData.value });
  emits("mutate");
  reviewData.value = "";
}
</script>

<style lang="scss" scoped>
.WriteReaction {
  width: 100%;
  &__InputArea {
    width: 100%;
    height: 9rem;
    resize: none;
    font-family: inherit;
    background-color: transparent;
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    &::placeholder {
      color: var(--bg-400);
      font-weight: 500;
    }
  }

  &__Interaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__Status {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__Length {
    display: block;
    color: hsl(var(--bg-400));
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  &__TooLongAlert {
    color: hsl(var(--theme-500));
    font-size: 1.2rem;
    font-weight: 700;
    animation: blink 500ms ease-out 3;
    transform-origin: left;
  }

  &__BtnArea {
    display: flex;
  }
  &__Button {
    border-radius: 2rem;
    background-color: hsl(var(--theme-500));
    color: #fff;
    border-radius: var(--global-radius);
    box-shadow: none;
    font-weight: 500;
    font-size: 1.5rem;
    padding: 0.8rem 1.2rem;
    &:disabled {
      background-color: hsl(var(--theme-200));
    }
    &--Cancel {
      background-color: transparent;
      color: hsl(var(--text-700));
    }
    &--Submit {
      background-color: hsl(var(--theme-500));
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@media screen and (min-width: 1080px) {
  .WriteReaction {
    &__InputArea {
      font-size: 1.5rem;
    }
  }
}
</style>
