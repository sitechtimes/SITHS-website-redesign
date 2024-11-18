<template>
  <h1>Special Opportunities</h1>
  <div class="flex flex-row items-start">
    <SubpageMenu :pages="clubLinks" :active="'Volunteer'" />
    <div class="m-2 mx-4 w-5/6">
      <SpecialOpp type="Volunteer" :resources="websiteData.opportunities.filter((el) => el.opptype == 'Volunteer')" />
    </div>
  </div>
</template>

<script setup>
import SpecialOpp from '~/components/SpecialOpp.vue';
import SubpageMenu from '../components/SubpageMenu.vue'

const websiteData = useWebsiteDataStore()

const clubLinks = [
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