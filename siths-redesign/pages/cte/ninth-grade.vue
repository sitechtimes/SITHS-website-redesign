<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>

  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" active="9th Grade Students" class="left-8 top-40 mb-4 block lg:absolute" />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <div class="w-full md:w-3/4 lg:w-3/5">
        <h2 class="mb-4 text-xl md:mb-8 md:text-2xl text-center">9th Grade Students</h2>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">CAREER AWARENESS</h3>
        <p class="mb-6 text-sm md:text-base">In the 9th grade, students engage in our work-based learning sequence by
          starting out with Career Awareness.
          This part of the process includes career/ college fairs, job site visits, workshops with Staten Island Tech's
          partners, and college trips. The goal is for students to be aware of the variety of career fields available to
          them based on their current interests. Upon completion of the 9th grade, students will have an idea of the
          professions they want to explore more in-depth during their remaining time in high school.</p>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">COURSES</h3>
        <p class="mb-8 text-sm md:text-base">All 9th grade students are required to take Intro to STEM Engineering &
          Robotics (1 semester) and
          Introduction to Technology & Careers (1 day per week). Students will then have the option of choosing between
          Intro to AV Engineering & TV Studio, or Computer Science & Engineering (1 semester). These introductory
          courses will expose students to various engineering disciplines and careers, and build basic skills in
          communication, critical thinking, collaboration, creative problem solving and design. Additionally, students
          will be exposed to specific technology applications that align with current trends in industry.</p>
        <div tabindex="0" class="collapse collapse-arrow rounded-xl bg-gold/10 shadow-md transition-all duration-300 hover:shadow-lg">
          <div class="collapse-title text-lg font-bold text-gold">
            Intro to Technology & Careers Lab
            <span class="block text-sm font-normal text-white/70">2 terms (1 day per week) • Required</span>
          </div>
          <div class="collapse-content pt-2">
            <div class="rounded-lg bg-white/5 p-4">
              <p class="mb-4 text-sm md:text-base">The goal of this course is to provide you with the technical ability,
                knowledge, and skills necessary to succeed in your future endeavors and prepare you for college and career
                readiness. We are committed to providing you with a unique experience while at Staten Island Tech,
                supporting each of you as you work towards building the 21st century skills needed to stand apart in this
                competitive market.</p>
              <p class="mb-4 text-sm font-semibold text-gold">This course focuses on:</p>
              <ul class="mb-4 ml-4 list-disc list-inside text-sm md:text-base space-y-3">
                <li>Acquiring and accurately using protocols for effective communication in oral, written, and
                  multimedia/digital formats</li>
                <li>Examining multiple sources of career information from diverse formats to make informed career
                  decisions and manage personal career plans</li>
                <li>Analyzing existing and emerging computer technologies to research and explore the global impacts to
                  industry and the comprehensive job market</li>
                <li>Developing the key 'soft skills' needed for workplace success</li>
                <li>Understanding how an individual's digital media presence is used by potential employers and
                  post-secondary agencies to evaluate candidates</li>
                <li>Exploring work-based learning opportunities to demonstrate and expand upon knowledge and skills gained
                  during classroom instruction</li>
                <li>Developing skills needed to transition from the classroom to the workplace, including core academic
                  and technical knowledge, employability skills, and job specific training</li>
              </ul>
              <p class="text-sm md:text-base">The skills learned in this class can be applied broadly as you progress
                throughout both your educational and professional careers. An emphasis will be placed on 21st century
                learning skills and Oracy - a curriculum designed to provide students with effective communication
                techniques that can be applied throughout their educational and professional careers.</p>
            </div>
          </div>
        </div>
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
  },
]
</script>