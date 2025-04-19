<template>
  <component :is="component" class="ReactionItem" ref="$Item">
    <slot name="meta" :self :data="meta" :time></slot>
    <div class="ReactionItem__Content">
      <slot name="content"></slot>
    </div>
    <div class="ReactionItem__Actions" v-if="actions">
      <UpdownReaction
        :parent="reactionData._id"
        :writer="reactionData.uid"
        class="ReactionItem__Updown"
      />
      <div class="ReactionItem__SubActions">
        <button v-if="!self" class="ReactionItem__ActionItem" type="button">
          신고
        </button>
        <template v-else>
          <button
            @click="editTrigger"
            class="ReactionItem__ActionItem"
            type="button"
          >
            {{ mode === "show" ? "수정" : "취소" }}
          </button>
          <button
            @click="deleteTrigger"
            class="ReactionItem__ActionItem"
            type="button"
          >
            삭제
          </button>
        </template>
      </div>
    </div>
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { REACTION_ENUM_WITH_JOSA } from "@/enums/Reaction";

import { useAuth } from "@/store/auth";
import { useUserMeta } from "@/api/userMeta";
import { useFormatDate } from "@/composables/formatter";

import UpdownReaction from "@/components/UpdownReaction.vue";

const placeholder = computed(
  () =>
    `수정할 ${REACTION_ENUM_WITH_JOSA[props.reactionData.type]} 입력해 주세요.${
      props.reactionData.type === "comment"
        ? "\n시간:분:초 형식으로 작성하면 애니 시간을 첨부할 수 있어요!"
        : ""
    }`
);

const props = defineProps({
  reactionData: {
    type: Object,
  },
  component: {
    type: String,
    default: "li",
  },
  user: {
    type: Object,
  },
  actions: {
    type: Boolean,
  },
  trackTarget: {
    type: Boolean,
  },
});
const self = computed(() => props.user?.uid === props.reactionData.uid);
const meta = useUserMeta(props.reactionData.uid);
const { date: time } = useFormatDate(props.reactionData.time.toDate());

const mode = ref("show");
function editTrigger() {
  emits("edit");
}
function deleteTrigger() {
  emits("delete");
}
const emits = defineEmits(["edit", "meta-modal"]);

const auth = useAuth();

// query에 있는 댓글의 id를 통헤 해당 위치로 바로 이동
const $Item = ref(null);
onMounted(() => {
  if (!props.trackTarget) {
    return;
  }
  const commentPosition = $Item.value.getBoundingClientRect().top;
  window.scrollTo({
    top: commentPosition,
    behavior: "smooth",
  });
});
</script>

<style lang="scss" scoped>
.ReactionItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__Content {
    margin: 1.4rem 0 0.4rem;
    position: relative;
    width: 100%;
    font-size: 1.4rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &__EditInput {
    overflow-y: scroll;
    line-height: 1.5;
    width: 100%;
    height: 12rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: inherit;
    background-color: hsl(var(--bg-200));
    border-radius: calc(var(--global-radius) - 1px);
    padding: 1.2rem 1.6rem;
    margin-bottom: 0.6rem;
    &::placeholder {
      font-size: 1.4rem;
      color: hsl(var(--bg-700));
    }
  }
  &__Updown {
    --updown-font-size: 1.6rem;
  }

  &__Actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-top: 1.2rem;
  }
  &__Subreactions {
    display: flex;
  }
  &__SubActions {
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 0.4rem;
    align-self: flex-end;
  }
  &__ActionItem {
    font-size: 1.6rem;
    font-weight: 600;
    box-shadow: none;
    padding: 0 1.6rem;
    border-radius: 9999px;
    height: 4rem;
    background-color: hsl(var(--bg-200));
    &:disabled {
      background-color: hsl(var(--text-900) / 0.05);
      color: hsl(var(--text-300));
    }
    &--Submit {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
  }
}

.down-fade-enter-active,
.down-fade-leave-active {
  transition: height 150ms ease;
}

.down-fade-enter-from,
.down-fade-leave-to {
  height: 0;
  opacity: 0;
}

@media screen and (min-width: 1080px) {
  .ReactionItem {
    &__Content {
      font-size: 1.5rem;
    }
    .row-top {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
