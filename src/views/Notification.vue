<template>
  <ToggleSetting
    v-model="theme"
    :value="['켜기', '끄기']"
    :update-callback="themeToggle"
    class="Notification"
  >
    <template #title>앱 테마</template>
    <template #description> 새로운 애니가 올라오면 알려드려요! </template>
    <template #content></template>
  </ToggleSetting>
</template>

<script setup>
import ToggleSetting from "@/layout/ToggleSetting.layout.vue";
</script>
