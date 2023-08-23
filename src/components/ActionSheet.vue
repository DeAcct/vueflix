<template>
  <div class="ActionSheet">
    <button
      class="ActionSheet__BG"
      title="닫기"
      @click="closeOverflowMenu"
      ref="$shade"
    />
    <div class="ActionSheet__Interact" ref="$sheet">
      <ul class="ActionSheet__Actions">
        <li
          class="ActionSheet__Item"
          v-for="action in actions"
          :key="action.text"
        >
          <button @click="action.method" class="inner">
            {{ action.text }}
          </button>
        </li>
      </ul>
      <button class="ActionSheet__CloseBtn inner" @click="closeOverflowMenu">
        <i class="icon">
          <IconBase>
            <IconClose />
          </IconBase>
        </i>
        <span class="text"> 닫기 </span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import IconBase from "./IconBase.vue";
import IconClose from "./icons/IconClose.vue";
import { SheetAnimation, ShadeAnimation } from "@/animation/modalAnimation.js";

const $shade = ref(null);
const $sheet = ref(null);
const props = defineProps({
  actionOrigin: Array,
});
const emit = defineEmits(["overflow-menu-close"]);
const shade = computed(() => ShadeAnimation($shade.value));
const sheet = computed(() => SheetAnimation($sheet.value));
onMounted(() => {
  shade.value.play();
  sheet.value.play();
});
function closeOverflowMenu() {
  shade.value.reverse();
  sheet.value.reverse();
  sheet.value.onfinish = () => {
    emit("overflow-menu-close");
  };
}

const actions = computed(() =>
  props.actionOrigin.map((action) => ({
    ...action,
    method() {
      action.method();
      closeOverflowMenu();
    },
  }))
);
</script>

<style lang="scss" scoped>
.ActionSheet {
  width: 100%;
  height: 100vh;
  &__BG {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &__Interact {
    width: 100%;
    position: absolute;
    background-color: hsl(var(--bg-300));
    border-radius: 0.6rem 0.6rem 0 0;
  }
  &__Actions {
    border-bottom: 1px solid hsl(var(--bg-400));
  }
  &__Item {
    button {
      width: 100%;
      text-align: left;
      padding: {
        top: 2rem;
        bottom: 2rem;
      }
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  &__CloseBtn {
    width: 100%;
    padding: {
      top: 2.5rem;
      bottom: 2.5rem;
    }
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.5rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-weight: 500;
    }
  }
}

@media screen and (min-width: 1080px) {
  .ActionSheet {
    width: unset;
    height: unset;
    position: absolute;
    &__BG {
      display: none;
    }
    &__Interact {
      position: static;
      margin-top: 1rem;
      border-radius: 0.6rem;
    }
    &__Actions {
      display: flex;
      flex-direction: column;
      border-bottom: none;
    }
    &__Item button {
      display: flex;
      white-space: nowrap;
      padding: {
        left: 2rem;
        right: 2rem;
      }
    }
    &__CloseBtn {
      display: none;
    }
  }
}
</style>
