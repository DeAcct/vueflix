<template>
  <section class="KeywordCombo">
    <slot name="title"></slot>
    <KeywordGenerator
      :user
      class="KeywordCombo__Generator"
      v-model:keywords="keywords"
      @up="upKeywords"
      @down="downKeywords"
      @clear="clearKeywords"
      :reset-disabled
    />
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";

import { useAuth } from "@/store/auth";
import { Up, Down, ReadShared, ReadMine } from "@/api/keyword";

import KeywordGenerator from "@/components/KeywordGenerator.vue";

const props = defineProps({
  parent: {
    type: Object,
    required: true,
  },
});

const auth = useAuth();
const user = computed(() => auth.user);
// const route = useRoute();

const keywords = ref([]);
const sharedKeywords = ref({});

onMounted(async () => {
  await sync();
});

async function sync() {
  if (user.value) {
    keywords.value = await ReadMine(props.parent.title);
  }
  sharedKeywords.value = await ReadShared(props.parent.title);
}

async function upKeywords(text) {
  await Up(props.parent.title, text);
  await sync();
}

async function downKeywords(text) {
  await Down(props.parent.title, text);
  await sync();
}
</script>

<style lang="scss" scoped>
.KeywordCombo {
  width: 100%;
  &__Title {
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 var(--reaction-combo-title-padding, 2rem);
  }
  &__Generator {
    width: 100%;
    margin-top: 1.6rem;
  }
}
</style>
