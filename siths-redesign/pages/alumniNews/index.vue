<template>
  <h1 class="p-6 text-center text-4xl font-semibold">Erlenwein Announcements</h1>
  <InfoDropdown :posts="websiteData.alumniNews" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>