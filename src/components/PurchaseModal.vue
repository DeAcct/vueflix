<template>
  <NativeDialog class="PurchaseDialog" shade ref="$PurchaseDialog">
    <template #title>
      <header class="PurchaseDialog__Header">
        <h2 class="PurchaseDialog__Title">
          <TransitionGroup name="fade">
            <button
              v-for="(crumb, index) in purchase.router"
              :key="crumb"
              class="PurchaseDialog__TitleCrumb"
              @click="purchase.go(crumb)"
              :disabled="index === purchase.router.length - 1"
            >
              {{ VIEW_STRING[crumb] }}
            </button>
          </TransitionGroup>
        </h2>
        <button class="PurchaseDialog__CloseButton" @click="close">
          <IconBase class="PurchaseDialog__CloseIcon">
            <IconClose />
          </IconBase>
        </button>
      </header>
    </template>
    <template #content>
      <MultiView transition-name="slide" :view-key="purchase.current">
        <Purchase
          v-if="purchase.current === 'purchase'"
          @complete="onComplete"
        />
        <NewCard v-else-if="purchase.current === 'new-card'" />
      </MultiView>
    </template>
  </NativeDialog>
</template>

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useAuth } from "@/store/auth";

import NativeDialog from "@/components/NativeDialog.vue";
import MultiView from "@/components/MultiView.vue";
import Purchase from "./purchase/Purchase.vue";
import NewCard from "./purchase/NewCard.vue";

import IconBase from "@/components/IconBase.vue";
import IconClose from "@/components/icons/IconClose.vue";
import { usePurchase } from "@/store/purchase";

defineExpose({
  show,
  close,
});

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const $PurchaseDialog = ref(null);
function show() {
  $PurchaseDialog.value.show();
  document.body.style.overflow = "hidden";
}
function close() {
  $PurchaseDialog.value.close();
  document.body.style.overflow = "auto";
}

const VIEW_STRING = {
  purchase: "구독",
  "new-card": "신용카드 추가",
};
// const currentView = ref(["purchase"]);
// function moveTo(crumb) {
//   const index = currentView.value.indexOf(crumb);
//   if (index === -1) return;
//   currentView.value = currentView.value.crumbs.slice(0, index + 1);
//   console.log(currentView.value);
// }
const purchase = usePurchase();

// function addCreditCard() {
//   currentView.key = "new-card";
//   currentView.crumbs.push("new-card");
// }
// function returnToRoot() {
//   currentView.key = "purchase";
//   currentView.crumbs.pop();
// }

const auth = useAuth();
const router = useRouter();
async function onComplete(result) {
  await auth.subscribe(result);
  router.replace("/subscribe/manage");
}
</script>

<style lang="scss" scoped>
.PurchaseDialog {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-padding: 0;
  --dialog-bg: var(--anime-layout-bg);
  --dialog-overflow: scroll;
  --dialog-height: calc(var(--vh) * 100 * 1px);

  --dialog-content-width: calc(100% - 2rem);
  &__Header {
    width: var(--dialog-content-width);
    margin: 0 auto;
    padding: 0 1rem;
    position: sticky;
    top: 0;
    z-index: calc(var(--z-index-overay-1) + 1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    background-color: var(--anime-layout-bg);
    &::before,
    &::after {
      content: "";
      overflow: hidden;
      width: 3.2rem;
      height: 3.2rem;
      background-color: transparent;
      position: absolute;

      bottom: -3.2rem;
      border-radius: 50%;
    }
    &::before {
      left: 0;
      box-shadow: -1.6rem -1.6rem 0 var(--anime-layout-bg);
    }
    &::after {
      right: 0;
      box-shadow: 1.6rem -1.6rem 0 var(--anime-layout-bg);
    }
  }

  &__Title {
    display: flex;
    overflow: hidden;
    &:has(+ .PurchaseDialog__CreditCard) {
      padding: 2rem 0 2rem 2rem;
      position: sticky;
    }
  }
  &__TitleCrumb {
    font-size: 1.8rem;
    &:last-child {
      font-weight: 700;
    }
    & + &::before {
      content: "/";
      margin: 0 0.4rem;
      font-weight: 500;
      color: hsl(var(--text-500));
    }
  }
  &__CloseButton {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 690px) {
  .PurchaseDialog {
    &__Header {
      &::after {
        right: calc(50% + 0.5rem);
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .PurchaseDialog {
    &__Header {
      width: 1080px;
      padding: 1.6rem;
    }
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: 600ms cubic-bezier(0.83, 0, 0.17, 1);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

// @media screen and (min-width: 1080px) {
//   .PurchaseDialog {
//     --dialog-max-width: 40rem;
//     --dialog-height: min(80rem, calc(100dvh - 4rem));
//     --dialog-inset: 50% auto auto 50%;
//     --dialog-translate: -50% -50%;
//     --dialog-starting-translate: -50% calc(-50% + 6rem);
//     --dialog-border-radius: 2.6rem;
//     --dialog-starting-opacity: 0;
//     &__Header {
//       &::after {
//         right: 0;
//       }
//     }
//     &__FoldHold {
//       flex-direction: column;
//       align-items: center;
//       width: 100%;
//       padding: 0;
//     }
//     &__Col {
//       width: var(--dialog-content-width);
//     }
//     &__CTAWrap {
//       width: var(--dialog-content-width);
//       padding-bottom: 1rem;
//       bottom: 0;
//       top: auto;
//     }
//     &__AgreeBox {
//       height: 6rem;
//       font-size: 1.4rem;
//       gap: 0.8rem;
//     }
//     &__Summary {
//       display: block;
//       font-size: 2rem;
//       padding-top: 2rem;
//       text-align: center;
//     }
//   }
// }
</style>
