<template>
  <div class="flex flex-col items-center">
    <h1 class="py-2 font-extrabold">AP ENGLISH COURSES</h1>
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
      <!-- <div v-for="APcourse in courses" :key="APcourse._id" class="mb-4 flex w-[50%] flex-row"> -->
      <div class="m-8 rounded-md bg-white p-7 text-black">
        <h2 class="text-4xl font-bold">{{ APcourse.name }}</h2>
        <h3 class="my-4 text-2xl">{{ APcourse.grade }}</h3>
        <p class="w-[75%] text-lg">
          {{ APcourse.description }}
        </p>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script setup>
const courses = ref([])

const fetchCourses = async () => {
  const query = `*[_type == "courses"]{
       _id,
        name, 
        grade, 
        description,
    }`
  const { data } = await useSanityQuery(query)
  courses.value = data
}

const props = defineProps({
  page: Array,
  APcourse: String
})
await fetchCourses()
</script>
