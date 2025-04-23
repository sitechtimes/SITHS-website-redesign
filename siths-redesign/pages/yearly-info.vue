<template>
  <h1 class="text-4xl font-kumbh font-semibold text-center p-6">2024-2025 School Year Info</h1>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="websiteData.posts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
