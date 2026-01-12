<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>

  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" active="10th Grade Students" class="left-8 top-40 mb-4 block" />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <h2 class="mb-4 text-center text-xl md:mb-8 md:text-2xl">10th Grade Students</h2>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">CAREER EXPLORATION</h3>
        <p class="mb-6 text-sm md:text-base">
          After becoming aware of the vast array of professions available, students spend the 10th
          grade exploring and researching a few fields that they may be interested in. The Career
          Exploration part of the Work-Based Learning sequence involves visiting job sites,
          attending more workshops with our business partners to strengthen professional skills, job
          shadowing, and beginning college trips to aid their college selection and application
          process in the future.
        </p>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">COURSES</h3>
        <p class="mb-8 text-sm md:text-base">
          All 10th grade students are required to take C.A.D. / Civil Engineering & Architecture.
          Students will then have the option to take an additional CTE course in AP Computer Science
          Principles, Electronics & Green Technology, or Adv. AV Engineering & TV Studio. The course
          descriptions are linked below.
        </p>
      </div>
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
  }
]
</script>
