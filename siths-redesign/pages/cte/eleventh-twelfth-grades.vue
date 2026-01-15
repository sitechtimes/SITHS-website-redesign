<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>

  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="cteLinks"
      active="11th & 12th Grade Students"
      class="left-8 top-40 mb-4 block"
    />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <h2 class="mb-4 text-center text-xl md:mb-8 md:text-2xl">11th & 12th Grade Students</h2>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">CAREER PREPARATION</h3>
        <p class="mb-6 text-sm md:text-base">
          After becoming more informed about the jobs available to them by researching and exploring
          career fields they are interested in, students should begin the Career Preparation stage
          of the Work-Based Learning Sequence. This is the final stage of their high school
          experience where students spend their last two years working both paid and unpaid
          internships in the field(s) of their interest. They should also continue attending
          workshops, visiting colleges and job sites, job shadowing, and even participating in
          summer programs.
        </p>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">COURSES</h3>
        <p class="mb-8 text-sm md:text-base">
          As an 11th or 12th grade student the options are the same for both years. We strongly
          encourage you to select courses of interest so that you can build depth of knowledge in a
          field, which will help you make better decisions about future courses, college major and
          ultimately your career. The course descriptions are linked below and are broken down by
          field of study.
        </p>
        <div v-for="section in courseSections" :key="section.category" class="mb-10">
          <h3 class="mb-4 text-lg font-semibold text-amber-200/80 underline md:text-xl">
            {{ section.category }}
          </h3>
          <CTEDropdowns :courses="section.courses" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const courseSections = computed(() => {
  const courses = websiteData.eleventhTwelfthGrade || []
  const sections = new Map()

  courses.forEach((course) => {
    const category = course.category || 'Other'
    if (!sections.has(category)) {
      sections.set(category, [])
    }
    sections.get(category).push(course)
  })

  return Array.from(sections.entries()).map(([category, courses]) => ({
    category,
    courses
  }))
})
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
