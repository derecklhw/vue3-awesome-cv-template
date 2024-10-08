<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

import subheader from '@/components/SubHeader.vue'
import detaillisting from '@/components/DetailListing.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div>
    <subheader subheader="Projects" />
    <detaillisting :items="resumeStore.getWriting" />
  </div>
</template>

<style scoped></style>
