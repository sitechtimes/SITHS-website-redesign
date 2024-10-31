<template>
  <h1 class="p-6 text-center text-5xl font-semibold">Erlenwein Announcements</h1>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="websiteData.erlenweinPosts" />
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>