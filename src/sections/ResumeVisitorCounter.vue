<template lang="">
  <div class="flex justify-center md:justify-end font-bold underline text-lg">
    <p>Visitor Counter: {{ resumeStore.getVisitorCount }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()

onMounted(() => {
  const intervalId = setInterval(() => {
    resumeStore.setVisitorCount()
  }, 10000)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})
</script>
<style lang=""></style>
