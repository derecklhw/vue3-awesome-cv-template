<template lang="">
  <div
    :class="`flex flex-col-reverse sm:flex-row justify-center sm:justify-between text-center gap-6 font-semibold sm:font-bold text-base sm:text-lg print:hidden`"
  >
    <p v-if="resumeStore.getVisitorCounterEnabled && resumeStore.getVisitorCount">
      Visitor Counter: {{ displayedCount }}
    </p>
    <div
      v-else-if="resumeStore.getVisitorCounterEnabled && !resumeStore.getVisitorCount"
      class="flex gap-2 justify-center md:justify-start"
    >
      <p>Visitor Counter:</p>
      <SpinnersThreeDotsBounce />
    </div>
    <div class="flex gap-4 justify-center">
      <Button @click="print" class="hover:bg-gray-50 border-2 font-bold py-2 px-4 rounded"
        >Print my CV
      </Button>
      <a href="https://github.com/derecklhw/vue3-awesome-cv-template" target="_blank">
        <font-awesome-icon :icon="['fa-brands', 'fa-github']" class="size-12 hover:text-gray-500" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import SpinnersThreeDotsBounce from '@/components/icons/SpinnersThreeDotsBounce.vue'
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()
const displayedCount = ref(0)

onMounted(() => {
  const intervalId = setInterval(() => {
    resumeStore.setVisitorCount()
  }, 10000)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})

watch(
  () => resumeStore.getVisitorCount,
  (newCount) => {
    if (newCount > 0) {
      animateCounter()
    }
  }
)

const print = () => {
  window.print()
}

const animateCounter = () => {
  const duration = 2000 // Animation duration in milliseconds
  const start = displayedCount.value
  const end = resumeStore.getVisitorCount
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsedTime = currentTime - startTime
    if (elapsedTime < duration) {
      displayedCount.value = Math.round(start + (end - start) * (elapsedTime / duration))
      requestAnimationFrame(update)
    } else {
      displayedCount.value = end
    }
  }

  requestAnimationFrame(update)
}
</script>
<style lang=""></style>
