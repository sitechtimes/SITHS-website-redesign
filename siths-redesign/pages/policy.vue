<template>
  <SchoolPolicy :page="schoolPolicies" :subjects="websiteData.policys" />
</template>
<script setup>
const websiteData = useWebsiteDataStore()
const schoolPolicies = [
  {
    name: 'Science Lab Policy'
  },
  {
    name: 'Nut-Free Zone Policy'
  },
  {
    name: 'Academic Honesty Policy'
  },
  {
    name: 'Cafeteria Policy'
  },
  {
    name: 'Student Dress Code'
  },
  {
    name: 'Cutting Classes'
  }
]
console.log(websiteData.policys)
</script>
