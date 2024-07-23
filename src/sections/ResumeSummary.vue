<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

import subheader from '@/components/SubHeader.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div v-if="resumeStore.getSummary">
    <subheader subheader="Summary" />
    <div class="space-y-3">
      <p class="text-justify">
        {{ resumeStore.getSummary }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
