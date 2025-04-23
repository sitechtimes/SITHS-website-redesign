<template>
  <h1 class="text-4xl font-kumbh font-semibold text-center p-6">Terrusa Announcements</h1>
  <StaffProfile staff-name="Thomas Terrusa" />
  <InfoDropdown :posts="websiteData.terrusaPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>