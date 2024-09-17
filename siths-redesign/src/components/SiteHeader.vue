<template>
  <!-- menu toggle-->
  <div
    class="fixed inset-0 bg-[#1c1b1b] bg-opacity-90 z-50 flex items-center justify-center"
    :class="{ hidden: !menuVisibility }">
    <button @click="closeMenu" class="absolute top-4 right-4 text-gray-600 text-2xl px-2">
      &times;
    </button>
    <!-- nav links -->
    <div id="menu-content" class="absolute top-40 left-16 flex flex-col space-y-8 z-10">
      <RouterLink to="/" class="text-4xl text-white" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/bellschedule" class="text-4xl text-white" @click="closeMenu">Bell Schedule</RouterLink>
    </div>
  </div>
  <!-- logo and search -->
  <div class="flex flex-row justify-between items-center p-4 text-white">
    <div @click="toggleMenu" class="z-40">
      <img src="../assets/icons/menu-bar.png" alt="Menu icon" class="w-8 h-8" />
    </div>
    <div class="flex flex-row justify-center items-center space-x-4">
      <RouterLink to="/" class="text-3xl text-white"
        ><img src="../assets/icons/animated-logo.gif" class="w-12" alt="SITHS logo"
      /></RouterLink>
      <RouterLink to="/" class="text-3xl text-white">SITECH</RouterLink>
    </div>
    <div class="p-4 z-40">SEARCH</div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { ref, onUnmounted } from 'vue'

// menu is hidden by default
const menuVisibility = ref(false)

const toggleMenu = () => {
  // clicking the menu toggle will toggle the menu visibility and set overflow to prevent scrolling
  menuVisibility.value = !menuVisibility.value
  document.body.style.overflow = menuVisibility.value ? 'hidden' : ''
  document.documentElement.style.overflow = menuVisibility.value ? 'hidden' : ''

  if (menuVisibility.value) {
    // if menu is visible, animate it in
    gsap.fromTo(
      '#menu-content',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    )
  } else {
    // if menu is not visible, animate it out
    gsap.fromTo(
      '#menu-content',
      { opacity: 1, y: 0 },
      { opacity: 0, y: -100, duration: 1.2, ease: 'power4.in' }
    )
  }
}

const closeMenu = () => {
  menuVisibility.value = false
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
})
</script>

<style scoped></style>
