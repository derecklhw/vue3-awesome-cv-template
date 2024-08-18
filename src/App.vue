<template>
  <div
    class="flex justify-center md:p-4"
    :style="{ 'font-family': resumeStore.getStyles.fontFamily }"
  >
    <ResumeLoading v-if="resumeloading" />

    <div class="py-8 px-6 md:px-24 space-y-4 w-full md:w-5/6 bg-white shadow-lg md:text-2xl" v-else>
      <ResumeVisitorCounter v-if="resumeStore.getVisitorCounterEnabled" />
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
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import { onMounted, computed } from 'vue'

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

const resumeloading = computed(() =>
  resumeStore.getVisitorCounterEnabled
    ? resumeStore.getResumeLoading || resumeStore.getVisitorCount === 0
    : resumeStore.getResumeLoading
)

onMounted(() => {
  initialiseResumeStore()
})

const initialiseResumeStore = () => {
  resumeStore.setStylesData('styles.json')
  resumeStore.setResumeData('resume.json')

  resumeStore.setVisitorCounterEnabled(
    process.env.VUE_APP_INCREMENT_VISITOR_COUNT_API && process.env.VUE_APP_SET_VISITOR_COUNT_API
      ? true
      : false
  )

  if (resumeStore.getVisitorCounterEnabled) {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      resumeStore.setVisitorCount()
    } else {
      resumeStore.updateVisitorCount()
    }
  }
}
</script>
