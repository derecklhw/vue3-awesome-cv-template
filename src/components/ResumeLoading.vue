<template lang="">
  <div
    class="grid h-screen w-screen bg-white content-center justify-items-center"
    v-if="resumeStore.getStyles.loadingScreen.imageUrl"
  >
    <img :src="`${baseUrl}/${resumeStore.getStyles.loadingScreen.imageUrl}`" />
    <span class="blink_me text-3xl md:text-4xl text-center">{{
      resumeStore.getStyles.loadingScreen.text
        ? resumeStore.getStyles.loadingScreen.text
        : 'Loading...'
    }}</span>
  </div>
  <div class="grid h-screen w-screen bg-white content-center justify-items-center" v-else>
    <span class="blink_me text-3xl md:text-8xl">{{
      resumeStore.getStyles.loadingScreen.text
        ? resumeStore.getStyles.loadingScreen.text
        : 'Loading...'
    }}</span>
  </div>
</template>
<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
const resumeStore = useResumeStore()
const baseUrl = import.meta.env.BASE_URL || '/'
</script>
<style scoped>
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
