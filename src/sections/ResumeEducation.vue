<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

import subheader from '@/components/SubHeader.vue'
import detaillisting from '@/components/DetailListing.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div>
    <subheader subheader="Education" />
    <detaillisting :items="resumeStore.getEducation" />
  </div>
</template>

<style scoped></style>
