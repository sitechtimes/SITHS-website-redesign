<template>
  <h1 class="p-6 text-center text-5xl font-semibold">Terrusa Announcements</h1>
  <StaffProfile staff-name="Thomas Terrusa" />
  <InfoDropdown :posts="websiteData.terrusaPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>