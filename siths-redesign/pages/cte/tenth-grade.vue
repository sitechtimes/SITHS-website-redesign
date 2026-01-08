<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>

  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" active="10th Grade Students" class="left-8 top-40 mb-4 block" />
    <div class="flex w-full flex-col items-center justify-center">
      <h2 class="mb-4 text-xl md:mb-8 md:text-2xl">10th Grade Students</h2>
    </div>
  </div>
</template>

<script setup>

const cteLinks = [
  {
    name: 'About',
    path: '/cte'
  },
  {
    name: 'CDC in the News',
    path: '/cte/cdc'
  },
  {
    name: 'Makerspace',
    path: '/cte/makerspace'
  },
  {
    name: 'Certifications',
    path: '/cte/certifications'
  },
  {
    name: 'Partnerships',
    path: '/cte/partnerships'
  },
  {
    name: '9th Grade Students',
    path: '/cte/ninth-grade'
  },
  {
    name: '10th Grade Students',
    path: '/cte/tenth-grade'
  },
  {
    name: '11th & 12th Grade Students',
    path: '/cte/eleventh-twelfth-grades'
  },
  {
    name: 'Backpacks to Briefcases',
    path: '/cte/backpacks-to-briefcases'
  },
]
</script>