<template>
  <div>
    <h1>Clubs Information</h1>
    <SubpageMenu :page="clubsPages" v-model="selectedChoice"/>
    {{ selectedChoice }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
const clubsPages = [
  {
    name: '2023-2024 Club Information',
    value: '2023-2024 Club Information',
    url: ''
  },
  {
    name: 'National Honor Society',
    value: 'National Honor Society',
    url: ''
  },
  {
    name: 'Special Opportunities',
    value: 'Special Opportunities',
    url: ''
  }
]
const selectedChoice = ref(''); 
</script>
