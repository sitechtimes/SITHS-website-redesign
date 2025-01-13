<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Special Opportunities</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'Initiatives'" class="w-full md:w-auto mb-4 md:mb-0 md:mr-8" />
    <div class="flex items-center justify-center flex-col w-full md:w-5/6">
      <SpecialOpp type="Initatives"
        :resources="websiteData.opportunities.filter((el) => el.opptype == 'Initiatives')" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const subpageLinks = [
  {
    name: 'About',
    path: '/opportunities'
  },
  {
    name: "Internships",
    path: "/opportunities/internships",
  },
  {
    name: "Scholarships",
    path: "/opportunities/scholarships",
  },
  {
    name: "Volunteer",
    path: "/opportunities/volunteer",
  },
  {
    name: "Initiatives",
    path: "/opportunities/initiatives",
  }
];
</script>