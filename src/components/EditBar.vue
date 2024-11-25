<template>
  <TransitionGroup tag="div" class="EditBar" name="edit-bar">
    <VueflixBtn
      class="EditBar__Button EditBar__Button--Toggle"
      @click="toggle"
      type="button"
      component="button"
      v-if="!editmode.on"
    >
      <template #icon>
        <IconBase>
          <IconRemove></IconRemove>
        </IconBase>
      </template>
    </VueflixBtn>
    <template v-else>
      <VueflixBtn
        type="button"
        component="button"
        @click="toggle"
        class="EditBar__Button"
      >
        <template #text>취소</template>
      </VueflixBtn>
      <VueflixBtn
        type="button"
        component="button"
        @click="all"
        class="EditBar__Button"
        ><template #text>전체 선택</template></VueflixBtn
      >
      <VueflixBtn
        type="button"
        component="button"
        @click="remove"
        class="EditBar__Button EditBar__Button--Remove"
        :disabled="!editmode.selected.size"
        ><template #text>삭제</template></VueflixBtn
      >
    </template>
  </TransitionGroup>
</template>

<script setup>
import VueflixBtn from "@/components/VueflixBtn.vue";

import IconBase from "@/components/IconBase.vue";
import IconRemove from "@/components/icons/IconRemove.vue";

const props = defineProps({
  editmode: Object,
  toggle: Function,
  remove: Function,
  all: Function,
});
</script>

<style lang="scss" scoped>
.EditBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--bg-200));
  gap: 0.4rem;
  padding: 0.4rem;
  border-radius: 9999px;

  &__Counter {
    text-wrap: nowrap;
    font-size: 1.2rem;
    font-variant-numeric: tabular-nums;
    margin: {
      left: 0.8rem;
      right: 0.8rem;
    }
  }

  &__Button {
    font-size: 1.6rem;
    height: 100%;
    box-shadow: none;
    border-radius: 9999px;
    background-color: transparent;
    border: 1px solid hsl(var(--bg-300));
    text-wrap: nowrap;
    background-color: hsl(var(--bg-300));
    border-color: hsl(var(--bg-300));
    transition: 300ms cubic-bezier(0.22, 1, 0.36, 1);
    &--Remove {
      background-color: hsl(var(--theme-500));
      border-color: hsl(var(--theme-500));
      color: #fff;
      &:disabled {
        background-color: hsl(var(--bg-300));
        border-color: hsl(var(--bg-300));
        color: hsl(var(--text-400));
      }
    }
  }
}

.edit-bar-move,
.edit-bar-enter-active,
.edit-bar-leave-active {
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
}
.edit-bar-enter-from,
.edit-bar-leave-to {
  opacity: 0;
  scale: 0;
}
.edit-bar-leave-active {
  position: absolute;
  z-index: -1;
}
</style>
