<template>
  <div class="m-4 w-1/6 rounded-md p-1">
    <ul>
        <li v-for="subpage in pages" class="p-2 border-b border-white">
          <NuxtLink v-if="subpage.name === active" class="text-md text-gold" :to=subpage.path>{{ subpage.name }}</NuxtLink>
          <NuxtLink v-else class="text-md text-white transition duration-300 ease-in-out hover:text-gold":to=subpage.path>{{ subpage.name }}</NuxtLink>
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
