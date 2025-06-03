<template>
  <h1>AP COURSES</h1>
  <div class="align m-auto flex w-[80vw] flex-row">
    <ApNavbar />
    <ApCard
      v-if="mathGroup && mathGroup.courses?.length"
      :type="mathGroup.heading"
      :apCourses="mathGroup.courses"
    />
    <p v-else>No AP courses found for Math.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ApNavbar from '@/components/ApNavbar.vue'
import ApCard from '@/components/ApCard.vue'
import { useWebsiteDataStore } from '@/stores/websiteData'

const websiteData = useWebsiteDataStore()
const mathGroup = computed(() =>
  websiteData.apCourses.find((el) => el.heading?.toLowerCase() === 'math')
)

console.log(websiteData.apCourses)
console.log(mathGroup.value)
</script>
