<template>
  <div class="mx-8 rounded-md bg-white p-10 text-black">
    <div>
      <h2 class="m-auto py-4">{{ type }}</h2>
      <div class="py-2">
        <div
          v-if="apCourses.length"
          v-for="item in apCourses"
          :key="item.courseName"
          class="w-7/8 rounded-md border-[1px] border-white p-8 transition-all duration-300 hover:border-gold"
        >
          <div>
            <h4 class="pb-2">{{ item.courseNamename }}</h4>
            <p class="text-sm">{{ item.description }}</p>
          </div>
        </div>
        <p v-else>No courses available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  apCourses: {
    type: Array,
    default: () => []
  }
})

console.log(apCourses)
</script>
