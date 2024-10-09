<template lang="">
  <div
    :class="`flex flex-col-reverse md:flex-row justify-center text-center gap-6 font-bold text-lg print:hidden ${!resumeStore.getVisitorCount ? 'md:justify-end' : 'md:justify-between'}`"
  >
    <p v-if="resumeStore.getVisitorCounterEnabled && resumeStore.getVisitorCount" class="underline">
      Visitor Counter: {{ resumeStore.getVisitorCount }}
    </p>
    <Button @click="print" class="hover:bg-gray-50 border-2 font-bold py-2 px-4 rounded"
      >Print my CV
    </Button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()

onMounted(() => {
  const intervalId = setInterval(() => {
    resumeStore.setVisitorCount()
  }, 10000)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})

const print = () => {
  window.print()
}
</script>
<style lang=""></style>
