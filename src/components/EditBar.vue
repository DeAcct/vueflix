<template>
  <Transition name="show-editmode">
    <div v-if="editmode.on" class="EditBar">
      <strong>{{ editmode.selected.length }}개 선택됨</strong>
      <VueflixBtn
        type="button"
        component="button"
        @click="toggle"
        class="EditBar__Button EditBar__Button--Cancel"
      >
        <template #text>취소</template>
      </VueflixBtn>
      <VueflixBtn
        type="button"
        component="button"
        @click="remove"
        class="EditBar__Button"
        ><template #text>삭제</template></VueflixBtn
      >
      <VueflixBtn
        type="button"
        component="button"
        @click="all"
        class="EditBar__Button"
        ><template #text>전체 삭제</template></VueflixBtn
      >
    </div>
  </Transition>
</template>

<script setup>
import VueflixBtn from "@/components/VueflixBtn.vue";

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
  background-color: hsl(var(--bg-200));
  margin: 0 calc(var(--inner-padding) * -1 * 1px);
  width: 100%;
  gap: 0.4rem;
  padding: {
    top: 0.8rem;
    bottom: 0.8rem;
  }
  font-size: 1.4rem;

  &__Button {
    box-shadow: none;
    border-radius: 9999px;
    background-color: hsl(var(--bg-300));
    border: 1px solid transparent;
    &--Cancel {
      margin-left: auto;
      background-color: transparent;
      border-color: hsl(var(--bg-300));
    }
  }
}

.show-editmode-enter-active,
.show-editmode-leave-active {
  transition: opacity 150ms ease-out;
}

.show-editmode-enter-from,
.show-editmode-leave-to {
  opacity: 0;
}
</style>
