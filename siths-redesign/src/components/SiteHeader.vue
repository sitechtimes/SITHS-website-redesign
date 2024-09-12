<template>
  <div class="flex flex-row justify-between">
    <img class="m-4" src="../assets/icons/menu-bar.png" alt="hamburger icon" @click="toggleVisibility">
    <div class="p-4 flex flex-row text-center justify-center items-center">
      <router-link :to="{name: 'home'}" class="text-3xl text-white">SITECH</router-link>
    </div>
    <div class="p-4">SEARCH</div>
  </div>

  <!-- navigation menu -->
  <div ref="menu" id="nav" class="absolute bg-[#272525] h-screen w-full flex items-center justify-center">
    <RouterLink to="/" class="text-3xl text-white">Home</RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isVisible = ref(false)
const menu = ref(null)

const toggleVisibility = () => {
  if (isVisible.value) {
    // Animate menu out
    gsap.to(menu.value, {
      opacity: 1,
      y: -1000, // or any value that fits your design
      duration: 1,
      ease: 'power4.in'
    })
  } else {
    // Animate menu in
    gsap.fromTo(menu.value, { opacity: 1, y: -1000 }, { opacity: 1, y: 2, duration: 1.5, ease: 'power4.out' })
  }
  isVisible.value = !isVisible.value
}

onMounted(() => {
  // Initialize menu position if needed
  gsap.set(menu.value, { opacity: 0, y: 0 })
})
</script>

<style scoped>
#nav {
z-index: 999;
}
</style>
