<template>
  <div class="m-8 w-fit rounded-md bg-white py-2">
    <div v-for="subpage in page" class="py-2">
      <router-link
        :to="{ name: 'home' }"
        class="text-md m-2 rounded-md p-2 text-black transition duration-300 ease-in-out hover:bg-light-gray"
        >{{ subpage.name }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>
