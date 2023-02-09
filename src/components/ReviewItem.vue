<template>
  <component
    :is="component"
    :class="[
      'review-item',
      { 'review-item--me': isMe },
      { 'review-item--other': !isMe },
    ]"
    v-if="isMyReviewShown"
  >
    <div class="row-top">
      <strong class="author" v-if="!isMe">
        <slot name="author"></slot>
      </strong>
      <strong class="author" v-else>나</strong>
      <p class="date">{{ formattedDate }}</p>
    </div>
    <p class="content">
      <slot name="content"></slot>
    </p>
    <div class="interact-area">
      <button v-if="!isMe">신고</button>
      <button v-if="isMe" @click="editTrigger">수정</button>
      <button v-if="isMe" @click="deleteTrigger">삭제</button>
    </div>
  </component>
</template>

<script>
import { numberFormatter } from "../mixins/numberFormatter";

export default {
  name: "ReviewItem",
  props: {
    date: {
      type: Object,
    },
    component: {
      type: String,
      default: "li",
    },
    myUid: {
      type: String,
    },
    uid: {
      type: String,
    },
    isMyReviewShown: {
      type: Boolean,
    },
  },
  mixins: [numberFormatter],
  methods: {
    deleteTrigger() {
      this.$emit("delete-review");
    },
    editTrigger() {
      this.$emit("edit-review");
    },
  },
  computed: {
    formattedDate() {
      const month = this.date ? this.numberFormatter(this.date.month) : "";
      const date = this.date ? this.numberFormatter(this.date.date) : "";
      const hour = this.date ? this.numberFormatter(this.date.hour) : "";
      const min = this.date ? this.numberFormatter(this.date.min) : "";
      return this.date
        ? `${this.date.year}.${month}.${date} ${hour}:${min}`
        : "";
    },
    isMe() {
      return this.myUid === this.uid;
    },
  },
};
</script>

<style lang="scss" scoped>
.review-item {
  padding: 1rem 2rem;
  &--me {
    border-radius: 0.6rem;
    background-color: var(--bg-200);
  }
  &--other {
    &:not(:last-child) {
      border-bottom: 1px solid var(--bg-200);
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
      color: var(--text-700);
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
