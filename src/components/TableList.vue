<template lang="">
  <table
    class="table-auto w-full border-separate border-spacing-y-4 border-spacing-x-2 md:border-spacing-0"
  >
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td class="text-left w-1/12 align-top">{{ item.date }}</td>
        <td class="text-left font-bold w-3/12 align-top">{{ item.title }}</td>
        <td class="text-left w-4/12 align-top">{{ item.event }}</td>
        <td class="text-right italic w-4/12 align-top">
          {{ item.location }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
defineProps({
  items: Object
})
</script>
<style lang=""></style>
