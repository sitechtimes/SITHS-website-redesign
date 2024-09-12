<!-- <template>
  <div class="flex flex-row justify-between">
    <NavBurger @click="" />
    <div class="p-4 flex flex-row text-center justify-center items-center">
      <h1 class="text-3xl">SITECH</h1>
    </div>
  </div>
  <div id="menu" class="bg-[#272525] p-96 transform translate-y-0">
    menu options
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBurger from './NavBurger.vue'
import { gsap } from 'gsap'

// onMounted(() => {
//   const toggleMenu = ref(false)

//   const showMenu = () => {
//     toggleMenu.value = !toggleMenu.value
//   }
  
//   console.log(toggleMenu.value)
//   if ((toggleMenu.value = true)) {
//     console.log('open')
//     gsap.fromTo('#menu',{opacity:0}, { duration: 1.5, opacity: 100, y: 100, ease: 'power1.out' })
//   } else if ((toggleMenu.value = false)) {
//     console.log('close')
//     gsap.from('#menu', {
//       duration: 0.5,
//       height: 0,
//       opacity: 0,
//       y: +100,
//       ease: 'power1.out'
//     })
//   }
// })
</script> -->

<!-- <template>
  <div>
    <NavBurger @click="toggleVisibility" />
      <div
      :class="[
        'transition-all transform-all duration-500 ease-in-ease-out',
        isVisible ? 'opacity-100 -translate-y-100' : 'opacity-0 translate-y-0'
      ]"
      class="bg-[#272525] h-48 flex items-center justify-center border-2 border-blue-500"
    >
      menu options
  </div>
    </div>
</template>

<script setup>
import NavBurger from './NavBurger.vue'
import { ref } from 'vue'
import {gsap} from 'gsap'

const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

</script>
 -->

<template>
  <div class="flex flex-row justify-between">
    <NavBurger @click="toggleVisibility" />
    <div class="p-4 flex flex-row text-center justify-center items-center">
      <router-link :to="{name: 'home'}" class="text-3xl text-white">SITECH</router-link>
    </div>
    <div class="p-4">SEARCH</div>
  </div>

  <div ref="menu" class="absolute bg-[#272525] h-[90vh] w-full flex items-center justify-center">
    menu options
    <router-link :to="{name: 'clubs'}" class="text-3xl text-white">Clubs and Activities</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBurger from './NavBurger.vue'
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
