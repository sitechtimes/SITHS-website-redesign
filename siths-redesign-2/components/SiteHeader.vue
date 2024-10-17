<template>
  <!-- menu toggle-->
  <header v-show="menuVisibility"
    class="fixed inset-0 bg-[#1c1b1b] bg-opacity-100 z-50 flex items-center justify-center">
    <button @click="closeMenu" class="absolute top-4 left-4 text-gray-600 text-2xl px-2">
      &times;
    </button>
    <!-- nav links -->
    <div id="menu-content" class="absolute top-40 left-16 flex flex-col space-y-8 z-10">
      <NuxtLink to="/" class="text-2xl text-white" @click="toggleMenu">Home</NuxtLink>
      <NuxtLink to="/bellschedule" class="text-2xl text-white" @click="toggleMenu">Bell Schedule</NuxtLink>
      <NuxtLink to="/staff" class="text-2xl text-white" @click="toggleMenu">Faculty and Staff</NuxtLink>
      <NuxtLink to="/clubs" class="text-2xl text-white" @click="toggleMenu">Clubs and Activities</NuxtLink>
      <NuxtLink to="/yearlyinfo" class="text-2xl text-white" @click="toggleMenu">2024-2025 School Year Info
      </NuxtLink>
      <NuxtLink to="/erlenwein" class="text-2xl text-white" @click="toggleMenu">Principal Erlenwein Announcements
      </NuxtLink>
      <NuxtLink to="/terrusa" class="text-2xl text-white" @click="toggleMenu">Mr. Terrusa Activities Updates
      </NuxtLink>
      <NuxtLink to="/calendar" class="text-2xl text-white" @click="toggleMenu">School Calendar</NuxtLink>
    </div>
  </header>

  <!-- logo and search -->
  <div class="flex flex-row items-center justify-between p-4 text-white">
    <div class="z-40 w-20">
      <img @click="toggleMenu" src="../assets/icons/menu-bar.png" alt="Menu icon" class="h-8 w-8" />
    </div>

    <NuxtLink to="/" class="text-3xl text-white flex flex-row items-center justify-center gap-2">
      <img src="../assets/icons/animated-logo.gif" class="w-12" alt="SITHS logo" />
      SITECH
    </NuxtLink>

    <div class="z-40 w-20 text-right">
      <!-- TODO: someone make this a magnifying glass... -->
      <span>SEARCH</span>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

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
