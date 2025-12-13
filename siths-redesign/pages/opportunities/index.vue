<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Special Opportunities</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="subpageLinks"
      :active="'About'"
      class="left-8 top-40 mb-4 block lg:absolute"
    />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <p class="w-full md:w-3/4 lg:w-3/5">Learn all about SITHS' CTE programs!</p>
    </div>
  </div>
</template>

<script setup>
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
