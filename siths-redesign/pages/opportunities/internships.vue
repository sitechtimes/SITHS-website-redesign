<template>
  <div class="no-scroll">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Special Opportunities</h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <SubpageMenu :pages="subpageLinks" :active="'Internships'" class="block mb-4 lg:absolute left-8 top-40" />
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-3/5">
          <div class="items-start text-left w-full">
            <h2 class="py-4 text-left">Internship Documents</h2>
            <p>Use the forms below to apply for various job and internship opportunities, and return to the appropriate
              personnel.
            </p>
          </div>
          <SpecialOpp type="Internships"
            :resources="websiteData.opportunities.filter((el) => el.opptype == 'Internships')" />
        </div>
      </div>
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