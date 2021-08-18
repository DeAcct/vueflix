<template>
  <div class="controller" :class="{ open: isOpen }">
    <span class="swipe-indi"></span>
    <div class="top-row">
      <strong>선택된 태그</strong>
    </div>
    <div class="bottom-row">
      <div class="tags-container">
        <strong>포함할 태그</strong>
        <ul class="tags">
          <tag-item>로맨스</tag-item>
        </ul>
      </div>
      <div class="tags-container">
        <strong>포함하지 않을 태그</strong>
        <ul class="tags">
          <tag-item>특촬물</tag-item>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import TagItem from "./TagItem.vue";
export default {
  name: "Controller",
  components: {
    TagItem,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.controller {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem 2rem 2.6rem;
  background-color: var(--text-100);
  border-radius: 0.6rem 0.6rem 0 0;
  .swipe-indi {
    align-self: center;
    width: 5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--text-300);
  }
  .top-row {
    display: flex;
    justify-content: flex-start;
    strong {
      font-size: 1.6rem;
    }
    .func-btn {
      padding: 0.8rem 1rem;
    }
  }
}
</style>
