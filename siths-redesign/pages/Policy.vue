<template>
  <SchoolPolicy :page="apcourses" :policies="websiteData.policies" />
</template>

<script setup>
import SchooolPolicy from '../components/SchoolPolicy.vue'

const websiteData = useWebsiteDataStore()
console.log(websiteData.policies.name)

const apcourses = [
  {
    name: 'AP English'
  },
  {
    name: 'AP Russian'
  },
  {
    name: 'AP History'
  },
  {
    name: 'AP Science'
  },
  {
    name: 'AP Math'
  },
  {
    name: 'AP Technology'
  }
]
</script>
