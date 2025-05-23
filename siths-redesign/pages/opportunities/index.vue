<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Special Opportunities</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'About'" class="block mb-4 lg:absolute left-8 top-40" />
    <div class="flex items-center justify-center flex-col w-full md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <p >Learn all about SITHS' CTE programs!</p>
      </div>
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