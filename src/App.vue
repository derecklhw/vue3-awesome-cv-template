<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import { onBeforeMount } from 'vue'

import ResumeLoading from './components/ResumeLoading.vue'
import ResumeVisitorCounter from './sections/ResumeVisitorCounter.vue'
import ResumeHeader from './sections/ResumeHeader.vue'
import ResumeSummary from './sections/ResumeSummary.vue'
import ResumeExperience from './sections/ResumeExperience.vue'
import ResumeHonors from './sections/ResumeHonors.vue'
import ResumePresentation from './sections/ResumePresentation.vue'
import ResumeWriting from './sections/ResumeWriting.vue'
import ResumeCommittee from './sections/ResumeCommittees.vue'
import ResumeSkills from './sections/ResumeSkills.vue'
import ResumeEducation from './sections/ResumeEducation.vue'
import ResumeExtracurricular from './sections/ResumeExtracurricular.vue'
import ResumeFooter from './sections/ResumeFooter.vue'

const resumeStore = useResumeStore()

onBeforeMount(() => {
  resumeStore.setResumeData('resume.json')
  resumeStore.setStylesData('styles.json')
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    resumeStore.setVisitorCount()
  } else {
    resumeStore.updateVisitorCount()
  }
})
</script>

<template>
  <ResumeLoading v-if="resumeStore.getVisitorCount === 0" />

  <div
    class="py-8 px-6 md:px-24 space-y-4 w-full md:w-5/6 bg-white md:m-4 shadow-lg md:text-2xl"
    :style="{ 'font-family': resumeStore.getStyles.fontFamily }"
    v-else
  >
    <ResumeVisitorCounter />
    <ResumeHeader />
    <ResumeSummary />
    <ResumeExperience />
    <ResumeHonors />
    <ResumePresentation />
    <ResumeWriting />
    <ResumeCommittee />
    <ResumeSkills />
    <ResumeEducation />
    <ResumeExtracurricular />
    <ResumeFooter />
  </div>
</template>

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
