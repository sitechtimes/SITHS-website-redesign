<template>
    <div>
        <h1 class="mb-8">Career and Technical Education</h1>
        <SubpageMenu  :page="ctePages" v-model="selectedChoice"/>
    </div>
    
</template>
  
<script setup>
import { ref } from 'vue';
import SubpageMenu from '~/components/SubpageMenu.vue';
const ctePages = [
{
    name: 'About',
  },
  {
    name: 'CDC in the News',
  },
  {
    name: 'MakerSpace',
  },
  {
    name: 'Certifications',
  },
  {
    name: 'Partnerships',
  }
]
const selectedChoice = ref(''); 

</script>
  
