<template>
  <div class="mx-8 rounded-md bg-white p-10 text-black">
    <div class="align-center flex w-[60vw] text-center">
      <h2 class="m-auto py-4">{{ type }}</h2>
      <div class="py-2"></div>
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

defineProps({
  type: String,
  apCourses: {
    type: Array,
    default: () => []
  }
})
</script>
