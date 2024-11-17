<template>
  <div class="m-4 w-1/6 rounded-md p-1">
    <ul>
      <li
        v-for="subpage in pages"
        class="text-md border-b border-white p-2 text-white transition duration-300 ease-in-out hover:text-gold"
      >
        <NuxtLink :to="subpage.path">{{ subpage.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  pages: Array
})
</script>
