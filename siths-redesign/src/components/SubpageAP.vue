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
      <div class="p-5 rounded-md bg-white w-[60%] m-8">
        <h2 class="text-black font-bold text-4xl">AP English Language and Composition</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>
