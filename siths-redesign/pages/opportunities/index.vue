<template>
  <h1 class="text-center text-2xl md:text-3xl lg:text-4xl">Special Opportunities</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="subpageLinks" :active="'About'" class="left-8 top-40 mb-4 block lg:absolute" />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <p class="mb-8 text-lg md:text-xl text-center font-semibold">
          Learn all about SITHS' CTE Programs!
        </p>
        <p class="mb-4 text-sm md:text-base">
          At SITHS, the Career and Technical Education (CTE) programs provide students with meaningful opportunities to
          explore their interests and prepare for future careers. Each subpage here will allow you to discover the many
          ways you can grow beyond the classroom. From scholarships that support your academic goals to volunteering
          experiences that strengthen your connection to the community, there is something here for everyone. You’ll
          also find initiative-based programs that encourage leadership, creativity, and innovation. Internship
          opportunities allow you to gain real-world experience and build valuable professional skills while still in
          school. Each section highlights pathways that can help you stand out and succeed in your chosen field. Whether
          you are just beginning to explore your interests or already have a clear direction, these resources are here
          to support your journey. Take the time to explore each category and see what aligns with your goals. Your
          future starts with the opportunities you choose to pursue today.
        </p>
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
