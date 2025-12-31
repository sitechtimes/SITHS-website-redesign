<template>
  <h1 class="text-center text-2xl md:mb-4 md:text-3xl lg:text-4xl">
    Career and Technical Education
  </h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" :active="'Certifications'" class="left-8 top-40" />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <h2 class="mb-4 text-xl md:mb-8 md:text-2xl">Autodesk</h2>
      <div class="w-full md:w-3/4 lg:w-1/2">
        <InfoDisplay :resources="resources" :isBlock="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
const resources = [
  {
    name: 'AutoCAD Certification Exam',
    url: 'https://www.autodesk.com/certification/all-certifications/autocad-design-drafting-professional',
    description:
      'To measure student performance in our CTE AutoCAD class, students are given projects which align with the AutoCAD Certification Exam. Student work is measured in accordance with industry-accepted benchmarks, as validated by our collaboration with experts, and our usage of the Certiport AutoCAD Certification User Skills Exam to guide the curriculum. Students take the AutoCAD Certification Exam, which assesses students’ knowledge of the tools, features, and common tasks of AutoCAD.'
  },
  {
    name: 'Inventor Certification Exam',
    url: 'https://www.autodesk.com/certification/all-certifications/inventor-mechanical-design-professional',
    description:
      'Autodesk Inventor is a 3D mechanical solid modeling design software developed by Autodesk to create 3D digital prototypes. It is used for 3D mechanical design, design communication, tooling creation and product simulation. Students have the opportunity to take this certification test, and become certified to use Inventor in their potential future internships, and even careers in mechanical engineering.'
  },
  {
    name: 'Revit Certification Exam',
    url: 'https://www.autodesk.com/certification/all-certifications/revit-architectural-design-professional',
    description:
      'Autodesk Revit is a building information modeling software for architects, structural engineers, MEP engineers, designers and contractors. Our students can take the test to get certified in this software, and then move on to work at engineering or architectural firms where they will be fully equipped to professionally utilize Revit for their work.'
  },
  {
    name: 'CompTIA A+ Certification Exam',
    url: 'https://www.comptia.org/certifications/a',
    description:
      'This certification exam covers PC hardware, mobile device hardware, networking and troubleshooting hardware and network connectivity issues. CompTIA A+ covers installing and configuring operating systems including Windows, iOS, Android, Apple OS X, and Linux. It also addresses security, the fundamentals of cloud computing, and operational procedures.'
  }
]

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
  }
]
</script>
