<template>
  <SchoolPolicy :page="schoolpolicies" :policies="websiteData.policies" />
</template>

<script setup>
import SchoolPolicy from '../components/SchoolPolicy.vue'

const websiteData = useWebsiteDataStore()
console.log(websiteData.policies)


const schoolpolicies = [
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
