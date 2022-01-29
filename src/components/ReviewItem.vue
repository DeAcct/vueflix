<template>
  <li class="review-item inner">
    <div class="row-top">
      <strong class="author">
        <slot name="author"></slot>
      </strong>
      <star-graph :rating="rating" />
    </div>
    <p class="content">
      <slot name="content"></slot>
    </p>
    <div class="interact-area">
      <p class="date">{{ date }}</p>
      <button>신고</button>
      <button>삭제</button>
    </div>
  </li>
</template>

<script>
import StarGraph from "./StarGraph.vue";
export default {
  name: "ReviewItem",
  components: {
    StarGraph,
  },
  props: {
    rating: {
      type: Number,
    },
    date: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.review-item {
  padding: {
    top: 1rem;
    bottom: 1rem;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--bg-100);
  }
  .row-top {
    display: flex;
    align-items: center;
    .author {
      font-size: 1.3rem;
      margin-right: 1rem;
    }
    .star-graph {
      width: 6rem;
    }
    margin-bottom: 0.5rem;
  }
  .content {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .interact-area {
    display: flex;
    align-items: center;
    .date {
      font-size: 1.1rem;
      margin-right: 0.5rem;
    }
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
</style>
