<template>
  <SchoolPolicy :page="schoolpolicies" :policies="websiteData.policies" />
</template>

<script setup>
import SchoolPolicy from '../components/SchoolPolicy.vue'

const websiteData = useWebsiteDataStore()

websiteData.policies.forEach((policy) => {
  console.log(policy.cards.notes)

  })


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
