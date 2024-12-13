<template>
  <SchoolPolicy :page="apcourses" :policies="websiteData.policies" />
</template>

<script setup>
import SchoolPolicy from '../components/SchoolPolicy.vue'

const websiteData = useWebsiteDataStore()
console.log(websiteData.policies.name)

const apcourses = [
  {
    name: 'Cutting Classes'
  },
  {
    name: 'Student Dress Code'
  },
  {
    name: 'Cafeteria Policy'
  },
  {
    name: 'Nut-Free Zone Policy'
  },
  {
    name: 'Academic Honesty Policy'
  },
  {
    name: 'Science Lab Policy'
  }
]
</script>
