<template>
  <div class="flex flex-col items-center">
    <h1 class="font-extrabold py-2">AP ENGLISH COURSES</h1>
    <div class="flex flex-row w-full">
      <div class="py-2 rounded-md bg-white w-[15%] m-8">
        <div v-for="APpage in page" class="py-2">
          <router-link
            :to="{ name: 'home' }"
            class="rounded-md text-md text-lg ml-7 text-black font-bold hover:bg-light-gray p-2 m-2 transition ease-in-out duration-300"
            >{{ APpage.name }}</router-link
          >
        </div>
      </div>
      <ApCard />
    </div>
  </div>
</template>

<script setup>
import ApCard from './ApCard.vue'
import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

const schedules = ref([])
const fetchCourses = async () => {
  const query = `*[_type == "courses"]{
  _id,
  ,
  description,
  }`
  try {
    const data = await sanityClient.fetch(query)
    if (data.length > 0) {
      schedules.value = data
      console.log('works')
    } else {
      console.log('No course found')
    }
  } catch (error) {
    console.error('Error fetching course:', error)
  }
}

onMounted(fetchCourses)
defineProps({
  page: Array
})
</script>
