<template>
  <div class="my-4 flex flex-row items-center justify-center">
    <div v-for="staffMember in websiteData.staff" :key="staffMember._id" class="flex flex-row items-center">
      <div v-if="staffMember.name === staffName" class="flex flex-row items-center">
        <img :src="staffMember.imageUrl" :alt="staffMember.name + `'s photo'`"
          class="mr-6 w-28 rounded-full object-cover outline outline-2 outline-white" />
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
const websiteData = useWebsiteDataStore()

defineProps({
  staffName: String
})
</script>
