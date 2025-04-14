<template>
  <main class="History">
    <h3>반응 {{ reactions.length }}</h3>
    <div class="History__List History__List--Reaction">
      <ReactionItem
        v-for="reaction in reactions"
        :key="reaction._id"
        :user
        :reaction-data="reaction"
        component="RouterLink"
        :to="
          linkParser[reaction.type]({ ...reaction.parent, _id: reaction._id })
        "
        class="History__ReactionItem"
      >
        <template #meta>
          <div class="History__From">
            <OptimizedMedia
              class="History__FromImg"
              :src="`anime/${reaction.parent.title}/${reaction.parent.title}.webp`"
              skelleton
            >
            </OptimizedMedia>
            <p class="History__FromText">
              <strong>
                {{ reaction.parent.title }}
                {{ reaction.parent.part }}
                {{ reaction.parent.index }}
              </strong>
              에서 작성한
              {{ reaction.type === "review" ? "리뷰" : "댓글" }}
            </p>
          </div>
        </template>
        <template #content>
          <ReactionParser :content="reaction.content" />
        </template>
        <template #edited>{{ reaction.isEdited ? "(수정됨)" : "" }}</template>
      </ReactionItem>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";

import { useWannaSee } from "@/api/wannaSee";
import { getNickname } from "@/api/userMeta";
import { ReadByUid as getReactions } from "@/api/reaction";

import ReactionItem from "@/components/reaction/ReactionItem.vue";
import ReactionParser from "@/components/ReactionParser.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";

const { getWannaSee } = useWannaSee();
const wannaSee = ref([]);
const reactions = ref([]);
const route = useRoute();

const auth = useAuth();
const user = computed(() => auth.user);

const tab = ref(0);
function onChange(e) {
  tab.value = data.value.map(({ key }) => key).findIndex((item) => item === e);
}

// 댓글이나 리뷰를 작성한 곳으로 바로 이동하기 위해 search param을 활용
const linkParser = {
  comment,
  review,
};
function comment({ title, part, index, _id }) {
  return `/anime-play/${title}/${part}/${index}/?reaction=${_id}`;
}
function review({ title, _id }) {
  return `/history/?modal=${title}&route=reviews&reaction=${_id}`;
}

const data = computed(() => [
  {
    key: "wanna-see",
    text: `보고싶다 ${wannaSee.value.length}`,
  },
  {
    key: "reaction",
    text: `반응 ${reactions.value.length}`,
  },
]);

onMounted(async () => {
  wannaSee.value = await getWannaSee(route.params.uid);
  route.meta.appBar.activityContent = await getNickname(route.params.uid);
  reactions.value = await getReactions(route.params.uid);
});
</script>

<style lang="scss" scoped>
.History {
  padding: var(--header-height) 0;

  &__Selector {
    --item-width: 50%;
    padding: {
      top: 1.5rem;
      left: 2rem;
      right: 2rem;
    }
    background-color: transparent;
    margin: 0 auto;
    width: min(100%, 124rem);
  }
  &__List {
    margin: 1.5rem auto 0;
    width: min(100%, 124rem);
  }
  &__From {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  &__FromImg {
    width: 100%;
  }
  &__FromText {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
  &__ReactionItem {
    position: relative;

    & + & {
      border-top: 1px solid hsl(var(--bg-200));
    }
  }
}

// transition
.history {
  &-fade {
    &-enter-active,
    &-leave-active {
      transition: all 150ms ease-out;
      display: none;
    }
    &-enter-from,
    &-leave-to {
      translate: 2rem 0;
      opacity: 0;
      translate: 0 -1rem 0;
    }
  }
}

@media screen and (min-width: 769px) {
  .History {
    &__Selector {
      padding: {
        left: 0;
        right: 0;
      }
      --item-width: 10rem;
      justify-content: flex-start;
    }
    &__List--Reaction {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    &__FromText {
      font-size: 1.8rem;
      margin-bottom: 0.6rem;
    }
    &__ReactionItem {
      width: calc((100% - 1.6rem) / 3);
      background-color: hsl(var(--bg-200));
      border-radius: var(--global-radius);
      overflow: hidden;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      }
      &::before {
        width: 100%;
        height: 4rem;
        background: linear-gradient(180deg, transparent, hsl(var(--bg-200))),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            hsl(var(--bg-500)) 20px,
            hsl(var(--bg-500)) 40px
          );
        z-index: 1;
      }
      // &::after {
      //   // background: ;
      //   z-index: 2;
      // }

      & > * {
        z-index: 3;
      }
      & + & {
        border-top: none;
      }
    }
  }
}
</style>
