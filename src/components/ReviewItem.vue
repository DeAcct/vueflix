<template>
  <component
    :is="component"
    :class="[
      'review-item',
      { 'review-item--me': isMe },
      { 'review-item--other': !isMe },
    ]"
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
export default {
  name: "ReviewItem",
  props: {
    rating: {
      type: Number,
    },
    date: {
      type: Object,
    },
    isMe: {
      type: Boolean,
    },
    component: {
      type: String,
      default: "li",
    },
  },
  methods: {
    formatter(origin, digits = 10) {
      let result = String(origin);
      for (let i = digits; i >= 10; i /= 10) {
        if (origin < i) {
          result = `0${result}`;
        } else {
          return result;
        }
      }
      return result;
    },
    deleteTrigger() {
      console.log("dd");
      this.$emit("delete-review");
    },
    editTrigger() {
      this.$emit("edit-review");
    },
  },
  computed: {
    formattedDate() {
      const month = this.date ? this.formatter(this.date.month) : "";
      const date = this.date ? this.formatter(this.date.date) : "";
      const hour = this.date ? this.formatter(this.date.hour) : "";
      const min = this.date ? this.formatter(this.date.min) : "";
      return this.date
        ? `${this.date.year}.${month}.${date} ${hour}:${min}`
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.review-item {
  padding: 1rem 2rem;
  &--me {
    border-radius: 0.6rem;
    background-color: var(--bg-300);
  }
  &--other {
    &:not(:last-child) {
      border-bottom: 1px solid var(--bg-300);
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
