<template>
  <div v-for="category in categories" :key="category.value" class="mx-8">
    <!-- staff component -->
    <div class="flex flex-row space-x-12 my-4 mx-10 justify-center">
      <div
        v-for="staffMember in sortByCategory(category)"
        :key="staffMember._id"
        class="flex flex-row items-center"
      >
        <div v-if="staffMember.name === 'Mark Erlenwein'" class="flex flex-row items-center">
          <img
            :src="staffMember.imageUrl"
            alt=""
            class="w-28 h-28 rounded-full object-cover mr-6 outline outline-white outline-2"
          />
          <div class="flex flex-col justify-center w-11/12">
            <h2 class="text-2xl font-semibold mb-2">{{ staffMember.name }}</h2>
            <h3 class="mb-2">{{ staffMember.role }}</h3>
            <p class="flex items-center text-white transition ease-in-out duration-300">{{ staffMember.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

const staff = ref([])
const categories = ref([
  { name: 'Administrators', value: 'administrators' },
  { name: 'Teachers', value: 'teachers' },
  { name: 'Other Employees', value: 'otherEmployees' }
])

const fetchStaff = async () => {
  const query = `*[_type == "staff"]{
      _id,
      name,
      role,
      description,
      category,
      "imageUrl": image.asset->url
    }`

  staff.value = await sanityClient.fetch(query)
}

function sortByCategory(category) {
  return staff.value.filter((staffMember) => staffMember.category === category.value)
}

onMounted(fetchStaff)
</script>
