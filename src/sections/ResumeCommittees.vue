<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

import subheader from '@/components/SubHeader.vue'
import tablelist from '@/components/TableList.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div>
    <subheader subheader="Committees" />
    <tablelist :items="resumeStore.getCommittees" />
  </div>
</template>

<style scoped></style>
