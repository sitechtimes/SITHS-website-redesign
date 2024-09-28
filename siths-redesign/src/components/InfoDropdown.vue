<template>
  <div class="flex flex-col items-center justify-center">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="collapse collapse-plus m-8 w-[90vw] bg-white text-black"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">{{ post.PostTitle }}</div>
      <div class="collapse-content">
        <h4 class="py-2 font-bold">{{ post.author }}</h4>
        <div class="flex flex-row">
          <p class="py-4">{{ post.description }}</p>
        </div>
        <img :src="post.imageUrl" alt="post image" class="h-72" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

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

<style lang="css" scoped></style>
