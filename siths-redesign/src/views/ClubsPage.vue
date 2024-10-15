<template>
  <div>
    <h1 class="">Clubs and Activities</h1>
    <SubpageMenu :page="clubsPages"/>
  </div>
</template>

<script setup>
import SubpageMenu from '../components/SubpageMenu.vue'
const clubsPages = [
    {
        name: '2023-2024 Club Information',
        url: ''
    },
    {
        name: 'National Honor Society',
        url: ''
    },    {
        name: 'Special Opportunities',
        url: ''
    },
]
</script>
