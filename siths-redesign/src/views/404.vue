<template>
  <main class="grid min-h-full place-items-center bg-white py-16">
    <h1 class="text-4xl font-semibold text-black">404 Page not found</h1>
    <div class="text-center">
      <h2 class="mt-4 text-xl font-bold tracking-tight text-black sm:text-3xl">Uh Oh.....</h2>
      <div class="">
        <img src="@/assets/imgs/404-image.png" alt="404 Image" class="h-[45vh]" />
        <p class="text-black opacity-50">Drawing by Yifan Zhang '25</p>
      </div>
    </div>
    <div class="text-center">
      <p class="mt-6 text-xl leading-7 text-black py-5">
        Sorry, but the seagull died because it couldn't find what you were looking for.
      </p>
    </div>
    <RouterLink
      to="/"
      class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-[#c2b669] shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
      >Return to the island</RouterLink
    >
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
