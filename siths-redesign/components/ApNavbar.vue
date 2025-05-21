<template>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="apCourses"
      :active="'Welcome'"
      class="mb-4 w-full md:mb-0 md:mr-8 md:w-auto"
    />
  </div>
</template>

<script setup>
function getApCourses(apCoursesData) {
  if (!apCoursesData?.length) return []

  return apCoursesData[0].courses.map((course) => ({
    name: course.courseName,
    path: course.description || '#'
  }))
}

const apCourses = getApCourses(websiteData.apCourses)
</script>
