<template>
  <div class="flex flex-col items-center justify-center">
    <div v-for="(post, index) in posts" :key="index" class="m-8 w-[90vw] collapse collapse-plus bg-white text-black">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">{{post.PostTitle}}</div>
      <div class="collapse-content">
        <p>{{post.description}}</p>
      </div>
    </div>

    <!-- iterate over each schedule and display it -->
    <!-- <div v-for="(post, index) in posts" :key="index" class="mb-4 flex flex-col justify-center items-center">
            <div
                @click="toggleVisibility(index)"
                class="bg-white text-gray text-2xl font-semibold w-[50vw] rounded-2xl py-2 px-6 flex items-center justify-between cursor-pointer">
                <span>{{ post.PostTitle }}</span>
                <img class="w-4" src="../assets/icons/arrow.png" alt="Arrow icon">
            </div> -->

    <!-- table only shows if the index of the table is included in visiblePosts array -->
    <!-- <div v-if="visiblePosts.includes(index)" class="mt-2 p-2 bg-base-100 rounded-box w-[50vw]">
                <div class="flex flex-col justify-center items-center bg-white">
                    <dropdown class="dropdown">
                        <h3 class="text-black">{{ post.description }}</h3>
                        <img :src="post.image" alt="">
                    </dropdown>
                </div>
            </div>
        </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import sanityClient from '../client.js'

const posts = ref([])
const visiblePosts = ref([])

//fetch yearlyinfo from Sanity CMS
const fetchPosts = async () => {
  const query = '*[_type == "yearlyinfo"]'
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

const toggleVisibility = (index) => {
  if (visiblePosts.value.includes(index)) {
    //if the table is already visible, remove it from the visiblePosts array (toggles visibility off)
    visiblePosts.value.splice(visiblePosts.value.indexOf(index), 1)
  } else {
    //if the table is not already visible, make it visible
    visiblePosts.value.push(index)
  }
}

onMounted(fetchPosts)
</script>

<style lang="css" scoped></style>
