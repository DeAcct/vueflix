<template>
  <main class="Basket">
    <template v-if="user">
      <MultiSelector
        class="Basket__Tabs"
        v-model="tab.key"
        @update:model-value="changeTab"
        :data="tabs"
      />
      <Transition name="edit-bar-fade">
        <EditBar
          :editmode
          :toggle
          :all
          :remove
          class="inner Basket__EditBar"
          v-if="[0, 3].includes(tab.index)"
        />
      </Transition>
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
    <div class="Basket__Alert inner" v-else>
      <strong class="Basket__Info">
        여기서 지금까지의 덕질을 저장해 보세요!
      </strong>
      <RouterLink to="/auth" class="Basket__LoginButton">
        로그인/회원가입
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
// v-for를 이용할 때는 key 속성을 제대로 설정하자.
// unique한 키가 아닐 경우, 같은 아이템으로 인식하여 업데이트가 이루어지지 않는다.
// 탭이 변경되었는데, 같은 인덱스에 같은 제목의 애니가 있을 경우 썸네일이 바뀌지 않는 오류가 있었다.

import { computed, ref } from "vue";

import { useAuth } from "@/store/auth";

import { useMaratonData } from "../api/maraton";
import { useHistory } from "@/composables/history";

import aqua from "@/assets/aqua.svg";

import EditBar from "@/components/EditBar.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import HistoryGroup from "@/components/HistoryGroup.vue";

const auth = useAuth();
const user = computed(() => auth.user);

const {
  tabs,
  tab,
  list,
  changeTab,
  editmode,
  toggleEditmode: toggle,
  selectAll: all,
  removeItem: remove,
} = useHistory();
</script>

<style lang="scss" scoped>
.Basket {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--header-height) 0;

  // &__ActionGroup {
  //   display: flex;
  //   flex-wrap: wrap;
  //   position: sticky;
  //   z-index: 10;
  //   top: var(--header-height);
  //   width: min(100%, 124rem);
  //   margin: 0 auto;
  //   background-color: hsl(var(--bg-100));
  // }
  // &__Actions {
  //   width: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  // }
  &__Tabs {
    display: flex;
    --item-width: 33.333%;
    --item-height: 3.6rem;
    border-radius: 9999px;
    padding: 0.6rem;
    width: calc(100% - var(--inner-padding) * 2);
    margin: 0 auto;
    font-size: 1.6rem;
    color: hsl(var(--bg-500));
  }
  &__Button {
    height: 4.8rem;
    display: flex;
    justify-content: center;
  }
  &__EditBar {
    position: fixed;
    height: 4.8rem;
    bottom: calc(
      var(--bottom-tab-height) + var(--bottom-tab-safe-margin) + 0.8rem
    );
    z-index: 100;
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

.edit-bar-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 150ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

@media screen and (min-width: 769px) {
  .Basket {
    &__Tabs {
      flex-grow: 0;
      justify-content: space-between;
      width: 50rem;
      margin: 0.8rem auto 0;
    }
    &__EditBar {
      top: calc(var(--header-height) + 0.8rem);
      bottom: auto;
      right: var(--inner-padding);
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
