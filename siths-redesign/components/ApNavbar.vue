<template>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="apCourseLinks"
      :active="'Welcome'"
      class="mb-4 w-full md:mb-0 md:mr-8 md:w-auto"
    />
  </div>
</template>

<script setup>
const apCourseLinks = [
  {
    name: 'Welcome',
    path: '/ap-courses'
  },
  {
    name: 'Selection',
    path: '/ap-courses/selection'
  },
  {
    name: 'Rubric',
    path: '/ap-courses/rubric'
  },
  {
    name: 'English',
    path: '/ap-courses/english'
  },
  {
    name: 'Russian',
    path: '/ap-courses/russian'
  },
  {
    name: 'History',
    path: '/ap-courses/history'
  },
  {
    name: 'Science',
    path: '/ap-courses/science'
  },
  {
    name: 'Math',
    path: '/ap-courses/math'
  },
  {
    name: 'Technology',
    path: '/ap-courses/technology'
  }
]
</script>
