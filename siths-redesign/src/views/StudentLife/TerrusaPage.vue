<template>
  <h1 class="">Mr. Terrusa Announcements</h1>
    <StaffProfile staff-name="Thomas Terrusa"/>
    <InfoDropdown :posts="TerrusaPosts"/>
</template>

<script setup>
import InfoDropdown from '@/components/InfoDropdown.vue';
import StaffProfile from '@/components/StaffProfile.vue';

import { ref, onMounted } from 'vue'
import sanityClient from '@/client'

const TerrusaPosts = ref([])

//fetch terrusa from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "terrusa"]{
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
      TerrusaPosts.value = data
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
onMounted(fetchPosts)
</script>