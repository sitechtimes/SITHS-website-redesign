<template>
  <ApCard :page="ApPages" :courses="websiteData.courses" />
</template>

<script setup>
import ApCard from '../components/ApCard.vue'

const websiteData = useWebsiteDataStore()

const ApPages = [
  // {
  //   name: 'Welcome'
  // },
  // {
  //   name: 'Selection'
  // },
  {
    name: 'AP English'
    // selectedPage: 'AP English'
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
  // {
  //   name: 'Rubric',
  //   url: ''
  // }
]
</script>
