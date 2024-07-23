<template>
  <h2 class="text-3xl font-bold">{{ subheader }}</h2>
  <div class="flex-grow border-b-2 border-gray-500 mb-3"></div>
</template>
<script setup lang="ts">
defineProps({
  subheader: String
})
</script>
<style lang=""></style>
