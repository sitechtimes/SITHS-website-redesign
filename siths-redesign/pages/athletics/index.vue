<template>
    <div>
      <h1>Athletics</h1>
      <SubpageMenu :pages="athleticsLinks" :active="'About'" class="absolute left-8 top-40" />
      {{ selectedChoice }}
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const athleticsLinks = [
    {
      name: 'Teams',
      path: "/athletics/teams",
    },
    {
      name: 'Forms',
      path: "/athletics/forms",
    },
    {
      name: 'Spring 2025 PSAL Interest Information',
      path: 'Spring 2025 PSAL Interest Information',
    }
  ]
  const selectedChoice = ref(''); 
  </script>
  