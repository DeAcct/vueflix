<template>
  <main class="History">
    <strong>{{ wannaSee.length }}</strong>
    <ul class="History__List">
      <ThumbnailSet
        v-for="{ aniTitle, thumbnail } in wannaSee"
        :key="`${aniTitle}-${part}-${index}-${title}`"
        class="History__Item"
      >
        <template #image>
          <div class="History__Image">
            <OptimizedMedia :src="thumbnail" :alt="aniTitle" />
          </div>
        </template>
        <template #text>
          <div class="History__TextLink">
            <span class="History__AniTitle">
              {{ aniTitle }}
            </span>
          </div>
        </template>
      </ThumbnailSet>
    </ul>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useWannaSee } from "@/api/wannaSee";
import { getNickname } from "@/api/userMeta";

import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";

const { getWannaSee } = useWannaSee();
const wannaSee = ref([]);
const route = useRoute();
onMounted(async () => {
  wannaSee.value = await getWannaSee(route.params.uid);
  route.meta.appBar.activityContent = await getNickname(route.params.uid);
});
</script>
