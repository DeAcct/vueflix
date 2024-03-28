<template>
  <main class="Basket">
    <template v-if="user">
      <div class="Basket__ActionGroup">
        <div class="Basket__Actions inner">
          <MultiSelector
            class="Basket__Tabs"
            v-model="tab.index"
            @update:model-value="tabMove"
            :data="tabs"
          />
          <button
            class="Basket__Button Basket__Button--Toggle"
            @click="toggleEditmode"
            :disabled="list.length === 0"
            type="button"
          >
            <IconBase>
              <IconRemove></IconRemove>
            </IconBase>
          </button>
        </div>
        <EditBar
          :editmode
          :toggle="toggleEditmode"
          :remove="remove"
          :all="all"
          class="inner Basket__EditBar"
        />
      </div>
      <template v-if="list.length > 0">
        <HistoryGroup
          :list
          :parser="tabs[tab.index].parser"
          :progress-bar="tabs[tab.index].progressBar"
          v-model:editmode="editmode"
          class="Basket__List"
        >
        </HistoryGroup>
      </template>
      <template v-else>
        <div class="Basket__Alert inner">
          <img
            :src="aqua"
            class="Basket__Easter"
            alt="서럽게 우는 코노스바 아쿠아"
            fetchpriority="low"
          />
          <p class="Basket__Info">
            <strong class="Basket__Info">아직 아무것도 없네요</strong>
            원하는 애니메이션을 찾아보세요!
          </p>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="Basket__Alert inner">
        <strong class="Basket__Info">
          여기서 지금까지의 덕질을 저장해 보세요!
        </strong>
        <RouterLink to="/auth" class="Basket__LoginButton">
          로그인/회원가입
        </RouterLink>
      </div>
    </template>
  </main>
</template>

<script setup>
// v-for를 이용할 때는 key 속성을 제대로 설정하자.
// unique한 키가 아닐 경우, 같은 아이템으로 인식하여 업데이트가 이루어지지 않는다.
// 탭이 변경되었는데, 같은 인덱스에 같은 제목의 애니가 있을 경우 썸네일이 바뀌지 않는 오류가 있었다.

import { computed, ref } from "vue";

import { useAuth } from "@/store/auth";

import { useHistory } from "@/composables/history";

import aqua from "@/assets/aqua.svg";

import EditBar from "@/components/EditBar.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import HistoryGroup from "@/components/HistoryGroup.vue";

import IconBase from "@/components/IconBase.vue";
import IconRemove from "@/components/icons/IconRemove.vue";

const auth = useAuth();
const user = computed(() => auth.user);

const { tabs, tab, changeTab, list } = useHistory([
  "recent-watched",
  "purchased",
  "not-interested",
]);
function tabMove(e) {
  changeTab(e);
  editmode.value.on = false;
  editmode.value.selected.clear();
}

const editmode = ref({
  on: false,
  selected: new Set(),
});
function toggleEditmode() {
  editmode.value.on = !editmode.value.on;
  if (!editmode.value.on) {
    editmode.value.selected.clear();
  }
}
async function remove() {
  await basket[tab.value].remove(editmode.value.selected);
  toggleEditmode();
}
async function all() {
  await basket[tab.value].remove("all");
  toggleEditmode();
}
</script>

<style lang="scss" scoped>
.Basket {
  padding: var(--header-height) 0;

  &__ActionGroup {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    z-index: 10;
    top: var(--header-height);
    width: min(100%, 124rem);
    margin: 0 auto;
    background-color: hsl(var(--bg-100));
    border-bottom: 1px solid hsl(var(--bg-200));
  }
  &__Actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__Tabs {
    flex-grow: 1;
    display: flex;
    --item-width: 25%;
    --item-height: 4.8rem;
    border-radius: 9999px;
    background-color: transparent;
    justify-content: flex-start;
    padding: 0.6rem 0;
  }
  &__Button {
    height: 4.8rem;
    display: flex;
    justify-content: center;
    &--Toggle {
      position: absolute;
      right: var(--inner-padding);
      width: 2.4rem;
      height: 2.4rem;
      align-items: center;
      padding: 0;
      &:disabled {
        cursor: not-allowed;
        color: hsl(var(--text-200));
      }
    }
  }
  &__EditBar {
    width: min(100%, 124rem);
  }

  &__List {
    margin-top: 1.5rem;
  }

  &__Alert {
    display: flex;
    height: calc(var(--vh) * 100px - 8rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  &__Easter {
    width: 4.8rem;
    border-radius: var(--global-radius);
    margin-top: -7rem;
  }

  &__Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.7rem;
  }
  &__LoginButton {
    width: 100%;
    padding: 2rem;
    background-color: hsl(var(--bg-200));
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.3rem;
  }
}

@media screen and (min-width: 769px) {
  .Basket {
    &__Actions {
      padding: 0;
    }
    &__Button--Toggle {
      right: 0;
    }
    &__Tabs {
      flex-grow: 0;
      justify-content: space-between;
      width: 50rem;
      margin: 0 auto;
    }
    &__EditBar {
      border-radius: 9999px;
      padding-right: 0.8rem;
    }
    &__List {
      margin: 2rem auto;
    }
  }
}

@media screen and (min-width: 1240px) {
  .Basket {
    &__ActionGroup {
      border: none;
    }
    &__ActiveHolder {
      font-size: 1.7rem;
    }
  }
}
</style>
