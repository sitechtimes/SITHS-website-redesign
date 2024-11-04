<template>
  <div class="flex flex-col items-center">
    <h1 class="py-2 font-extrabold">AP Math</h1>
    <div class="flex w-full flex-row">
      <div class="m-8 w-[15%] rounded-md bg-white py-2">
        <div v-for="(APpage, index) in page" :key="index" class="py-2">
          <NuxtLink
            to="/"
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
            >{{ APpage.name }}</NuxtLink
          >
        </div>
      </div>
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="mb-4 flex w-full flex-col items-center justify-center"
      >
        <div
          v-for="(card, index) in course.cards"
          :key="index"
          class="m-8 rounded-md bg-white p-7 text-white"
        >
          <h2 class="text-4xl font-bold">{{ card.courseName }}</h2>
          <h3 class="my-4 text-2xl">{{ card.courseGrade }}</h3>
          <p class="w-[75%] text-lg">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  page: Array,
  courses: Array
})
</script>
