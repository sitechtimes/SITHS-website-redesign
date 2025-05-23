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
import { computed } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'

const websiteData = useWebsiteDataStore()

const apCourseLinks = computed(() => {
  const links = [
    {
      name: 'All AP Courses',
      path: '/ap-courses'
    }
  ]

  websiteData.apCourses.forEach((courseGroup) => {
    if (courseGroup.heading) {
      const slug = courseGroup.heading
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')

      links.push({
        name: courseGroup.heading,
        path: `/ap-courses/${slug}`
      })
    }
  })
  return links
})
</script>
