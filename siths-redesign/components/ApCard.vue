<template>
  <div v-if="courseGroup" class="mx-8 rounded-md bg-white p-10 text-black">
    <h2 class="mb-4 text-2xl font-bold">{{ heading }}</h2>
    <div v-for="course in courseGroup.courses" :key="course.courseName">
      <h3 class="text-xl font-semibold">{{ course.courseName }}</h3>
    </div>
    <p v-if="courseGroup.subnote" class="text-gray-500 text-sm italic">{{ courseGroup.subnote }}</p>
  </div>
</template>

<script setup>
defineProps({
  heading: String,
  courseGroup: Object
})
</script>
