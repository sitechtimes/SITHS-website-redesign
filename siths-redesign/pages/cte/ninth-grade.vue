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
        <p class="mb-4 text-sm md:text-base">In the 9th grade, students engage in our work-based learning sequence by
          starting out with Career Awareness.
          This part of the process includes career/ college fairs, job site visits, workshops with Staten Island Tech's
          partners, and college trips. The goal is for students to be aware of the variety of career fields available to
          them based on their current interests. Upon completion of the 9th grade, students will have an idea of the
          professions they want to explore more in-depth during their remaining time in high school.</p>
        <h3 class="mb-4 text-lg md:mb-4 md:text-xl">COURSES</h3>
        <p class="mb-8 text-sm md:text-base">All 9th grade students are required to take Intro to STEM Engineering & Robotics (1 semester) and
          Introduction to Technology & Careers (1 day per week). Students will then have the option of choosing between
          Intro to AV Engineering & TV Studio, or Computer Science & Engineering (1 semester). These introductory
          courses will expose students to various engineering disciplines and careers, and build basic skills in
          communication, critical thinking, collaboration, creative problem solving and design. Additionally, students
          will be exposed to specific technology applications that align with current trends in industry.</p>
        <div tabindex="0" class="collapse collapse-arrow border-base-300 border">
          <div class="collapse-title font-semibold">C.A.D./Civil Engineer & Architecture: 2 Terms, Required</div>
          <div class="collapse-content">
            <p class="mb-2 text-sm md:text-base">Visit</p>

            <p class="mb-2 text-sm md:text-base">Students use professional, industry-standard programs to become proficient in designing or drawing in 2D and
            3D with perfect precision. Students also learn how to analyze CAD designs for the purpose of interpretation
            and documentation of such drawings.</p>

            <p class="mb-2 text-sm md:text-base">A successful CAD user can work efficiently with no errors, and infuse balanced and creative design
            strategies to satisfy cost, usability, durability, and aesthetics in the final design.</p>

            <p class="mb-2 text-sm md:text-base">The class also includes discussion and use of skills for rapid prototyping using 3D printing technology with
            FDM printers using plastic and SLA printers using resin. We also use laser cutting / engraving in the course
            for robust finishing techniques for 2D material or 3D material that is pieced together.</p>

            <p class="mb-2 text-sm md:text-base">Students primarily use Autodesk software. Autodesk leads the industry globally in professional and
            educational Computer Aided Design (CAD). The first term focuses on the most widely and long standing used
            CAD software, AutoCAD. At the end of the first term all students become industry certified in AutoCAD
            through Certiport, the only globally accepted program. The second term follows a 3D driven perspective with
            Revit, Inventor, Blender/3D Studio Max, or AutoCAD in any combination or a single program with great depth.</p>

            <p class="mb-2 text-sm md:text-base">​This is a project based learning (PBL) class. The instructor teaches the material by conducting
            demonstrations often at first until students get used to the interface and general workflow in Autodesk CAD
            software. As the term develops, less demonstrations occur and a normal day will consist of students working
            on their projects getting individualized help from the instructor and also giving / receiving help from
            their peers. The projects drive the students to gather vast depth inside knowledge of technique and commands
            so they develop their own optimized style of being a CAD professional. There is NO daily homework, and NO
            written exams. Projects carry grades based on deadlines and performance. Occasionally timed and silent
            projects with no discussion or help permitted occur to assess critical skill-sets.</p>

            <p class="mb-2 text-sm md:text-base">The CAD class comes with multiple credentials for the students. As mentioned earlier, during the course of
            the year students are required to take a Certiport examination to become industry certified as an Autodesk
            AutoCAD certified user. This is free and the rate of success with no outside prep-work is effectively 100%.
            More user level certifications are available for free as optional ventures to the students. The course also
            grants the students CUNY - College of Staten Island credit for ENS 110 - Engineering Graphics provided
            students take other CTE courses in our school before graduating. The credits appear on a CUNY transcript and
            are transferable to other institutions. Lastly, CAD at SI Tech counts as the required art credit for
            graduating high school in NYC/NYS.</p>
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