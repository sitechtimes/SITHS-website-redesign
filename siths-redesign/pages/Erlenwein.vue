<template>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="websiteData.erlenweinPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>