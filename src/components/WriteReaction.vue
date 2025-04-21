<template>
  <form class="WriteReaction" @submit.prevent>
    <!-- <KeywordGenerator :user v-if="type === 'review'" /> -->
    <div class="WriteReaction__TextReview">
      <textarea
        :placeholder
        class="WriteReaction__InputArea"
        @input="setReviewData"
        @focus="setFocus"
        @blur="setBlur"
        ref="$TextArea"
        :value="reviewData"
        :disabled="!props.user"
      />
      <div class="WriteReaction__Interaction">
        <div class="WriteReaction__Status">
          <strong class="WriteReaction__Length"
            >{{ reviewData.length || 0 }}/1000</strong
          >
          <p
            v-if="reviewData.length > 1000"
            class="WriteReaction__TooLongAlert"
          >
            너무 길어요!
          </p>
        </div>
        <div class="WriteReaction__BtnArea">
          <button
            class="WriteReaction__Button WriteReaction__Button--AddTime"
            @click="addTime"
            v-if="type === 'comment'"
            type="button"
          >
            재생 위치 추가
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSecToFormat } from "@/composables/formatter";

const emits = defineEmits(["mutate", "interact"]);

const props = defineProps({
  time: {
    type: [String, Number],
    required: false,
  },
  user: {
    type: Object,
    required: false,
  },
});

function setBlur() {
  emits("interact", false);
}
function setFocus() {
  emits("interact", true);
}

const placeholder = computed(() =>
  props.user
    ? "여기를 눌러 작성하세요"
    : "리뷰를 작성하려면 먼저 로그인을 해주세요"
);

const reviewData = defineModel();

function setReviewData(e) {
  // 한글 특성상 v-model 사용불가
  reviewData.value = e.target.value;
}

const $TextArea = ref(null);
function addTime() {
  const [start, end] = [
    $TextArea.value.selectionStart,
    $TextArea.value.selectionEnd,
  ];
  $TextArea.value.setRangeText(
    ` ${useSecToFormat(props.time)} `,
    start,
    end,
    "select"
  );
  reviewData.value = $TextArea.value.value;
}
</script>

<style lang="scss" scoped>
.WriteReaction {
  width: 100%;

  &__InputArea {
    width: 100%;
    min-height: 9rem;
    resize: none;
    font-family: inherit;
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0 1rem;
    padding: 0 2rem 0;
    field-sizing: content;
    &::placeholder {
      color: hsl(var(--bg-700));
      font-weight: 500;
    }
  }

  &__Interaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 2rem;
  }

  &__Status {
    display: flex;
    gap: 1.2rem;
  }
  &__Length {
    display: block;
    color: hsl(var(--bg-500));
    font-size: 1.4rem;
    font-weight: 500;
  }
  &__TooLongAlert {
    color: hsl(var(--theme-500));
    font-size: 1.4rem;
    font-weight: 700;
    animation: blink 500ms ease-out 3;
    transform-origin: left;
  }

  &__BtnArea {
    display: flex;
    gap: var(--global-radius);
  }
  &__Button {
    background: hsl(var(--bg-400));
    color: hsl(var(--text-900));
    box-shadow: none;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 0 1.6rem;
    border-radius: 9999px;
    position: relative;
    height: 4rem;
    &--Submit {
      background: hsl(var(--theme-500));
      color: #fff;
    }
    &:disabled {
      background: hsl(var(--bg-300));
      color: hsl(var(--bg-900) / 0.3);
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
