<template>
  <h1>AP COURSES</h1>
  <div class="align m-auto flex w-[80vw] flex-row">
    <ApNavbar />
    <ApCard />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'

const websiteData = useWebsiteDataStore()

console.log(websiteData.apCourses)
</script>
