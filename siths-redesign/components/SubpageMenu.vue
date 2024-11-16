<template>
  <div class="m-4 p-1 w-1/6 rounded-md">
    <ul>
        <li v-for="subpage in pages" class="text-md text-white p-2 border-b border-white transition duration-300 ease-in-out hover:text-gold">
          <NuxtLink :to=subpage.path>{{ subpage.name }}</NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  pages: Array
})
</script>
