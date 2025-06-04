<template>
  <h1>AP COURSES</h1>
  <div class="align m-auto flex w-[80vw] flex-row">
    <ApNavbar />
    <ApCard :type="'Math'" />
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
</script>
