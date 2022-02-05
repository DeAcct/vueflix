<template>
  <div class="inner result">
    <strong class="guide-text">
      보고싶다
      <i class="icon" role="presentation">
        <icon-base>
          <icon-wanna-see />
        </icon-base>
      </i>
      를 표시한 작품이 아직 없어요
    </strong>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconWannaSee from "./icons/IconWannaSee.vue";
export default {
  name: "BasketTabWanna",
  components: {
    IconBase,
    IconWannaSee,
  },
};
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .guide-text {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--bg-400);
    .icon {
      color: var(--theme-500);
    }
  }
}
</style>
