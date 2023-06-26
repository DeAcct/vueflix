<template>
  <component
    :is="component"
    :class="[
      'review-item',
      { 'review-item--me': self },
      { 'review-item--other': !self },
    ]"
    v-if="isMyReviewShown"
  >
    <div class="row-top">
      <strong class="author" v-if="!self">
        <slot name="author"></slot>
      </strong>
      <strong class="author" v-else>나</strong>
      <p class="date">{{ formattedDate }}</p>
    </div>
    <p class="content">
      <slot name="content"></slot>
    </p>
    <div class="interact-area">
      <button v-if="!self">신고</button>
      <button v-if="self" @click="editTrigger">수정</button>
      <button v-if="self" @click="deleteTrigger">삭제</button>
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
.review-item {
  padding: 1rem 2rem;
  &--me {
    border-radius: 0.6rem;
    background-color: hsl(var(--bg-200));
  }
  &--other {
    &:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-200));
    }
  }

  .row-top {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    .author {
      font-size: 1.3rem;
      margin-right: 1rem;
    }
    .date {
      font-size: 1.1rem;
      font-weight: 300;
      margin-right: 0.5rem;
    }
  }
  .content {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .interact-area {
    display: flex;
    align-items: center;

    button {
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
}

@media screen and (min-width: 1080px) {
  .review-item {
    .row-top {
      margin-bottom: 0.5rem;
      .author {
        font-size: 1.7rem;
        margin-right: 1.5rem;
      }
      .date {
        font-size: 1.3rem;
      }
    }
    .content {
      font-size: 1.5rem;
    }
    .interact-area {
      button {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
