<template>
  <div class="w-full md:w-1/6 rounded-md p-1">
    <ul class="flex flex-wrap md:flex-col">
        <li v-for="subpage in pages" class="p-2 border-b border-white w-1/2 md:w-full">
          <NuxtLink v-if="subpage.name === active" class="text-sm md:text-md text-gold block" :to="subpage.path">{{ subpage.name }}</NuxtLink>
          <NuxtLink v-else class="text-sm md:text-md text-white transition duration-300 ease-in-out hover:text-gold block" :to="subpage.path">{{ subpage.name }}</NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  pages: Array,
  active: String
})
</script>
