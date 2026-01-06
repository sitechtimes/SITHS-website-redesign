<template>
  <h1>Home</h1>
  <SubpageMenu :pages="ptaLinks" :active="'About'" class="absolute left-8 top-40 mb-4" />
</template>
<script>
const ptaLinks = [
  {
    name: 'About',
    path: '/pta'
  },
  {
    name: 'Communications',
    path: '/pta/communications'
  },
  {
    name: 'Bake Sales',
    path: '/pta/bakesales'
  },
  {
    name: 'NYC Dept of Education',
    path: 'https://www.schools.nyc.gov/home'
  }
]
</script>
