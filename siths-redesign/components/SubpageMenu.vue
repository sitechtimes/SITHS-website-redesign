<template>
  <div class="left-8 top-48 z-20 mb-8 w-full rounded-md p-1 md:w-1/6 lg:absolute">
    <ul class="grid grid-cols-2 md:flex md:flex-col md:flex-wrap">
      <li
        v-for="subpage in pages"
        :key="subpage.path"
        class="w-4/5 border-b border-white p-2 md:w-full"
      >
        <a
          v-if="isExternal(subpage.path)"
          :href="subpage.path"
          target="_blank"
          rel="noopener noreferrer"
          class="lg:text-md block text-sm text-white transition duration-300 ease-in-out hover:text-gold"
        >
          {{ subpage.name }}
        </a>

        <NuxtLink
          v-else
          :class="[
            'lg:text-md block text-sm transition duration-300 ease-in-out',
            subpage.name === active ? 'text-gold' : 'text-white hover:text-gold'
          ]"
          :to="subpage.path"
          >{{ subpage.name }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  pages: Array,
  active: String
})

const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
</script>
