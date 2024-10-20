<template>
  <StaffProfile staff-name="Thomas Terrusa" />
  <InfoDropdown :posts="websiteData.terrusaPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>