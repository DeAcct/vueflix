<template>
  <section class="MembershipCard">
    <section class="MembershipCard__Content">
      <MembershipSymbol :level class="MembershipCard__Icon" />
      <div class="MembershipCard__Left">
        <p class="MembershipCard__Title">애니장교 계급</p>
        <strong class="MembershipCard__Level">{{ level }}</strong>
      </div>
      <p
        class="MembershipCard__Started"
        v-if="membership && membership?.tier !== 'free'"
      >
        임관 후
        <span class="MembershipCard__Counter">{{ days }}일</span>
      </p>
    </section>
    <RouterLink
      :to="
        membership?.tier === 'free' ? `/subscribe/landing` : `/subscribe/manage`
      "
      class="MembershipCard__Sub"
      v-if="promotion"
    >
      <p class="MembershipCard__SubCopy" v-if="membership?.tier === 'free'">
        <strong class="MembershipCard__SubCopyStrong"
          >믿음직스런 애니장교가 되어보세요</strong
        >
        더 많은 애니를 전문적으로 탐색할 수 있어요
      </p>
      <p class="MembershipCard__SubCopy" v-else>
        <strong class="MembershipCard__SubCopyStrong"
          >애니장교 멤버십 관리</strong
        >
        내 멤버십을 관리하고 혜택을 확인하세요
      </p>
      <i class="MembershipCard__SubIconBG">
        <IconBase class="MembershipCard__SubIcon">
          <IconArrowNext />
        </IconBase>
      </i>
    </RouterLink>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import { useUserLevel } from "@/composables/level";

import IconBase from "@/components/IconBase.vue";
import MembershipSymbol from "../membership/MembershipSymbol.vue";
import IconArrowNext from "../icons/IconArrowNext.vue";

const props = defineProps({
  // data: {
  //   type: [Object, null],
  //   required: true,
  // },
  uid: {
    type: String,
    required: true,
  },
  promotion: {
    type: Boolean,
  },
});

const data = ref(null);
const loading = ref(true);
const membership = computed(() => data.value?.membership);
const { level, days } = useUserLevel(membership);

watch(
  () => props.uid,
  async () => {
    if (!props.uid) {
      loading.value = false;
      return;
    }

    const docRef = doc(db, "user", props.uid);
    const user = await getDoc(docRef);
    if (!user.exists()) return;

    data.value = user.data();
    loading.value = false;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.MembershipCard {
  display: flex;
  flex-direction: column;
  > * + * {
    border-top: 1px solid hsl(var(--bg-300));
  }
  &__Content {
    gap: 1.2rem;
    flex-shrink: 0;
    height: 6rem;
    display: flex;
    align-items: center;
    padding: {
      left: 1.2rem;
      right: 1.6rem;
    }
  }
  &__Left {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__Icon {
    width: 3.6rem;
    height: 3.6rem;
  }
  &__Title {
    font-size: 1.2rem;
  }
  &__Level {
    font-size: 1.6rem;
    font-weight: 700;
  }

  &__Started {
    margin-left: auto;
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
  }
  &__Counter {
    font-weight: 900;
  }

  &__Sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.6rem;
    height: 6rem;
  }
  &__SubCopy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
  &__SubCopyStrong {
    font-size: 1.4rem;
    font-weight: 700;
  }
  &__SubIconBG {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    background-color: hsl(var(--bg-900) / 0.5);
    border-radius: 50%;
  }
  &__SubIcon {
    width: 1.6rem;
    height: 1.6rem;
    color: hsl(var(--bg-100));
  }
}
</style>
