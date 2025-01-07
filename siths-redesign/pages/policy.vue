<template>
  <SchoolPolicy :page="schoolpolicies" :policies="websiteData.policies" />
</template>

<script setup>
import SchoolPolicy from '../components/SchoolPolicy.vue'

const websiteData = useWebsiteDataStore()
// const cards = useWebsiteDataStore.cards

websiteData.policies.forEach((policy) => {
  console.log(policy.cards)
  // policy.cards.forEach((card) => {
  //   console.log(card.notes.sectionNote)
  // })
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
