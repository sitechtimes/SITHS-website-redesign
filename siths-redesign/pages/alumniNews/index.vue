<template>
  <h1 class="p-6 text-center text-4xl font-semibold">ALUMNI NEWS</h1>
  <InfoDropdown :posts="posts"/>  
</template>

<script setup>
import InfoDropdown from '~/components/InfoDropdown.vue'
const websiteData = useWebsiteDataStore()
const posts = websiteData.alumniNews

onMounted(()=> {
  console.log('data', posts)
})

</script>