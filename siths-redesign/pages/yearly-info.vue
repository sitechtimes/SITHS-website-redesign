<template>
  <h1 class="p-6 text-center text-5xl font-semibold">2024-2025 School Year Info</h1>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="websiteData.posts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
