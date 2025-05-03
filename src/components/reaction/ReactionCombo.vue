<template>
  <section class="ReactionCombo">
    <slot name="title" :counter="allCount"></slot>
    <slot name="description"></slot>
    <slot
      name="open-editor"
      :open-editor="
        () =>
          openEditorModal({
            method: 'create',
          })
      "
      v-if="writeable"
    ></slot>
    <InfiniteList
      class="ReactionCombo__List"
      :class="allCount === 0 && 'ReactionCombo__List--Empty'"
      :query="props.query"
      :limit="10"
      :read="Read"
      :counter="ReadReactionCount"
      :order-options
    >
      <template #content="{ list }">
        <ReactionItem
          v-for="{ _id, content, isEdited, time, uid } in list.visible"
          :key="_id"
          v-bind="{ _id, uid, time }"
          :user
          @edit="
            openEditorModal({
              method: 'update',
              id: _id,
              content: { ...content },
            })
          "
          @delete="deleteReaction(_id)"
          @interact="setInteract"
          class="ReactionCombo__Item"
          :class="_id === route.query.reaction && 'ReactionCombo__Item--Blink'"
          actions
          :track-target="trackTarget && _id === route.query.reaction"
        >
          <template #meta="{ self, data, time }">
            <button>
              <ReactionMeta
                :self
                :data
                @click="data?.uid && onMetaModal({ uid: data.uid })"
              >
                <template #edited>
                  {{ isEdited ? " &middot; 수정됨" : "" }}
                </template>
                <template #time>{{ time }}</template>
              </ReactionMeta>
            </button>
          </template>
          <template #content>
            <StarRenderer :progress="content.stars" v-if="content.stars" />
            <ReactionParser
              :content="content.text"
              @request-teleport="requestTeleport"
              class="ReactionCombo__Content"
            />
          </template>
          <template #edited>{{ isEdited ? "(수정됨)" : "" }}</template>
        </ReactionItem>
      </template>
    </InfiniteList>
    <Teleport to="#Overay">
      <NativeDialog ref="$CheckModal" class="CheckModal" shade>
        <template #title>
          <strong class="CheckModal__Title">
            정말 {{ checkModal.text }}하시겠습니까?
          </strong>
        </template>
        <template #control>
          <div class="CheckModal__Control">
            <VueflixBtn
              component="button"
              type="button"
              class="CheckModal__Button CheckModal__Button--Accent"
              @click="
                () => {
                  methodMap.delete.action({ id: checkModal.id });
                  $CheckModal.close();
                  sync();
                  emit('interact', false);
                }
              "
            >
              <template #icon>
                <LoadAnimation
                  class="CheckModal__Loading"
                  v-if="loadState === 'mutating'"
                />
              </template>
              <template #text>
                {{ checkModal.text }}
              </template>
            </VueflixBtn>
            <VueflixBtn
              component="button"
              type="button"
              class="CheckModal__Button"
              @click="$CheckModal.close"
            >
              <template #text>취소</template>
            </VueflixBtn>
          </div>
        </template>
      </NativeDialog>
      <NativeDialog ref="$MetaModal" class="MetaModal" shade>
        <template #content>
          <div class="MetaModal__Body">
            <StatCard :uid class="MetaModal__Bubble" />
            <MembershipCard
              :uid
              class="MetaModal__Bubble MetaModal__Bubble--Membership"
            />
          </div>
        </template>
        <template #control>
          <VueflixBtn
            component="button"
            class="MetaModal__Button"
            @click="$MetaModal.close"
            type="button"
          >
            <template #text>닫기</template>
          </VueflixBtn>
        </template>
      </NativeDialog>
      <NativeDialog ref="$EditorModal" class="EditorModal" shade>
        <template #content>
          <div class="EditorModal__Body">
            <WriteReaction
              class="EditorModal__Bubble"
              v-model="editorModalData.content.text"
              :type="query.type"
              :time
              :user
            />
            <StarCombo
              star-uid="write-reaction"
              class="EditorModal__Bubble"
              @mutate="onStarMutate"
              v-model="editorModalData.content.stars"
              v-if="stars"
            ></StarCombo>
          </div>
        </template>
        <template #control>
          <div class="EditorModal__Row">
            <VueflixBtn
              component="button"
              class="EditorModal__Button"
              @click="
                $EditorModal.close();
                emit('interact', false);
              "
              type="button"
            >
              <template #text>취소</template>
            </VueflixBtn>
            <VueflixBtn
              component="button"
              class="EditorModal__Button EditorModal__Button--Submit"
              @click="
                methodMap[editorModalData.method].action({
                  ...editorModalData,
                  parent: query.parent,
                  type: query.type,
                });
                $EditorModal.close();
                sync();
                emit('interact', false);
              "
              :disabled="editDisabled"
              type="button"
            >
              <template #text>{{
                editorModalData.method === "create" ? "등록" : "수정"
              }}</template>
            </VueflixBtn>
          </div>
        </template>
      </NativeDialog>
    </Teleport>
  </section>
</template>

<script setup>
// 리액션의 형태는 두 가지
// ["리뷰", "코멘트"]
// 리뷰는 애니메이션에 작성하는 항목
// 코멘트는 각 에피소드마다 작성하는 항목

import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { where } from "firebase/firestore";

import {
  Create,
  Read,
  ReadReactionCount,
  Update,
  Delete,
} from "@/api/reaction";
import { useAuth } from "@/store/auth";

import LoadAnimation from "@/components/LoadAnimation.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import WriteReaction from "@/components/WriteReaction.vue";
import StatCard from "@/components/StatCard.vue";
import StarCombo from "@/components/star/StarCombo.vue";
import MembershipCard from "@/components/membership/MembershipCard.vue";
import ReactionItem from "./ReactionItem.vue";
import ReactionParser from "./ReactionParser.vue";
import ReactionMeta from "./ReactionMeta.vue";
import StarRenderer from "../star/StarRenderer.vue";
import InfiniteList from "../InfiniteList.vue";

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  trackTarget: {
    type: Boolean,
  },
  time: {
    type: [String, Number],
    required: false,
  },
  query: {
    type: Object,
    required: true,
  },
  stars: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
});

const route = useRoute();

const emit = defineEmits(["interact", "request-teleport", "mutate", "delete"]);
function setInteract(e) {
  emit("interact", e);
}

const ORDER_OPTIONS = [
  {
    text: "시간",
    value: "time",
  },
  {
    text: "공감",
    value: "updown",
  },
  {
    text: "별점",
    value: "content.stars",
  },
];

const orderOptions = computed(() =>
  ORDER_OPTIONS.filter(({ value }) => {
    if (props.query.type !== "review") {
      return value !== "content.stars";
    }
    return true;
  })
);

const auth = useAuth();
const user = computed(() => auth.user);
const allCount = ref(0);
watchEffect(async () => {
  if (!user.value) {
    allCount.value = 0;
    return;
  }
  allCount.value = await ReadReactionCount(
    props.query,
    where("uid", "==", user.value?.uid)
  );
});
const writeable = computed(() => {
  return allCount.value === 0 && !props.readonly;
});

const methodMap = {
  create: {
    action: Create,
    text: "등록",
  },
  update: {
    action: Update,
    text: "수정",
  },
  delete: {
    action: Delete,
    text: "삭제",
  },
};

const $CheckModal = ref(null);
const checkModal = ref({
  method: "",
  text: "",
});
function deleteReaction(id) {
  checkModal.value = {
    method: "delete",
    text: "삭제",
    id,
  };
  $CheckModal.value.show();
}

function requestTeleport(e) {
  emit("request-teleport", e);
}

const $MetaModal = ref(null);
const uid = ref(null);
function onMetaModal({ uid: _uid }) {
  uid.value = _uid;
  $MetaModal.value.show();
}

const $EditorModal = ref(null);
const editorModalData = ref({
  text: "",
  stars: 2.5,
});
const editDisabled = computed(() => {
  const { text } = editorModalData.value.content;
  return !text || text.length > 1000;
});
function removeTimeflag(origin) {
  return origin.map((item) => item.replace("<time>", "")).join("");
}
function openEditorModal({ method, id, content = { text: "", stars: 2.5 } }) {
  emit("interact", true);
  editorModalData.value = {
    method,
    id,
    content: {
      text: method === "update" ? removeTimeflag(content.text) : "",
    },
  };
  if (props.stars) {
    editorModalData.value.content.stars = content.stars;
  }
  $EditorModal.value.show();
}
// const stars = ref(5);
function onStarMutate(e) {
  editorModalData.value.stars = e;
}
</script>

<style lang="scss" scoped>
.ReactionCombo {
  width: 100%;
  max-width: 1080px;
  position: relative;
  display: flex;
  flex-direction: column;

  &__Title {
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  &__BetaLabel {
    font-size: 1.4rem;
    color: hsl(var(--theme-500));
  }
  &__Description {
    font-size: 1.4rem;
  }

  &__List {
    overflow: hidden;
    border-radius: 0 0 var(--global-radius) var(--global-radius);
    &--Empty {
      padding-bottom: 2rem;
    }
  }
  &__Item {
    background-color: transparent;
    // padding: 0 2rem;
    padding: 2rem;
    & + & {
      border-top: 1px solid hsl(var(--bg-200));
      // padding-top: 2rem;
      // margin-top: 2rem;
    }
    // Remove padding from the last item
    &--Blink {
      animation: comment-blink 5s ease-out;
    }
  }

  &__End {
    display: flex;
    justify-content: center;
    padding: 2rem;
    height: 20rem;
  }
}
@keyframes comment-blink {
  10% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  11% {
    background-color: transparent;
  }
  20% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  50% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  100% {
    background-color: transparent;
  }
}

.NativeDialog {
  position: fixed;
  z-index: 200;
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
}
.CheckModal {
  &__Title {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
  }
  &__Important {
    color: hsl(var(--theme-500));
  }
  &__Control {
    display: flex;
  }
  &__Button {
    flex-direction: row-reverse;
    gap: 0.4rem;
    box-shadow: none;
    border-radius: 9999px;
    &:first-child {
      background-color: hsl(var(--theme-500));
      margin-left: auto;
      color: #fff;
    }
  }
  &__Loading {
    width: 1.2rem;
  }
}
.MetaModal {
  --dialog-bg: transparent;
  &__Body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__Bubble {
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) + 2rem);
    box-shadow: 0 1px 1px hsl(var(--bg-900) / 0.1),
      0 2px 4px hsl(var(--bg-900) / 0.1), 0 4px 8px hsl(var(--bg-900) / 0.1),
      0 8px 16px hsl(var(--bg-900) / 0.1);
    padding: 2rem;
    &--Membership {
      padding: 0;
    }
  }
  &__Button {
    margin-top: 0.8rem;
    margin-left: auto;
    background-color: hsl(var(--bg-300));
    border-radius: 9999px;
    height: 4rem;
  }
}
.EditorModal {
  --dialog-padding: 2rem;
  --dialog-bg: transparent;
  --dialog-border-radius: 0;

  --star-combo-bg: hsl(var(--bg-100));
  --star-combo-filled: hsl(var(--bg-300));
  --star-combo-handler: hsl(var(--bg-100));
  --star-combo-handle-radius: var(--global-radius);
  --stars-bg: hsl(var(--text-900) / 0.1);
  &__Body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__Bubble {
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) + 2rem);
    box-shadow: 0 1px 1px hsl(var(--bg-900) / 0.1),
      0 2px 4px hsl(var(--bg-900) / 0.1), 0 4px 8px hsl(var(--bg-900) / 0.1),
      0 8px 16px hsl(var(--bg-900) / 0.1);
  }

  &__Row {
    display: flex;
    align-self: flex-end;
    gap: 0.6rem;
  }
  &__Button {
    margin-top: 1rem;
    background-color: hsl(var(--bg-400));
    border-radius: 9999px;
    height: 4rem;
    font-size: 1.6rem;
    box-shadow: 0 1px 1px hsl(var(--bg-900) / 0.1),
      0 2px 4px hsl(var(--bg-900) / 0.1), 0 4px 8px hsl(var(--bg-900) / 0.1);
    &:disabled {
      background-color: hsl(var(--bg-300));
      color: hsl(var(--bg-500));
    }
    &--Submit {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
  }
}

@media screen and (min-width: 1080px) {
  .ReactionCombo {
    &__Title {
      font-size: 1.8rem;
    }
  }

  .NativeDialog {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: auto;
    --dialog-height: auto;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
  .CheckModal {
    --dialog-max-width: 40rem;
  }
  .MetaModal {
    --dialog-max-width: 50rem;
  }
  .EditorModal {
    --dialog-max-width: 100ch;
  }
}
</style>
