<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center md:mb-4">Career and Technical Education</h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <SubpageMenu :pages="cteLinks" :active="'About'" class="block mb-4 lg:absolute left-8 top-40" />
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-3/5">
          <p class="text-sm md:text-base mb-4">The Pre-Engineering Career & Technical Education (CTE) program at
            Staten Island Technical High School is consistent with the school’s
            original mission statement: to produce well-rounded graduates equipped
            with college and career readiness and skills. These programs provide a
            robust STEM curriculum with many opportunities and resources for
            students to engage in.
          </p>
          <div class="flex justify-center items-center p-4">
            <iframe class="w-full max-w-[400px] h-[225px] md:h-[252px]" src="https://www.youtube.com/embed/z-l2snD7PAU"
              title="Staten Island Technical High School Open House 2021 - Technology Department" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <h2 class="text-xl md:text-2xl py-4">Work-Based Learning</h2>
          <p class="text-sm md:text-base mb-4">Work-based learning (WBL) is the “umbrella” term used to identify
            activities that engage
            employers and
            schools in providing structured learning experiences for students. Our WBL program is a school-business
            partnership program that provides high school students, age 14 and above, the opportunity to obtain on-site,
            career exploration and development experiences. The focus of the program is to give students meaningful,
            hands-on, career exploration opportunities.
          </p><br>
          <p class="text-sm md:text-base mb-4">
            The philosophy behind Staten Island Technical High School’s program is to move our students’ education into
            the 21st Century and better assist our students with their future career plans. We believe in steady and
            consistent integration of this information and experience throughout the students' four years at Staten
            Island
            Tech. In the ninth grade, students begin with Career Awareness to learn about the variety of career fields
            available to them. In the 10th grade, students focus on Career Exploration, where they further research jobs
            and internships that they would be interested and shadow professionals in these fields. Lastly, in the 11th
            and 12th grades, students do intense Career Preparation by working both paid and unpaid internships in the
            fields of their interest to become fully equipped with the skills needed to succeed.
          </p><br>
          <p class="text-sm md:text-base mb-4">
            Participating in the program helps bring our students to a higher level academically, professionally, and
            personally. Students are able to experience job shadowing experiences and career days, and come in contact
            with positive adult role models who can help demonstrate, instill, and reinforce important behaviors such as
            a
            positive attitude, integrity, ethics, human relations, teamwork, and timeliness. The WBL program gives
            students the chance to become hands-on learners, build confidence in themselves and gain experience that
            will
            benefit them for the rest of their lives. The map below highlights the locations and businesses that have
            participated in our WBL program in recent years.
          </p>
          <div class="flex justify-center items-center my-8">
            <iframe class="w-full max-w-[640px] h-[300px] md:h-[480px]"
              src="https://www.google.com/maps/d/embed?mid=1-ZpN5SkxzYEz-CmUPdfs_mgLxYUQaBxH&ehbc=2E312F"></iframe>
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
    name: "CDC in the News",
    path: "/cte/cdc",
  },
  {
    name: "Makerspace",
    path: "/cte/makerspace",
  },
  {
    name: "Certifications",
    path: "/cte/certifications",
  },
  {
    name: "Partnerships",
    path: "/cte/partnerships",
  }
];
</script>
