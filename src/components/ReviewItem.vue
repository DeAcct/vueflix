<template>
  <component
    :is="component"
    :class="[
      'ReviewItem',
      { 'ReviewItem--Me': self },
      { 'ReviewItem--Other': !self },
    ]"
    v-if="isMyReviewShown"
  >
    <div class="row-top">
      <strong class="ReviewItem__Author">
        <template v-if="self">나</template>
        <template v-else> <slot name="author"></slot></template>
      </strong>
      <p class="ReviewItem__Date">{{ formattedDate }}</p>
    </div>
    <p class="ReviewItem__Content">
      <slot name="content"></slot>
    </p>
    <div class="ReviewItem__Actions">
      <button v-if="!self" class="ReviewItem__ActionItem">신고</button>
      <button v-if="self" @click="editTrigger" class="ReviewItem__ActionItem">
        수정
      </button>
      <button v-if="self" @click="deleteTrigger" class="ReviewItem__ActionItem">
        삭제
      </button>
    </div>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  date: {
    type: Object,
  },
  component: {
    type: String,
    default: "li",
  },
  self: {
    type: Boolean,
  },
  isMyReviewShown: {
    type: Boolean,
  },
});

const emit = defineEmits(["delete-review", "edit-review"]);

function deleteTrigger() {
  emit("delete-review");
}
function editTrigger() {
  emit("edit-review");
}

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(props.date.toDate());
});
</script>

<style lang="scss" scoped>
.ReviewItem {
  padding: 1rem 2rem;
  &--Me {
    border-radius: var(--global-radius);
    background-color: hsl(var(--bg-200));
  }
  &--Other {
    &:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-200));
    }
  }
  &__Author {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  &__Date {
    font-size: 1.1rem;
    font-weight: 300;
    margin-right: 0.5rem;
  }
  &__Content {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .row-top {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  &__Actions {
    display: flex;
    align-items: center;
  }
  &__ActionItem {
    color: hsl(var(--text-700));
    font-size: 1.1rem;
    font-weight: 500;
    &:not(:last-child) {
      margin-right: 0.4rem;
      &::after {
        content: "|";
        margin-left: 0.4rem;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .ReviewItem {
    &__Author {
      font-size: 1.7rem;
      margin-right: 1.5rem;
    }
    &__Date {
      font-size: 1.3rem;
    }
    &__Content {
      font-size: 1.5rem;
    }
    &__Actions {
      button {
        font-size: 1.3rem;
      }
    }
    .row-top {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
