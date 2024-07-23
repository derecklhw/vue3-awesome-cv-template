<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import { computed } from 'vue'

const resumeStore = useResumeStore()

const date = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <div class="flex justify-between uppercase text-gray-600">
    <p>{{ date }}</p>
    <p>{{ resumeStore.getHeader.firstName }} {{ resumeStore.getHeader.lastName }}</p>
  </div>
</template>

<style scoped></style>
