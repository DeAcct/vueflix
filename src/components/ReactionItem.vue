<template>
  <component :is="component" class="ReactionItem" ref="$Item">
    <slot name="meta" :self :data="meta" :time></slot>
    <div class="ReactionItem__Content">
      <Transition name="down-fade">
        <template v-if="mode === 'edit'">
          <div class="ReactionItem__EditWrap">
            <textarea
              class="ReactionItem__EditInput"
              :placeholder="placeholder"
              :value="editValue"
              @input="editValueChange"
            />
          </div>
        </template>
      </Transition>
      <Transition name="fade">
        <template v-if="mode === 'show'">
          <slot name="content"></slot>
        </template>
      </Transition>
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
        <button
          v-if="self"
          @click="editTrigger"
          class="ReactionItem__ActionItem"
          type="button"
        >
          {{ mode === "show" ? "수정" : "취소" }}
        </button>
        <button
          v-if="mode === 'edit'"
          @click="updateReaction"
          class="ReactionItem__ActionItem ReactionItem__ActionItem--Submit"
          :disabled="!editValue || notEdited"
          type="button"
        >
          수정
        </button>
        <button
          v-if="self && mode === 'show'"
          @click="deleteTrigger"
          class="ReactionItem__ActionItem"
          type="button"
        >
          삭제
        </button>
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

import UpdownReaction from "./UpdownReaction.vue";

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

const editValue = ref(temporalRemoveTimeFlag());
function temporalRemoveTimeFlag() {
  return props.reactionData.content
    .map((item) => item.replace("<time>", ""))
    .join("");
}
function editValueChange(e) {
  editValue.value = e.target.value;
}

const mode = ref("show");
function editTrigger() {
  // 수정을 그냥 취소할 때 키보드단축키 재활성화
  if (mode.value === "edit") {
    editValue.value = temporalRemoveTimeFlag();
  }
  mode.value = mode.value === "edit" ? "show" : "edit";
  emits("interact", mode.value === "edit");
}
const emits = defineEmits(["mutate", "interact", "meta-modal"]);

const auth = useAuth();
const user = computed(() => auth.user);

const notEdited = computed(() => {
  return temporalRemoveTimeFlag() === editValue.value;
});
async function updateReaction() {
  if (!editValue.value) {
    return;
  }
  mode.value = "show";
  if (notEdited.value) {
    return;
  }
  emits("mutate", "update", {
    id: props.reactionData._id,
    content: editValue.value,
    user,
    type: props.reactionData.type,
  });
  emits("interact", false);
}
async function deleteTrigger() {
  emits("mutate", "delete", {
    id: props.reactionData._id,
    user,
  });
}

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
  padding: 2rem;

  &__Content {
    // margin: 1.2rem 0;
    position: relative;
    width: 100%;
    max-width: 80ch;
    font-size: 1.4rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &__Text {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5;
    animation: fade 150ms ease-out;
  }
  &__EditWrap {
    margin: 1.2rem 0;
    height: 9rem;
    padding: 1px;
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    border-radius: var(--global-radius);
    animation: down-fade 150ms ease-out;
  }
  &__EditInput {
    overflow-y: scroll;
    line-height: 1.5;
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    color: inherit;
    background-color: hsl(var(--bg-200) / 0.5);
    border-radius: calc(var(--global-radius) - 1px);
    padding: 1.2rem 1.6rem;
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
  }
  &__Subreactions {
    display: flex;
  }
  &__SubActions {
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 0.2rem;
    align-self: flex-end;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__ActionItem {
    font-size: 1.5rem;
    font-weight: 500;
    box-shadow: none;
    padding: 0.8rem 1.2rem;
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    &:disabled {
      background-color: hsl(var(--text-900) / 0.05);
      color: hsl(var(--text-300));
    }
    &--Submit {
      background: linear-gradient(
        150deg,
        hsl(var(--theme-500) / 0.5),
        hsl(var(--theme-500) / 0.025)
      );
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
