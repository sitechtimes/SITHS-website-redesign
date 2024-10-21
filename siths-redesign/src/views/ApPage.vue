<template>
  <div>
    <SubpageAP :page="ApPages" />
  </div>
</template>

<script setup>
import SubpageAP from '../components/SubpageAP.vue'
import { ref, onMounted } from 'vue';
import sanityClient from '../client.js';

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
