<template>
    <div>
        <h1>Special Opportunities</h1>
      <SubpageMenu :page="clubsPages" />
      <SpecialOpp :type="Internships"/>
    </div>
  </template>
  
  <script setup>
  import SubpageMenu from '../components/SubpageMenu.vue'
  import SpecialOpp from '../components/SpecialOpp.vue';
  const clubsPages = [
    {
      name: 'Internships',
      url: ''
    },
    {
      name: 'Scholarships',
      url: ''
    },
    {
      name: 'Volunteer',
      url: ''
    },
    {
      name: 'Career & Technical Education (CTE)',
      url: ''
    }
  ]
  </script>