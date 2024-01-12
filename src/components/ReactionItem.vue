<template>
  <component :is="component" class="ReactionItem">
    <div class="ReactionItem__MetaData">
      <strong class="ReactionItem__Author">
        <slot name="author"></slot>
      </strong>
      <p class="ReactionItem__Date">{{ formattedDate }}</p>
      <p class="ReactionItem__Edited">
        <slot name="edited"></slot>
      </p>
    </div>
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
    <div class="ReactionItem__Actions">
      <UpdownReaction
        :parent="reactionData._id"
        :writer="reactionData.uid"
        class="ReactionItem__Updown"
      />
      <div class="ReactionItem__SubActions">
        <button v-if="!self" class="ReactionItem__ActionItem">신고</button>
        <button
          v-if="self"
          @click="editTrigger"
          class="ReactionItem__ActionItem"
        >
          {{ mode === "show" ? "수정" : "취소" }}
        </button>
        <button
          v-if="mode === 'edit'"
          @click="updateReaction"
          class="ReactionItem__ActionItem ReactionItem__ActionItem--Submit"
          :disabled="!editValue"
        >
          수정
        </button>
        <button
          v-if="self && mode === 'show'"
          @click="deleteTrigger"
          class="ReactionItem__ActionItem"
        >
          삭제
        </button>
      </div>
    </div>
  </component>
</template>

<script setup>
import { REACTION_ENUM_WITH_PARTICLE } from "@/enums/Reaction";
import { ref, computed } from "vue";
import { useFormatDate } from "@/composables/formatter";
import { Update, Delete } from "@/api/reaction";
import UpdownReaction from "./UpdownReaction.vue";
import { useAuth } from "../store/auth";
// import { useStore } from "vuex";

const placeholder = computed(
  () =>
    `수정할 ${REACTION_ENUM_WITH_PARTICLE[props.type]} 입력해 주세요.${
      props.type === "comment"
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
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review", "reply"].includes(value);
    },
  },
});
const self = computed(() => props.user?.uid === props.reactionData.uid);
const { date: formattedDate } = useFormatDate(props.reactionData.time.toDate());

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
  if (mode.value === "edit") {
    // 수정을 그냥 취소할 때 키보드단축키 재활성화
    editValue.value = temporalRemoveTimeFlag();
  }
  mode.value = mode.value === "edit" ? "show" : "edit";
  emits("interact", mode.value === "edit");
}
const emits = defineEmits(["mutate", "interact"]);

const auth = useAuth();
const user = computed(() => auth.user);

async function updateReaction() {
  if (!editValue.value) {
    return;
  }
  await Update({
    id: props.reactionData._id,
    content: editValue.value,
    user,
    type: props.type,
  });
  mode.value = "show";
  emits("mutate");
  emits("interact", false);
}
async function deleteTrigger() {
  await Delete({ id: props.reactionData._id, user });
  emits("mutate");
}
</script>

<style lang="scss" scoped>
.ReactionItem {
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &__MetaData {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
  }
  &__Author {
    font-size: 1.4rem;
    margin-right: 0.6rem;
  }
  &__Date {
    font-size: 1.2rem;
    font-weight: 300;
    margin-right: 0.4rem;
  }
  &__Edited {
    font-size: 1.2rem;
    font-weight: 300;
  }

  &__Content {
    margin-bottom: 1.2rem;
    position: relative;
    width: 100%;
    max-width: 80ch;
    font-size: 1.3rem;
  }
  &__Text {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
    animation: fade 150ms ease-out;
  }
  &__EditWrap {
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

  &__Actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    &:first-child {
      border-radius: var(--global-radius) 0 0 var(--global-radius);
    }
    &:last-child {
      border-radius: 0 var(--global-radius) var(--global-radius) 0;
    }
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
  &__SubReplyList {
    margin-top: 1rem;
    width: 100%;
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
    &__MetaData {
      margin-bottom: 0.8rem;
    }
    &__Author {
      font-size: 1.6rem;
      margin-right: 0.8rem;
    }
    &__Date {
      font-size: 1.3rem;
    }
    &__Content {
      font-size: 1.5rem;
    }
    .row-top {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
