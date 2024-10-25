<template>
  <div class="min-h-screen">
    <h1 class="p-6 text-center text-5xl">Bell Schedules</h1>
    <ScheduleDropdown :schedules="websiteData.schedules" />
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
