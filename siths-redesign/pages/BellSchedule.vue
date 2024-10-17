<template>
  <div class="min-h-screen">
    <h1 class="p-6 text-center text-5xl">Bell Schedules</h1>
    <ScheduleDropdown :schedules="schedules" />
  </div>
</template>

<script setup>
const schedules = ref([])
//fetch schedules from Sanity CMS
const fetchSchedules = async () => {
  const query = '*[_type == "schedules"]'
  const { data } = await useSanityQuery(query)
  schedules.value = data.value
}

await fetchSchedules()
</script>
