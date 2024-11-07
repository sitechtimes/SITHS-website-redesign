<template>
  <div>
    <h1>Clubs Information</h1>
    <SubpageMenu :page="clubsPages" v-model="selectedChoice"/>
    {{ selectedChoice }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SubpageMenu from '../components/SubpageMenu.vue'
const clubsPages = [
  {
    name: '2023-2024 Club Information',
  },
  {
    name: 'National Honor Society',
  },
  {
    name: 'Special Opportunities',
  }
]
const selectedChoice = ref(''); 
</script>
