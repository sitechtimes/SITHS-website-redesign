<template>
  <div>
    <h1>Special Opportunities</h1>
    <div class="flex flex-row items-start">
      <SubpageMenu :page="clubsPages" v-model="selectedChoice" />
      <SpecialOpp :type="selectedChoice"
        :resources="websiteData.opportunities.filter((el) => el.opptype == selectedChoice)" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const clubsPages = [
  {
    name: 'Internships',
    value: 'Internships'
  },
  {
    name: 'Scholarships',
    value: 'Scholarships'
  },
  {
    name: 'Volunteer',
    value: 'Volunteer'
  },
  {
    name: 'Initiatives',
    value: 'Initiatives'
  },
]
const selectedChoice = ref('Internships'); 
</script>