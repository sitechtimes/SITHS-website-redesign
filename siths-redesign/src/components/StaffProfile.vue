<template>
  <div class="flex flex-row my-4 mx-12 justify-center items-center">
    <div v-for="staffMember in staff" :key="staffMember._id" class="flex flex-row items-center">
      <div v-if="staffMember.name === staffName" class="flex flex-row items-center">
        <img :src="staffMember.imageUrl" alt=""
          class="w-28 h-28 rounded-full object-cover mr-6 outline outline-white outline-2" />
        <div class="flex flex-col justify-center w-11/12">
          <h2 class="text-2xl font-semibold mb-2">{{ staffMember.name }}</h2>
          <h3 class="mb-2">{{ staffMember.role }}</h3>
          <p class="flex items-center text-white transition ease-in-out duration-300">
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
