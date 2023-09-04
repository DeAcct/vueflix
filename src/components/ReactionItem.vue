<template>
  <component :is="component" class="ReactionItem">
    <div class="ReactionItem__MetaData">
      <strong class="ReactionItem__Author">
        <template v-if="self">나</template>
        <template v-else> <slot name="author"></slot></template>
      </strong>
      <p class="ReactionItem__Date">{{ formattedDate }}</p>
    </div>
    <div class="ReactionItem__Content">
      <template v-if="mode === 'edit'">
        <textarea
          class="ReactionItem__EditInput"
          :placeholder="`수정할 ${REACTION_ENUM_WITH_PARTICLE[type]} 입력해 주세요`"
          :value="editValue"
          @input="editValueChange"
        />
      </template>
      <p class="ReactionItem__Text" v-else>
        <slot name="content"></slot>
      </p>
    </div>
    <div class="ReactionItem__Actions">
      <UpdownReaction :parent="reactionId" class="ReactionItem__Updown" />
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
          class="ReactionItem__ActionItem"
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
import { ref } from "vue";
import { useFormatDate } from "@/composables/dateFormat";
import { useReaction } from "@/api/reaction";
import UpdownReaction from "./UpdownReaction.vue";

const props = defineProps({
  date: {
    type: Object,
  },
  component: {
    type: String,
    default: "li",
  },
  self: {
    type: Boolean,
  },
  isMyReviewShown: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  parent: {
    type: String,
  },
  reactionId: {
    type: String,
  },
});

const { date: formattedDate } = useFormatDate(props.date.toDate());

const { Update, Delete } = useReaction({
  type: props.type,
  parent: props.parent,
});

const editValue = ref("");
function editValueChange(e) {
  editValue.value = e.target.value;
}

const mode = ref("show");
function editTrigger() {
  mode.value = mode.value === "edit" ? "show" : "edit";
}
const emits = defineEmits(["mutate"]);
async function updateReaction() {
  if (!editValue.value) {
    return;
  }
  await Update({ id: props.reactionId, content: editValue.value });
  mode.value = "show";
  emits("mutate");
}
async function deleteTrigger() {
  await Delete({ id: props.reactionId });
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
    gap: 0.8rem;
  }
  &__Author {
    font-size: 1.5rem;
  }
  &__Date {
    font-size: 1.2rem;
    font-weight: 300;
    margin-right: 0.5rem;
  }

  &__Content {
    margin-bottom: 1.2rem;
    position: relative;
    width: 100%;
  }
  &__Text {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
    animation: fade 150ms ease-out;
  }
  &__EditInput {
    resize: none;
    overflow-y: scroll;
    line-height: 1.5;
    width: 100%;
    height: 9rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: inherit;
    background-color: hsl(var(--bg-300));
    border-radius: var(--global-radius);
    animation: down-fade 150ms ease-out;
    padding: 1.2rem 1.6rem;
    &::placeholder {
      font-size: 1.4rem;
      color: hsl(var(--bg-500));
    }
  }

  &__Actions {
    display: flex;
    justify-content: space-between;
  }
  &__SubActions {
    display: flex;
    align-items: center;
    border-radius: var(--global-radius);
    overflow: hidden;
    gap: 0.2rem;
    align-self: flex-end;
  }
  &__ActionItem {
    font-size: 1.5rem;
    font-weight: 500;
    box-shadow: none;
    padding: 0.8rem 1.2rem;
    background-color: hsl(var(--text-900) / 0.1);

    &:disabled {
      background-color: hsl(var(--text-900) / 0.05);
      color: hsl(var(--text-300));
    }
  }
}

@keyframes down-fade {
  from {
    opacity: 0;
    height: 0;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
}

@media screen and (min-width: 1080px) {
  .ReactionItem {
    &__Author {
      font-size: 1.7rem;
      margin-right: 1.5rem;
    }
    &__Date {
      font-size: 1.3rem;
    }
    &__Content {
      font-size: 1.5rem;
    }
    &__Actions {
      button {
        font-size: 1.3rem;
      }
    }
    .row-top {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
