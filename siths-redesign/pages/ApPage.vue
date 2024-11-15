<template>
  <ApCard :page="ApPages" :courses="websiteData.courses" />
</template>

<script setup>
import ApCard from '../components/ApCard.vue'

const websiteData = useWebsiteDataStore()
console.log(websiteData.courses.name)

const ApPages = [
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
