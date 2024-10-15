<template>
  <!-- menu toggle-->
  <header>
    class="fixed inset-0 bg-[#1c1b1b] bg-opacity-100 z-50 flex items-center justify-center"
    :class="{ hidden: !menuVisibility }">
    <button @click="closeMenu" class="absolute top-4 right-4 text-gray-600 text-2xl px-2">
      &times;
    </button>
    <!-- nav links -->
    <div id="menu-content" class="absolute top-40 left-16 flex flex-col space-y-8 z-10">
      <RouterLink to="/" class="text-2xl text-white" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/bellschedule" class="text-2xl text-white" @click="toggleMenu">Bell Schedule</RouterLink>
      <RouterLink to="/staff" class="text-2xl text-white" @click="toggleMenu">Faculty and Staff</RouterLink>
      <RouterLink to="/clubs" class="text-2xl text-white" @click="toggleMenu">Clubs and Activities</RouterLink>
      <RouterLink to="/yearlyinfo" class="text-2xl text-white" @click="toggleMenu">2024-2025 School Year Info</RouterLink>
      <RouterLink to="/erlenwein" class="text-2xl text-white" @click="toggleMenu">Principal Erlenwein Announcements</RouterLink>
      <RouterLink to="/terrusa" class="text-2xl text-white" @click="toggleMenu">Mr. Terrusa Activities Updates</RouterLink>
    </div>
    <!-- logo and search -->
    <div class="flex flex-row items-center justify-between p-4 text-white">
      <div class="z-40 w-20">
        <img @click="toggleMenu" src="../assets/icons/menu-bar.png" alt="Menu icon" class="h-8 w-8" />
      </div>

      <RouterLink to="/" class="text-3xl text-white flex flex-row items-center justify-center gap-2">
        <img src="../assets/icons/animated-logo.gif" class="w-12" alt="SITHS logo" />
        SITECH
      </RouterLink>

      <div class="z-40 w-20 text-right">
        <!-- TODO: someone make this a magnifying glass... -->
        <span>SEARCH</span>
      </div>
    </div>
  </header>
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
