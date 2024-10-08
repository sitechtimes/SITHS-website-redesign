<template>
  <div>
    <SubpageAP :page="ApPages" />
  </div>
</template>

<script setup>
import SubpageAP from '../components/SubpageAP.vue'
const ApPages = [
  {
    name: 'AP English Courses',
    url: ''
  },
  {
    name: 'AP Russian Courses',
    url: ''
  },
  {
    name: 'AP History Courses',
    url: ''
  },
  {
    name: 'AP Science Courses',
    url: ''
  },
  {
    name: 'AP Math Courses',
    url: ''
  },
  {
    name: 'AP Technology Courses',
    url: ''
  }
]
</script>
