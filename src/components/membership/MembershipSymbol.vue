<template>
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    class="MembershipSymbol"
    :class="`MembershipSymbol--${_eng}`"
  >
    <component :is="_rank" class="MembershipSymbol__Content"></component>
  </svg>
</template>

<script setup>
import { computed } from "vue";

import { KOR_TO_ENG } from "@/composables/level";

import SaGwanSengDo from "./SaGwanSengDo.vue";
import SoWi from "./SoWi.vue";
import JungWi from "./JungWi.vue";
import DaeWi from "./DaeWi.vue";
import SoRyeong from "./SoRyeong.vue";
import JungRyeong from "./JungRyeong.vue";
import DaeRyeong from "./DaeRyeong.vue";
import JunJang from "./JunJang.vue";
import Jangun from "./Jangun.vue";

const props = defineProps({
  level: {
    validator(value) {
      return [
        "사관생도",
        "소위",
        "중위",
        "대위",
        "소령",
        "중령",
        "대령",
        "준장",
        "장군",
      ].includes(value);
    },
    default: "사관생도",
  },
});

const LEVEL_MAP = {
  사관생도: SaGwanSengDo,
  소위: SoWi,
  중위: JungWi,
  대위: DaeWi,
  소령: SoRyeong,
  중령: JungRyeong,
  대령: DaeRyeong,
  준장: JunJang,
  장군: Jangun,
};

//:class="`MembershipSymbol--${_eng}`"
const _rank = computed(() => LEVEL_MAP[props.level]);
const _eng = computed(() => KOR_TO_ENG[props.level]);
</script>

<style lang="scss" scoped>
.MembershipSymbol {
  background-color: hsl(var(--membership-symbol-background) / 0.3);
  fill: hsl(var(--membership-symbol-background));
  border-radius: 9999px;
  &--SaGwanSengDo {
    --membership-symbol-background: 65 34% 38%;
  }
  &--SoWi {
    --membership-symbol-background: 17 82% 41%;
  }
  &--JungWi {
    --membership-symbol-background: 34 100% 50%;
  }
  &--DaeWi {
    --membership-symbol-background: 147 74% 29%;
  }
  &--SoRyeong {
    --membership-symbol-background: 194 73% 31%;
  }
  &--JungRyeong {
    --membership-symbol-background: 256 57% 27%;
  }
  &--DaeRyeong {
    --membership-symbol-background: 289 25% 34%;
  }
  &--JunJang {
    fill: #570549;
    background: conic-gradient(from 45deg, #f0cfde, #ead4ee, #c2e9fb, #f0cfde);
  }
  &--Jangun {
    fill: #ffffff;
    background: conic-gradient(
      from 45deg,
      #ecc7ae,
      #e4dba8,
      #bddf97,
      #cfebf0,
      #ecc7ae
    );
  }
}
</style>
