<template>
  <form class="WriteReaction" @submit.prevent>
    <KeywordGenerator :user v-if="type === 'review'" />
    <div class="WriteReaction__TextReview">
      <textarea
        :placeholder="placeholder"
        class="WriteReaction__InputArea"
        :disabled="!user"
        @input="setReviewData"
        @focus="setFocus"
        @blur="setBlur"
        ref="$TextArea"
        :value="reviewData"
        @keydown="saveAction"
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
          <button
            :disabled="reviewData.length > 1000 || reviewData.length === 0"
            @click="reviewTrigger"
            class="WriteReaction__Button WriteReaction__Button--Submit"
            type="button"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";

import { useAuth } from "@/store/auth";
import { useSecToFormat } from "@/composables/formatter";
import { REACTION_ENUM_WITH_JOSA } from "@/enums/Reaction";

import KeywordGenerator from "@/components/KeywordGenerator.vue";

const emits = defineEmits(["mutate", "interact"]);

const props = defineProps({
  user: {
    type: Object,
  },
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review"].includes(value);
    },
  },
  parent: {
    type: Object,
  },
  time: {
    type: [String, Number],
    required: false,
  },
});

function setBlur() {
  emits("interact", false);
}
function setFocus() {
  emits("interact", true);
}

const placeholder = computed(() => {
  if (!props.user) {
    return `${
      REACTION_ENUM_WITH_JOSA[props.type]
    } 남기려면 먼저 로그인을 해주세요`;
  }
  return `여기를 눌러 ${REACTION_ENUM_WITH_JOSA[props.type]} 작성하세요.`;
});

const reviewData = ref("");
function setReviewData(e) {
  // 한글 특성상 v-model 사용불가
  reviewData.value = e.target.value;
}
function saveAction(e) {
  if (e.key === "s" && e.ctrlKey) {
    e.preventDefault();
    forceSave();
  }
}

const auth = useAuth();
const user = computed(() => auth.user);
function reviewTrigger() {
  emits("mutate", "create", {
    content: reviewData.value,
    parent: props.parent,
    user,
    type: props.type,
  });
  reviewData.value = "";
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
  border-radius: var(--global-radius);
  background-color: var(--reaction-combo-write-bg, hsl(var(--bg-200)));

  &__InputArea {
    width: 100%;
    height: 9rem;
    resize: none;
    font-family: inherit;
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0 1rem;
    padding: 0 2rem 0;
    &::placeholder {
      color: hsl(var(--bg-700));
      font-weight: 500;
    }
  }

  &__TextReview {
    border: 2px solid transparent;
    background-color: hsl(var(--bg-100));
    border-radius: var(--global-radius);
    box-shadow: 0 0.1rem 0.2rem hsl(var(--bg-900) / 0.1),
      0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1);
    &:focus-within {
      border-color: hsl(var(--theme-500));
      box-shadow: 0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1),
        0 0.4rem 0.8rem hsl(var(--bg-900) / 0.1),
        0 0.8rem 1.6rem hsl(var(--bg-900) / 0.1);
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
    flex-direction: column;
    justify-content: center;
  }
  &__Length {
    display: block;
    color: hsl(var(--bg-500));
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
    gap: var(--global-radius);
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__Button {
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    color: hsl(var(--text-900));
    box-shadow: none;
    font-weight: 500;
    font-size: 1.5rem;
    padding: 0.8rem 1.2rem;
    position: relative;
    &--Submit {
      background: linear-gradient(
        150deg,
        hsl(var(--theme-500) / 0.5),
        hsl(var(--theme-500) / 0.025)
      );
    }
    &:disabled {
      background: linear-gradient(
        150deg,
        hsl(var(--bg-900) / 0.2),
        hsl(var(--bg-900) / 0.025)
      );
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
