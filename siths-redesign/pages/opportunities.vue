<template>
  <div>
    <h1>Special Opportunities</h1>
    <div class="flex flex-row items-start">
      <SubpageMenu :page="clubsPages" v-model="selectedChoice"/>
      <SpecialOpp :type="selectedChoice" :resources="websiteData.opportunities.filter((el)=> el.opptype == selectedChoice)" />
    </div>
  </div>
</template>

<script setup>
import SubpageMenu from '../components/SubpageMenu.vue'
import SpecialOpp from '../components/SpecialOpp.vue';
import { ref } from 'vue';

const websiteData = useWebsiteDataStore()
const clubsPages = [
  {
    name: 'Internships'
  },
  {
    name: 'Scholarships'
  },
  {
    name: 'Volunteer'
  },
  {
    name: 'Initiatives'
  },
]
const selectedChoice = ref('Internships'); 
</script>