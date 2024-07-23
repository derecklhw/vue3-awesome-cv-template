<template lang="">
  <div class="space-y-4 md:space-y-8">
    <div v-for="(item, index) in items" :key="index">
      <div class="flex justify-between flex-col md:flex-row">
        <a v-if="item.url" :href="item.url" target="_blank" class="text-2xl font-bold">
          {{ item.company }}
        </a>
        <h3 v-else class="text-2xl font-bold">{{ item.company }}</h3>
        <p class="italic">
          {{ item.location }}
        </p>
      </div>
      <div class="flex justify-between flex-col md:flex-row mb-2">
        <p
          class="uppercase text-justify"
          :style="{
            color: resumeStore.getStyles.color ? resumeStore.getStyles.color : 'rgb(220 38 38)'
          }"
        >
          {{ item.title }}
        </p>
        <p class="text-gray-600 italic" v-if="item.endDate">
          {{ item.startDate }} - {{ item.endDate }}
        </p>
        <p class="text-gray-600 italic" v-else>{{ item.startDate }} - Present</p>
      </div>
      <ul class="list-disc list-inside">
        <li
          v-for="(responsibility, index) in item.responsibilities"
          :key="index"
          class="md:text-justify mb-2 md:mb-1"
        >
          {{ responsibility }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()

defineProps({
  items: Object
})
</script>
<style lang=""></style>
