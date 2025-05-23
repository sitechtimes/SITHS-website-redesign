<template>
  <div class="no-scroll">
    <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Special Opportunities</h1>
    <div class="flex flex-col items-start justify-center px-4 md:flex-row">
      <SubpageMenu
        :pages="subpageLinks"
        :active="'Internships'"
        class="mb-4 w-full md:mb-0 md:mr-8 md:w-auto"
      />
      <div class="flex w-full flex-col items-center justify-center md:w-5/6">
        <div class="w-full items-start text-left">
          <h2 class="py-4 text-left">Internship Documents</h2>
          <p>
            Use the forms below to apply for various job and internship opportunities, and return to
            the appropriate personnel.
          </p>
          <div>
            <div v-for="internship in websiteData.internships" :key="internship"></div>
          </div>
        </div>
        <SpecialOpp
          type="Internships"
          :resources="websiteData.opportunities.filter((el) => el.opptype == 'Internships')"
        />
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
    name: 'Internships',
    path: '/opportunities/internships'
  },
  {
    name: 'Scholarships',
    path: '/opportunities/scholarships'
  },
  {
    name: 'Volunteer',
    path: '/opportunities/volunteer'
  },
  {
    name: 'Initiatives',
    path: '/opportunities/initiatives'
  }
]
</script>
