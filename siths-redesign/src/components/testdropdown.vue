<template>
    <div>
      <button @click="toggleMenu" class="p-2 text-white bg-blue-500 rounded">Menu</button>
      <transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div class="relative w-full h-full bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <button @click="closeMenu" class="absolute top-4 right-4 text-gray-600 text-2xl">
              &times;
            </button>
            <nav class="flex flex-col items-center justify-center space-y-4">
              <router-link to="/" @click.native="handleLinkClick" class="text-xl">Home</router-link>
              <router-link to="/about" @click.native="handleLinkClick" class="text-xl">About</router-link>
              <router-link to="/contact" @click.native="handleLinkClick" class="text-xl">Contact</router-link>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onUnmounted } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
    document.documentElement.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  
  const handleLinkClick = () => {
    closeMenu()
  }
  
  onUnmounted(() => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  })
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  