<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>

  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="cteLinks"
      active="9th Grade Students"
      class="left-8 top-40 mb-4 block lg:absolute"
    />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <h2 class="mb-4 text-center text-xl md:mb-8 md:text-2xl">9th Grade Students</h2>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">CAREER AWARENESS</h3>
        <p class="mb-6 text-sm md:text-base">
          In the 9th grade, students engage in our work-based learning sequence by starting out with
          Career Awareness. This part of the process includes career/ college fairs, job site
          visits, workshops with Staten Island Tech's partners, and college trips. The goal is for
          students to be aware of the variety of career fields available to them based on their
          current interests. Upon completion of the 9th grade, students will have an idea of the
          professions they want to explore more in-depth during their remaining time in high school.
        </p>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">COURSES</h3>
        <p class="mb-8 text-sm md:text-base">
          All 9th grade students are required to take Intro to STEM Engineering & Robotics (1
          semester) and Introduction to Technology & Careers (1 day per week). Students will then
          have the option of choosing between Intro to AV Engineering & TV Studio, or Computer
          Science & Engineering (1 semester). These introductory courses will expose students to
          various engineering disciplines and careers, and build basic skills in communication,
          critical thinking, collaboration, creative problem solving and design. Additionally,
          students will be exposed to specific technology applications that align with current
          trends in industry.
        </p>
        <CTEDropdowns :courses="ninthGradeCourses" />
      </div>
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const ninthGradeCourses = computed(() => websiteData.ninthGrade || [])

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
