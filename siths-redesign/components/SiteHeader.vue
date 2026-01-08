<template>
  <header>
    <!-- menu toggle -->
    <div
      v-show="menuVisibility"
      class="fixed inset-0 z-50 overflow-y-scroll bg-black bg-opacity-100"
    >
      <!-- nav links -->
      <div id="menu-content" class="absolute top-10 z-10 w-full space-y-8">
        <nav class="flex flex-col flex-wrap p-8 md:flex-row">
          <div v-for="(category, index) in navLinks" :key="index" class="w-full px-4 py-8 md:w-1/4">
            <h3 class="font-kumhb mb-2 border-b-[1px] border-gold font-bold text-white">
              {{ category.category }}
            </h3>
            <ul class="space-y-2">
              <!-- sorts navigational tabs alphabetically -->
              <li
                v-for="(link, idx) in category.links.sort((a, b) => a.name.localeCompare(b.name))"
                :key="idx"
                class=""
              >
                <!-- NuxtLinks for in-site pages -->
                <NuxtLink
                  v-if="!link.directLink"
                  :to="link.path"
                  class="text-md font-normal transition-all duration-300 hover:text-gold"
                >
                  {{ link.name }}
                </NuxtLink>
                <!-- pages that exist outside of this site (opens in separate tab!) -->
                <a
                  v-else
                  :href="link.path"
                  target="_blank"
                  class="text-md flex flex-row items-center font-normal transition-all duration-300 hover:text-gold"
                >
                  {{ link.name }}
                  <img
                    class="ml-2 inline h-5 w-5 invert"
                    src="../assets/icons/xlink.png"
                    alt="Navigation leads to external site"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- menu, logo, and search -->
    <div class="flex flex-row items-center justify-between p-4 text-white">
      <!-- menu icon -->
      <div
        class="z-50 flex h-5 w-8 cursor-pointer flex-col items-center justify-between"
        @click="toggleMenu"
      >
        <div
          :class="menuVisibility ? 'translate-y-2 rotate-45' : ''"
          class="h-1 w-full bg-gold transition-all duration-500"
        ></div>
        <div
          :class="menuVisibility ? 'opacity-0' : ''"
          class="h-1 w-full bg-gold transition-all duration-500"
        ></div>
        <div
          :class="menuVisibility ? '-translate-y-2 -rotate-45' : ''"
          class="h-1 w-full bg-gold transition-all duration-500"
        ></div>
      </div>

      <!-- logo -->
      <NuxtLink to="/" class="flex flex-row items-center justify-center gap-2 text-3xl text-white">
        <img src="../assets/icons/animated-logo.gif" class="w-12" alt="SITHS logo" />
        SITHS
      </NuxtLink>

      <!-- search icon -->
      <div class="z-40 w-fit p-4">
        <button><img src="/assets/icons/search.svg" alt="Search website" /></button>
      </div>
    </div>
  </header>
</template>

<script setup>
import gsap from 'gsap'

const menuVisibility = ref(false)

const router = useRouter()
const websiteData = useWebsiteDataStore()

router.afterEach(() => {
  if (menuVisibility.value) {
    toggleMenu()
  }
})

//pre-defined navigation links based on Nuxt pages
const navLinks = [
  {
    category: 'Main',
    categoryValue: 'main',
    links: [{ name: 'Home', path: '/' }]
  },
  {
    category: 'School Information',
    categoryValue: 'schoolinformation',
    links: [
      { name: 'Bell Schedule', path: '/schedules', directLink: false },
      { name: 'Faculty and Staff', path: '/staff', directLink: false },
      { name: 'School Calendar', path: '/calendar', directLink: false },
      { name: 'School Year Information', path: '/yearly-info', directLink: false },
      { name: "Mr. Terrusa's Activity Updates", path: '/terrusa', directLink: false }
      // { name: "Communications", path: "/", directLink: false },
      // { name: "Directions", path: "/", directLink: false },
      // { name: "Special Ed/Instructional Support Services", path: "/", directLink: false },
      // { name: "School Policies", path: "/", directLink: false },
    ]
  },
  {
    category: 'Student',
    categoryValue: 'student',
    links: [
      { name: "Principal Erlwenwein's Announcements", path: '/erlenwein', directLink: false },
      { name: 'Resources', path: '/resources', directLink: false },
      { name: 'Summer Homework', path: '/summer-homework', directLink: false },
      { name: 'School Policies', path: '/school-policies', directLink: false }
    ]
  },
  {
    category: 'Clubs and Activities',
    categoryValue: 'clubsActivities',
    links: [
      // { name: "Club Information", path: "/clubs", directLink: false },
      { name: 'Career and Technical Education', path: '/cte', directLink: false },
      { name: 'Special Opportunities', path: '/opportunities', directLink: false },
      { name: 'Athletics', path: '/athletics', directLink: false }
    ]
  },
  {
    category: 'Parent',
    categoryValue: 'parent',
    links: [
      { name: 'Absence Reporting', path: '/absence-reporting', directLink: false },
      { name: 'Automated Telephone Message Directory', path: '/telephone', directLink: false },
      { name: 'Parent Coordinator', path: '/coordinator', directLink: false },
      { name: 'PTA', path: '/pta', directLink: false }
    ]
  },
  {
    category: 'Staff',
    categoryValue: 'staff',
    links: []
  },
  {
    category: 'Alumni',
    categoryValue: 'alumni',
    links: [
      { name: 'Donations', path: '/', directLink: false },
      { name: 'News', path: '/alumniNews', directLink: false },
      { name: 'Opportunities', path: '/alumOpportunities', directLink: false },
      { name: 'Transcript Request', path: '/transcript', directLink: false }
    ]
  },
  {
    category: 'Contact Us',
    categoryValue: 'contactUs',
    links: [{ name: 'Directory', path: '/directory', directLink: false }]
  }
]

function addDirectLinks(directLinks) {
  // maps the direct links to their respective categories
  const mapCategories = {
    Main: directLinks.main || [],
    'School Information': directLinks.schoolInformation || [],
    Student: directLinks.student || [],
    'Clubs and Activities': directLinks.clubsActivities || [],
    Parent: directLinks.parent || [],
    Alumni: directLinks.alumni || [],
    'Contact Us': directLinks.contactUs || [],
    Staff: directLinks.staff || []
  }

  // iterates through the direct links and maps them to follow navLinks structure
  Object.entries(mapCategories).forEach(([category, links]) => {
    const categoryLinks = links.map((item) => ({
      name: item.title,
      path: item.link,
      directLink: true
    }))

    // finds the existing category and appends the direct links
    const existingCategory = navLinks.find((link) => link.category === category)
    if (existingCategory) {
      existingCategory.links.push(...categoryLinks)
    }
  })
}

// ensures direct link function runs only when the data is populated
watch(
  () => websiteData.directLinks,
  (link) => {
    try {
      if (link && link.length > 0) {
        addDirectLinks(link[0])
      }
    } catch (error) {
      console.log(error)
    }
  },
  { immediate: true }
)

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
