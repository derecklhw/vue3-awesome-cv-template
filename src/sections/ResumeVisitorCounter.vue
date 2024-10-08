<template lang="">
  <div class="flex justify-center md:justify-end font-bold text-lg">
    <div class="flex flex-col items-center md:items-end gap-6 md:gap-4">
      <p class="underline">Visitor Counter: {{ resumeStore.getVisitorCount }}</p>
      <Button @click="print" class="hover:bg-gray-50 border font-bold py-2 px-4 rounded"
        >Print my CV
      </Button>
    </div>
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
