<template>
  <div>
    <ApCard :page="ApPages" />
  </div>
</template>

<script setup>
import ApCard from '../components/ApCard.vue'

const ApPages = [
  {
    name: 'Welcome',
    url: ''
  },
  {
    name: 'Selection',
    url: ''
  },
  {
    name: 'English',
    url: ''
  },
  {
    name: 'Russian',
    url: ''
  },
  {
    name: 'History',
    url: ''
  },
  {
    name: 'Science',
    url: ''
  },
  {
    name: 'Math',
    url: ''
  },
  {
    name: 'Technology',
    url: ''
  },
  {
    name: 'Rubric',
    url: ''
  }
]
</script>
