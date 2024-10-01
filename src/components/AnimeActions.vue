<template>
  <div class="AnimeActions">
    <RouterLink
      class="AnimeActions__Continue AnimeActions__Continue--Continue"
      :to="continueData.link"
      replace
    >
      <i class="icon">
        <IconBase>
          <IconPlay />
        </IconBase>
      </i>
      <span class="text">{{ continueData.text }}</span>
    </RouterLink>
    <button
      @click="wannaSeeToggle"
      class="AnimeActions__Button AnimeActions__Button--WannaSee"
      :class="wannaSee && 'Checked'"
      type="button"
      :disabled="disabled.wanna"
    >
      <i class="icon">
        <IconBase class="icon--added">
          <IconWannaSeeAdded />
        </IconBase>
        <IconBase class="icon--not-added">
          <IconWannaSeeAdd />
        </IconBase>
      </i>
      <span class="text">보고싶다</span>
    </button>
    <button
      class="AnimeActions__Button AnimeActions__Button--Purchase"
      @mousedown="activeTrigger"
      @mouseup="activeTrigger"
      @touchstart.passive="activeTrigger"
      @touchend="activeTrigger"
      @click="purchase"
      type="button"
      :disabled="disabled.purchase"
    >
      <i class="icon">
        <IconBase>
          <IconPurchase :is-active="isPurchaseActive" />
        </IconBase>
      </i>
      <span class="text">소장하기</span>
    </button>
  </div>
</template>

<script setup>
/**
 * @todo wannaSeeToggle 버튼 컴포넌트화
 */

import { ref } from "vue";

import IconBase from "./IconBase.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconPurchase from "./icons/IconPurchase.vue";
import IconWannaSeeAdd from "./icons/IconWannaSeeAdd.vue";
import IconWannaSeeAdded from "./icons/IconWannaSeeAdded.vue";

const props = defineProps({
  continueData: {
    type: Object,
  },
  wannaSee: {
    type: Boolean,
  },
  disabled: {
    type: Object,
    validator(obj) {
      const VALID_KEYS = ["purchase", "wanna"];
      const isValidKey = Object.keys(obj).reduce(
        (acc, current) => acc && VALID_KEYS.includes(current),
        true
      );
      const isValidValue = Object.values(obj).reduce(
        (acc, current) => acc && typeof current === "boolean",
        true
      );
      return isValidKey && isValidValue;
    },
    default: {
      purchase: true,
      wanna: true,
    },
  },
});
const emits = defineEmits(["wanna-see-toggle", "purchase"]);

function wannaSeeToggle() {
  emits("wanna-see-toggle");
}
function purchase() {
  emits("purchase");
}

const isPurchaseActive = ref(false);
function activeTrigger() {
  isPurchaseActive.value = !isPurchaseActive.value;
}
</script>

<style lang="scss" scoped>
.AnimeActions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 150ms ease-out;

  &__Continue {
    .text {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--anime-layout-text);
    }

    &--Continue {
      display: flex;
      align-items: center;
      transition: 150ms ease-out;
      margin-right: auto;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.8rem;
        height: 4.8rem;
        background-color: var(--anime-layout-text);
        color: var(--anime-layout-bg);
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
  }
  &--BGLess {
    display: flex;
    flex-direction: column;
    height: 4rem;
    align-items: center;
  }

  &__Button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    .icon {
      position: relative;
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        fill: transparent;
        stroke: var(--anime-layout-text);
        color: var(--anime-layout-text);
        stroke-width: 2px;
        stroke-linecap: round;
      }
    }
    .text {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--anime-layout-text);
    }

    &--WannaSee {
      .icon {
        svg {
          position: absolute;
        }
        &--added {
          transition-delay: 0ms;
          stroke-dasharray: 25;
          stroke-dashoffset: 25;
        }
        &--not-added {
          transition-delay: 150ms;
        }
      }
      &.Checked .icon {
        &--added {
          transition-delay: 150ms;
          stroke-dashoffset: 0;
          stroke-linejoin: round;
        }
        &--not-added {
          transition-delay: 0ms;
          // transform: translateY(2.5rem) scale(0);
          translate: 0 2.5rem;
          scale: 0;
          opacity: 0;
        }
      }
    }

    &--Purchase {
      margin-left: 1rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeActions {
    padding: 0;
    &__Continue .text {
      font-size: 1.6rem;
    }
  }
}
</style>
