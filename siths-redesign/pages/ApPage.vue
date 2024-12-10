<template>
  <ApCard :page="apcourses" :subjects="websiteData.subjects" />
</template>

<script setup>
import ApCard from '../components/ApCard.vue'

const websiteData = useWebsiteDataStore()
console.log(websiteData.subjects.name)

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
