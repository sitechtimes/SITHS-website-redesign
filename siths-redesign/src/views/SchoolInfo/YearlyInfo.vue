<template>
    <h1 class="text-center">2024-2025 School Year Info</h1>
    <StaffProfile staff-name="Mark Erlenwein"/>
    <InfoDropdown :posts="posts"/>
</template>

<script setup>
import InfoDropdown from '@/components/InfoDropdown.vue';
import StaffProfile from '@/components/StaffProfile.vue';

import { ref, onMounted } from 'vue'
import sanityClient from '@/client.js'

const posts = ref([])

//fetch yearlyinfo from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "yearlyinfo"]{
  _id,
  PostTitle,
  author,
  date,
  description,
  "imageUrl": image.asset->url
  }`
  try {
    const data = await sanityClient.fetch(query)
    if (data.length > 0) {
      //make sure we have data to display
      posts.value = data
      console.log('works')
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
onMounted(fetchPosts)

</script>