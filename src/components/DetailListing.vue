<template lang="">
  <div class="space-y-4 md:space-y-8">
    <div v-for="(item, index) in items" :key="index">
      <div class="flex justify-between flex-col md:flex-row">
        <div v-if="item.url && item.company">
          <a :href="item.url" target="_blank" class="text-2xl font-bold hover:underline">
            {{ item.company }}
          </a>
          <a :href="item.url" class="text-gray-600 italic text-sm md:text-base">
            (Click for more details)
          </a>
        </div>
        <h3 v-else-if="!item.url && item.company" class="text-2xl font-bold">{{ item.company }}</h3>
        <p v-if="item.location" class="italic">
          {{ item.location }}
        </p>
      </div>
      <div class="flex justify-between flex-col md:flex-row mb-2">
        <p
          v-if="item.company && item.title"
          class="uppercase text-justify"
          :style="{
            color: resumeStore.getStyles.color ? resumeStore.getStyles.color : 'rgb(220 38 38)'
          }"
        >
          {{ item.title }}
        </p>
        <div v-else-if="!item.company && item.title">
          <a
            class="uppercase text-justify hover:underline"
            :href="item.url"
            :style="{
              color: resumeStore.getStyles.color ? resumeStore.getStyles.color : 'rgb(220 38 38)'
            }"
          >
            {{ item.title }}
          </a>
          <a :href="item.url" class="text-gray-600 italic text-sm md:text-base">
            (Click for more details)
          </a>
        </div>
        <p class="text-gray-600 italic" v-if="item.startDate && item.endDate">
          {{ item.startDate }} - {{ item.endDate }}
        </p>
        <p class="text-gray-600 italic" v-else-if="item.startDate && !item.endDate">
          {{ item.startDate }} - Present
        </p>
        <p class="text-gray-600 italic" v-else-if="!item.startDate && item.endDate">
          {{ item.endDate }}
        </p>
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
      <div v-if="item.skills" class="mt-3">
        <span
          v-for="(skill, index) in item.skills"
          :key="index"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {{ skill }}
        </span>
      </div>
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
