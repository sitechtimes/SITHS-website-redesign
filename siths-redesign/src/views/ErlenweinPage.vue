<template>
    <StaffProfile staff-name="Mark Erlenwein"/>
    <InfoDropdown :posts="ErlenweinPosts"/>
</template>

<script setup lang="ts">
import InfoDropdown from '@/components/InfoDropdown.vue';
import StaffProfile from '@/components/StaffProfile.vue';

import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

const ErlenweinPosts = ref([])

//fetch yearlyinfo from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "erlenwein"]{
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
      ErlenweinPosts.value = data
      console.log('works')
      console.log(ErlenweinPosts.value[0].description)
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(fetchPosts)
</script>