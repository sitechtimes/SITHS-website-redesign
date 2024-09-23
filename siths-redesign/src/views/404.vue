<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-xl font-semibold text-black">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-black sm:text-3xl">Page not found</h1>
      <img src="@/assets/imgs/404-image.png" alt="404 Image" class="h-[20rem]" />
      <p class="mt-6 text-base leading-7 text-black">
        Sorry, but the seagull died because it couldn't find what you were looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          to="/"
          class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-[#c2b669] shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
          >Go back home</RouterLink
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
