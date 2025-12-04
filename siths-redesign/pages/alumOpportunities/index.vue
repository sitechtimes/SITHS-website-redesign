<template>
  <h1 class="p-6 text-center text-4xl font-semibold">ALUMNI OPPORTUNITIES</h1>
  <NewsPosts :posts="websiteData.alumOpportunities" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
