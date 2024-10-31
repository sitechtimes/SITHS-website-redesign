<template>
  <h1>Terrusa Announcements</h1>
  <StaffProfile staff-name="Thomas Terrusa" />
  <InfoDropdown :posts="websiteData.terrusaPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>