<template>
  <div class="min-h-screen">
    <h1>Bell Schedules</h1>
    <ScheduleDropdown :schedules="websiteData.schedules" />
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
