<template>
  <div>
    <h1>Special Opportunities</h1>
    <div class="flex flex-row">
      <SubpageMenu :pages="clubLinks" class=""/>
      learn all about staten island tech's special cte program
    </div>
  </div>
</template>

<script setup>
import SubpageMenu from '../components/SubpageMenu.vue'
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