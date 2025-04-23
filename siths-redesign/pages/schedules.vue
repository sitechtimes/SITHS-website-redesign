<template>
  <div class="min-h-screen">
    <h1 class="text-4xl font-kumbh font-semibold text-center p-6">Bell Schedules</h1>
    <ScheduleDropdown :schedules="websiteData.schedules" />
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
