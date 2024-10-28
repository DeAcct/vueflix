<template>
  <form class="WriteReaction">
    <textarea
      :placeholder
      class="WriteReaction__InputArea"
      :disabled="!user"
      @input="setReviewData"
      @focus="setFocus"
      @blur="setBlur"
      ref="$TextArea"
      :value="reviewData"
    />
    <div class="WriteReaction__Interaction">
      <div class="WriteReaction__Status">
        <strong class="WriteReaction__Length"
          >{{ reviewData.length || 0 }}/1000</strong
        >
        <p v-if="reviewData.length > 1000" class="WriteReaction__TooLongAlert">
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
  </form>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";
import { useAuth } from "@/store/auth";
import { useSecToFormat } from "@/composables/formatter";
import { REACTION_ENUM_WITH_JOSA } from "@/enums/Reaction";
// import { useAutoSave } from "../composables/autosave";

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
  // reviewData.value += ` ${useSecToFormat(props.time)}`;

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
    height: 9rem;
    resize: none;
    font-family: inherit;
    background-color: transparent;
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    &::placeholder {
      color: hsl(var(--bg-700));
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
    gap: 0.2rem;
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
    &:first-child {
      border-radius: var(--global-radius) 0 0 var(--global-radius);
    }
    &:last-child {
      border-radius: 0 var(--global-radius) var(--global-radius) 0;
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
