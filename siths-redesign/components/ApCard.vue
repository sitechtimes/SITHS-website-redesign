<template>
  <div class="flex flex-col items-center">
    <h1 class="py-2 font-extrabold">AP ENGLISH COURSES</h1>
    <div class="flex w-full flex-row">
      <div class="m-8 w-[15%] rounded-md bg-white py-2">
        <div v-for="APpage in page" class="py-2">
          <NuxtLink
            to="/"
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
            >{{ APpage.name }}</NuxtLink
          >
        </div>
      </div>
      <!-- <div
        v-for="(course, index) in courses"
        :key="index"
        class="mb-4 flex w-full flex-col items-center justify-center"
      > -->
      <div class="m-8 w-[50%] rounded-md bg-white p-7 text-black">
        <h2 class="text-4xl font-bold">AP English Language and Composition</h2>
        <h3 class="my-4 text-2xl">Taken 11th Grade</h3>
        <p class="w-[75%] text-lg">
          COURSE SELECTION BASED ON FOLLOWING: CLASS AVERAGES – 90% (Cumulative English Average)
          TEACHER RECOMMENDATION – 10% 
        </p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
const websiteData = useWebsiteDataStore()

const courses = ref([])

const props = defineProps({
  page: Array
})
</script>
