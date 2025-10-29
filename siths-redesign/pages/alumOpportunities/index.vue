<template>
  <h1 class="p-6 text-center text-4xl font-semibold">ALUMNI OPPORTUNITIES</h1>
<NewsPosts :posts="posts"></NewsPosts>
</template>

<script setup>
import NewsPosts from '~/components/NewsPosts.vue';

const websiteData = useWebsiteDataStore()
const posts = websiteData.alumOpportunities

onMounted(()=> {
  console.log('data', posts)
})

</script>