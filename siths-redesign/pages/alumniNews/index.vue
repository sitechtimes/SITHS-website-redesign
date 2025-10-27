<template>
  <h1 class="p-6 text-center text-4xl font-semibold">ALUMNI NEWS</h1>
  <InfoDropdown :posts="posts"/>
  <div v-for="post in posts">
    <span class="collapse-title text-md font-small"> {{post.subtitle}}</span>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const posts = websiteData.alumniNews

onMounted(() => {
  console.log('hi')
  console.log(posts)
})



</script>