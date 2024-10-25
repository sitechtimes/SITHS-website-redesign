<template>
  <div class="m-8 w-fit rounded-md bg-white">
    <div v-for="subpage in page" class="py-2">
      <NuxtLink to="/" class="transition duration-300 ease-in-out hover:bg-light-gray">
        <h4>{{ subpage.name }}</h4>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>
