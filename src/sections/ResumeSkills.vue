<template lang="">
  <div>
    <subheader subheader="Skills" />
    <minimallisting :items="resumeStore.getSkills" />
  </div>
</template>
<script setup lang="ts">
import subheader from '@/components/SubHeader.vue'
import minimallisting from '@/components/MinimalListing.vue'
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()
</script>
<style lang=""></style>
