<template>
  <div class="m-8 p-1 w-1/6 rounded-md">
    <div v-for="subpage in page">
      <NuxtLink to="/">
        <h5 class="text-md text-white p-2 border-t border-white transition duration-300 ease-in-out hover:text-gold">{{ subpage.name }}</h5>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>
