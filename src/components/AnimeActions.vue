<template>
  <div class="AnimeActions">
    <div class="col-left">
      <RouterLink
        class="AnimeActions__Continue"
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
    </div>
    <button
      @click="wannaSeeToggle"
      class="bg-less AnimeActions__WannaSee"
      :class="wannaSee && 'AnimeActions__WannaSee--Checked'"
      type="button"
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
      class="bg-less AnimeActions__Purchase"
      @mousedown="activeTrigger"
      @mouseup="activeTrigger"
      @touchstart.passive="activeTrigger"
      @touchend="activeTrigger"
      @click="purchase"
      type="button"
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
  console.log("??");
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
  transition: 150ms ease-out;

  // .col-right {
  //   width: auto;
  //   height: auto;
  //   display: flex;
  //   gap: 1rem;
  // }
  .bg-less {
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--anime-layout-text);
    }
  }

  &__Continue {
    display: flex;
    align-items: center;
    transition: 150ms ease-out;
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
    svg {
      width: 2rem;
      height: 2rem;
    }

    .text {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--anime-layout-text);
    }
  }

  &__WannaSee {
    margin-left: auto;
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
    &--Checked .icon {
      &--added {
        transition-delay: 150ms;
        stroke-dashoffset: 0;
        stroke-linejoin: round;
      }
      &--not-added {
        transition-delay: 0ms;
        transform: translateY(2.5rem) scale(0);
        opacity: 0;
      }
    }
  }

  &__Purchase {
    margin-left: 1rem;
  }
}

@media screen and (min-width: 1080px) {
  .AnimeActions {
    padding: 0;
    &__Continue .text {
      font-size: 1.5rem;
    }
  }
}
</style>
