<template>
  <RouterLink to="#none" class="membership-card" :style="style">
    <div class="row-top">
      <div class="row-top-left" v-if="type === 'membership'">
        <strong class="info">{{ cardCompany }}</strong>
        <p class="info">****-****-****-{{ blurCardNumber }}</p>
      </div>
      <div class="row-top-left" v-if="type === 'point'">
        <strong class="points">{{ formatNumber }}점</strong>
      </div>
      <div class="row-top-right">
        <i class="icon">
          <IconBase>
            <IconArrowNext />
          </IconBase>
        </i>
      </div>
    </div>
    <div class="row-bottom" v-if="type === 'membership'">
      <strong class="info">다음 결제일</strong>
      <p class="info">{{ nextPayment }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { useEventListener } from "@vueuse/core";
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import { computed, ref } from "vue";

const props = defineProps({
  cardCompany: {
    type: String,
  },
  cardNumber: {
    type: String,
  },
  nextPayment: {
    type: String,
  },
  isActivated: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  point: {
    type: Number,
  },
});

useEventListener(window, "deviceorientation", cardInteraction);
const style = ref("none");
function cardInteraction(e) {
  style.value = {
    transform: `perspective(3px)
      rotateX(${e.beta * 0.001}deg)
      rotateY(${e.gamma * 0.001}deg)`,
  };
}
const blurCardNumber = computed(() => props.cardNumber.slice(12, 16));
const formatNumber = computed(() =>
  new Intl.NumberFormat().format(props.point)
);
</script>

<style lang="scss" scoped>
.membership-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc((100vw - 4rem) / 1.58);
  padding: 2rem 3.5rem;
  border-radius: 0.3rem;
  transition: transform 150ms ease-out;
  .info {
    color: #fff;
    font-size: 1.5rem;
  }
  .row-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .row-top-left {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        font-weight: 300;
      }

      .points {
        font-size: 2.5rem;
        font-weight: 900;
        color: #fff;
      }
    }
    .row-top-right .icon {
      color: #fff;
    }
  }
  .row-bottom {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 900;
    }
  }
}

@media screen and (min-width: 768px) {
  .membership-card {
    width: 37.5rem;
    height: calc(37.5rem / 1.58);
  }
}
</style>
