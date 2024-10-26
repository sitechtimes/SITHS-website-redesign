<template>
  <header>
    <!-- menu toggle -->
    <div v-show="menuVisibility"
      class="fixed inset-0 bg-[#1c1b1b] bg-opacity-100 z-50 flex items-center justify-center">
      <!-- nav links -->
      <div id="menu-content" class="absolute top-40 left-16 flex flex-col space-y-8 z-10">
        <nav>
          <div v-for="(category, index) in navLinks" :key="index" class="mb-4">
            <h3 class="text-xl font-bold mb-2 underline">{{ category.category }}</h3>
            <ul class="space-y-2">
              <li v-for="(link, idx) in category.links" :key="idx">
                <NuxtLink :to="link.path" class="text-xl font-semibold hover:text-gold transition-all duration-300">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- menu, logo, and search -->
    <div class="flex flex-row items-center justify-between p-4 text-white">
      <!-- menu icon -->
      <div class="z-50 w-8 h-5 flex flex-col justify-between items-center cursor-pointer" @click="toggleMenu">
        <div :class="menuVisibility ? 'rotate-45 translate-y-2' : ''"
          class="w-full h-1 transition-all bg-gold duration-500"></div>
        <div :class="menuVisibility ? 'opacity-0' : ''" class="w-full h-1 transition-all duration-500 bg-gold">
        </div>
        <div :class="menuVisibility ? '-rotate-45 -translate-y-2' : ''"
          class="w-full h-1 transition-all bg-gold duration-500"></div>
      </div>

      <NuxtLink to="/" class="text-3xl text-white flex flex-row items-center justify-center gap-2">
        <img src="../assets/icons/animated-logo.gif" class="w-12" alt="SITHS logo" />
        SITECH
      </NuxtLink>

      <div class="z-40 w-20">
        <button> <img src="/assets/icons/search.svg" alt="Search website"></button>
      </div>
    </div>
  </header>
</template>


<script setup>
import gsap from 'gsap'

const menuVisibility = ref(false)
const router = useRouter()

router.afterEach(() => {
  toggleMenu()
})

const navLinks = [
  {
    category: "Main",
    links: [
      { name: "Home", path: "/" },
    ]
  },
  {
    category: "School Information",
    links: [
      { name: "Bell Schedule", path: "/schedules" },
      { name: "Faculty and Staff", path: "/staff" },
      { name: "School Year Information", path: "/yearly-info" },
      { name: "Mr. Terrusa's Activity Updates", path: "/terrusa" },
    ]
  },
  {
    category: "Student",
    links: [
      { name: "Principal Erlwenwein's Announcements", path: "/erlenwein" },
    ]
  },
  {
    category: "Clubs and Activities ",
    links: [
      { name: "Club Information", path: "/clubs" },
    ]
  }
];

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

</script>
