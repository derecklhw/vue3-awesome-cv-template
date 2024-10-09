<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'

const resumeStore = useResumeStore()
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="flex flex-col items-center md:flex-row space-x-2 text-5xl md:text-8xl text-center">
      <h1 class="font-thin">{{ resumeStore.getHeader.firstName }}</h1>
      <h1 class="font-bold">{{ resumeStore.getHeader.lastName }}</h1>
    </div>
    <p
      class="text-center text-xl md:text-4xl"
      :style="{
        color: resumeStore.getStyles.color ? resumeStore.getStyles.color : 'rgb(220 38 38)'
      }"
    >
      {{ resumeStore.getHeader.title }}
    </p>
    <p class="italic text-gray-600 text-center">
      {{ resumeStore.getHeader.address }}
    </p>
    <div class="flex flex-wrap justify-center items-center gap-2 text-center w-10/12 md:w-full">
      <div v-if="resumeStore.getHeader.phone" class="flex justify-center items-center space-x-1">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p>{{ resumeStore.getHeader.phone }}</p>
      </div>
      <div v-if="resumeStore.getHeader.homepage" class="flex justify-center items-center space-x-1">
        <span class="hidden md:inline">|</span>
        <font-awesome-icon icon="fa-solid fa-home" />
        <p>{{ resumeStore.getHeader.homepage }}</p>
      </div>
      <!-- For social media links -->
      <div
        v-for="(item, index) in resumeStore.getHeader.socials"
        :key="index"
        class="flex justify-center items-center space-x-1"
      >
        <span class="hidden md:inline">|</span>
        <font-awesome-icon :icon="['fa-brands', item.name.toLowerCase()]" />
        <a
          v-if="/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(item.value)"
          :href="'mailto:' + item.value"
          class="hover:underline"
        >
          {{ item.value }}
        </a>
        <a v-else :href="item.url" class="hover:underline">{{ item.value }}</a>
      </div>
    </div>
    <p class="italic text-gray-600 text-center">
      {{ resumeStore.getHeader.quote }}
    </p>
  </div>
</template>

<style scoped></style>
