<template>
  <div class="mx-12 my-4 flex flex-row items-center justify-center">
    <div v-for="staffMember in staff" :key="staffMember._id" class="flex flex-row items-center">
      <div v-if="staffMember.name === staffName" class="flex flex-row items-center">
        <img
          :src="staffMember.imageUrl"
          :alt="staffMember.name + `'s photo'`"
          class="mr-6 h-28 w-28 rounded-full object-cover outline outline-2 outline-white"
        />
        <div class="flex w-11/12 flex-col justify-center">
          <h2 class="mb-2 text-2xl font-semibold">{{ staffMember.name }}</h2>
          <h3 class="mb-2">{{ staffMember.role }}</h3>
          <p class="flex items-center text-white transition duration-300 ease-in-out">
            {{ staffMember.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

const staff = ref([])

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

defineProps({
  staffName: String
})

onMounted(fetchStaff)
</script>
