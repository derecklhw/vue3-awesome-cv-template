<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

import subheader from '@/components/SubHeader.vue'
import tablelist from '@/components/TableList.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div>
    <subheader subheader="Honors & Awards" />
    <div class="space-y-3">
      <div>
        <!-- <h3 class="text-xl uppercase">International</h3> -->
        <tablelist :items="resumeStore.getHonors.international" />
      </div>
      <!-- <div>
        <h3 class="text-xl uppercase">Domestic</h3>
        <tablelist :items="resumeStore.getHonors.domestic" />
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
