<template>
  <div class="m-8 p-2 w-fit rounded-md bg-white">
    <div v-for="subpage in page">
      <NuxtLink to="/" class="transition duration-300 ease-in-out hover:bg-light-gray">
        <h5 class="text-md text-black p-2">{{ subpage.name }}</h5>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>
