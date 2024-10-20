<template>
  <div class="bg-transparent">
    <main class="grid min-h-full place-items-center bg-transparent py-16">
      <h1 class="text-4xl font-semibold text-white">404 Page not found</h1>
      <div class="text-center">
        <h2 class="mt-4 mb-6 text-xl tracking-tight text-white sm:text-3xl">Uh Oh.....</h2>
        <div class="">
          <img src="@/assets/imgs/404-image.png" alt="404 Image" class="h-[35vh] bg-transparent" />
          <p class="text-white opacity-50 text-md">Drawing by Yifan Zhang '25</p>
        </div>
      </div>
      <div class="text-center">
        <p class="mt-6 text-xl leading-7 text-white py-5">
          This seagull took a wrong turn—let's find your way back to the island!
        </p>
      </div>
      <NuxtLink
        to="/"
        class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-[#c2b669] shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
        >Return to the island</NuxtLink
      >
    </main>
  </div>
</template>